const { createClient } = require('@supabase/supabase-js');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
};

const VALID_CONTENT_TYPES = ['business', 'event', 'article', 'neighborhood_update'];

const TARGET_TABLES = {
  business: 'businesses',
  event: 'events',
  article: 'articles',
};

const MAX_BATCH_SIZE = 100;

async function processItem(supabase, item) {
  const { content_type, source, data } = item;

  // Validate content type
  if (!content_type || !VALID_CONTENT_TYPES.includes(content_type)) {
    return { success: false, error: `Invalid content_type: ${content_type}` };
  }

  if (!data || typeof data !== 'object') {
    return { success: false, error: 'data field is required and must be an object' };
  }

  try {
    // Log to ai_ingest_log
    const { data: logEntry, error: logError } = await supabase
      .from('ai_ingest_log')
      .insert({
        content_type,
        source: source || 'ai_agent',
        payload: data,
        status: 'processing',
      })
      .select()
      .single();

    if (logError) {
      return { success: false, error: logError.message };
    }

    let targetId = null;

    if (content_type === 'neighborhood_update') {
      const { id: neighborhoodId, ...updateData } = data;

      if (!neighborhoodId) {
        await supabase
          .from('ai_ingest_log')
          .update({ status: 'failed', error_message: 'Missing data.id for neighborhood_update' })
          .eq('id', logEntry.id);
        return { success: false, ingest_id: logEntry.id, error: 'neighborhood_update requires data.id' };
      }

      const { data: updated, error: updateError } = await supabase
        .from('neighborhoods')
        .update(updateData)
        .eq('id', neighborhoodId)
        .select()
        .single();

      if (updateError) {
        await supabase
          .from('ai_ingest_log')
          .update({ status: 'failed', error_message: updateError.message })
          .eq('id', logEntry.id);
        return { success: false, ingest_id: logEntry.id, error: updateError.message };
      }

      targetId = updated.id;
    } else {
      const targetTable = TARGET_TABLES[content_type];

      const { data: inserted, error: insertError } = await supabase
        .from(targetTable)
        .insert({
          ...data,
          status: 'pending',
          source: source || 'ai_agent',
        })
        .select()
        .single();

      if (insertError) {
        await supabase
          .from('ai_ingest_log')
          .update({ status: 'failed', error_message: insertError.message })
          .eq('id', logEntry.id);
        return { success: false, ingest_id: logEntry.id, error: insertError.message };
      }

      targetId = inserted.id;
    }

    // Update log status to completed
    await supabase
      .from('ai_ingest_log')
      .update({ status: 'completed', target_id: targetId })
      .eq('id', logEntry.id);

    return { success: true, ingest_id: logEntry.id, target_id: targetId };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

module.exports = async function handler(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    return res.end();
  }

  // Set CORS headers on all responses
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // API key authentication
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.INGEST_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: invalid or missing API key' });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  try {
    const { items } = req.body;

    if (!Array.isArray(items)) {
      return res.status(400).json({ error: 'items must be an array' });
    }

    if (items.length === 0) {
      return res.status(400).json({ error: 'items array must not be empty' });
    }

    if (items.length > MAX_BATCH_SIZE) {
      return res.status(400).json({
        error: `Batch size exceeds maximum of ${MAX_BATCH_SIZE} items. Received ${items.length}.`,
      });
    }

    // Process each item, collecting results
    const results = [];
    for (const item of items) {
      const result = await processItem(supabase, item);
      results.push(result);
    }

    const processed = results.filter((r) => r.success).length;

    return res.status(200).json({
      success: true,
      processed,
      total: items.length,
      results,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
