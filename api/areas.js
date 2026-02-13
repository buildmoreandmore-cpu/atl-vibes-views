const { createClient } = require('@supabase/supabase-js');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  try {
    const { neighborhoods, id, slug } = req.query;

    let query = supabase.from('areas').select('*', { count: 'exact' });

    // Filter by single area
    if (id) {
      query = query.eq('id', id);
    }
    if (slug) {
      query = query.eq('slug', slug);
    }

    const { data: areas, error: areasError, count } = await query;

    if (areasError) {
      return res.status(500).json({ error: areasError.message });
    }

    // Optionally join neighborhoods
    if (neighborhoods === 'true' && areas && areas.length > 0) {
      const areaIds = areas.map((a) => a.id);

      const { data: neighborhoodsData, error: nhError } = await supabase
        .from('neighborhoods')
        .select('*')
        .in('area_id', areaIds);

      if (nhError) {
        return res.status(500).json({ error: nhError.message });
      }

      // Group neighborhoods by area_id
      const neighborhoodsByArea = {};
      for (const nh of neighborhoodsData) {
        if (!neighborhoodsByArea[nh.area_id]) {
          neighborhoodsByArea[nh.area_id] = [];
        }
        neighborhoodsByArea[nh.area_id].push(nh);
      }

      // Attach neighborhoods to each area
      for (const area of areas) {
        area.neighborhoods = neighborhoodsByArea[area.id] || [];
      }
    }

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({
      data: areas,
      meta: {
        total: count,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
