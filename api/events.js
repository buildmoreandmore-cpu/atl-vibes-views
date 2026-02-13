const { createClient } = require('@supabase/supabase-js');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

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

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  try {
    if (req.method === 'GET') {
      const {
        area,
        category,
        upcoming,
        search,
        featured,
        status = 'approved',
        page = 1,
        perPage = 20,
      } = req.query;

      const pageNum = parseInt(page, 10);
      const perPageNum = parseInt(perPage, 10);
      const from = (pageNum - 1) * perPageNum;
      const to = from + perPageNum - 1;

      let query = supabase
        .from('events')
        .select('*', { count: 'exact' })
        .eq('status', status)
        .range(from, to);

      if (area) {
        query = query.eq('area_id', area);
      }
      if (category) {
        query = query.eq('category', category);
      }
      if (featured !== undefined) {
        query = query.eq('featured', featured === 'true');
      }
      if (search) {
        query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
      }

      // Upcoming filter and ordering
      if (upcoming === 'true') {
        const today = new Date().toISOString().split('T')[0];
        query = query.gte('start_date', today).order('start_date', { ascending: true });
      } else {
        query = query.order('featured', { ascending: false });
      }

      const { data, error, count } = await query;

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
      return res.status(200).json({
        data,
        meta: {
          total: count,
          page: pageNum,
          perPage: perPageNum,
        },
      });
    }

    if (req.method === 'POST') {
      const body = req.body;

      const { data, error } = await supabase
        .from('events')
        .insert({
          ...body,
          status: 'pending',
          source: 'user_submitted',
        })
        .select()
        .single();

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(201).json({ data });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
