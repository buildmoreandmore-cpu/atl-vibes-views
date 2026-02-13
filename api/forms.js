const { createClient } = require('@supabase/supabase-js');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const VALID_FORM_TYPES = ['contact', 'newsletter', 'business', 'event', 'support'];

const SUCCESS_MESSAGES = {
  contact: 'Thank you for reaching out. We will get back to you shortly.',
  newsletter: 'You have been subscribed to our newsletter.',
  business: 'Your business submission has been received and is under review.',
  event: 'Your event submission has been received and is under review.',
  support: 'Your support request has been received. We will respond soon.',
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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  try {
    const { formType, ...data } = req.body;

    // Validate form type
    if (!formType || !VALID_FORM_TYPES.includes(formType)) {
      return res.status(400).json({
        error: `Invalid form type. Must be one of: ${VALID_FORM_TYPES.join(', ')}`,
      });
    }

    const email = data.email || null;
    const ipAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null;
    const pageUri = data.page_uri || req.headers['referer'] || null;

    // Insert into form_submissions
    const { data: submission, error: submitError } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        data: data,
        email: email,
        ip_address: ipAddress,
        page_uri: pageUri,
      })
      .select()
      .single();

    if (submitError) {
      return res.status(500).json({ error: submitError.message });
    }

    // If newsletter, also upsert into newsletter_subscribers
    if (formType === 'newsletter' && email) {
      const { error: subError } = await supabase
        .from('newsletter_subscribers')
        .upsert(
          {
            email: email,
            subscribed_at: new Date().toISOString(),
          },
          { onConflict: 'email', ignoreDuplicates: true }
        );

      if (subError) {
        console.error('Newsletter subscriber upsert error:', subError.message);
        // Non-blocking: still return success for the form submission
      }
    }

    return res.status(200).json({
      success: true,
      message: SUCCESS_MESSAGES[formType],
      data: { id: submission.id },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
