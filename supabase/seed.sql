-- ============================================================
-- ATL Vibes & Views - Seed Data
-- ============================================================
-- Populates areas and neighborhoods from site-config.js and
-- neighborhoods-data.js
-- ============================================================

-- ============================================================
-- AREAS (9 top-level city zones from SiteConfig)
-- ============================================================
INSERT INTO areas (name, slug, tagline, description, image_url, vibes, sort_order) VALUES
  ('Buckhead',      'buckhead',      'Uptown Luxury & Nightlife',   'Atlanta''s upscale district known for luxury shopping, fine dining, and vibrant nightlife.',                  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600', ARRAY['Luxury','Nightlife','Shopping','Dining'],      1),
  ('Midtown',       'midtown',       'Arts, Culture & Innovation',  'The cultural heart of Atlanta with world-class museums, theaters, and a thriving tech scene.',                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600', ARRAY['Arts','Culture','Tech','Parks'],                2),
  ('Downtown',      'downtown',      'History & Urban Energy',      'The historic core where Atlanta''s past meets its future in a dynamic urban landscape.',                     'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600', ARRAY['History','Sports','Urban','Transit'],           3),
  ('Eastside',      'eastside',      'Creative & Eclectic',         'A collection of creative neighborhoods with indie shops, street art, and diverse dining.',                   'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1600', ARRAY['Creative','Indie','Diverse','Walkable'],        4),
  ('Westside',      'westside',      'Emerging & Authentic',        'Rapidly evolving neighborhoods blending rich history with new development.',                                 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600', ARRAY['Emerging','History','Food','Community'],        5),
  ('Southwest',     'southwest',     'Heritage & Community',        'Established communities with deep roots and growing cultural attractions.',                                  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600', ARRAY['Heritage','Family','Community','Parks'],        6),
  ('Southeast',     'southeast',     'Growth & Opportunity',        'Areas of tremendous growth with new retail, dining, and entertainment options.',                              'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600', ARRAY['Growth','Affordable','Nature','Family'],        7),
  ('South Atlanta', 'south-atlanta', 'Revival & Culture',           'Historic neighborhoods experiencing a cultural and economic renaissance.',                                   'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1600', ARRAY['Revival','Culture','History','Affordable'],     8),
  ('North Atlanta', 'north-atlanta', 'Suburban & Connected',        'Suburban communities with urban amenities, top schools, and diverse dining.',                                 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600', ARRAY['Suburban','Schools','Dining','Parks'],          9);


-- ============================================================
-- NEIGHBORHOODS - Buckhead (29 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Buckhead Village', 'buckhead-village',
   'The heart of Buckhead''s shopping and nightlife scene. This walkable district features upscale boutiques, trendy restaurants, and some of Atlanta''s most popular bars and clubs. The area underwent a major redevelopment creating a vibrant mixed-use destination.',
   'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
   ARRAY['Nightlife','Shopping','Dining','Walkable'],
   '{"title": "The Evolution of Buckhead Village: From Strip Malls to Urban Oasis", "excerpt": "How a $1 billion redevelopment transformed this neighborhood into Atlanta''s premier mixed-use destination.", "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Lenox', 'lenox',
   'Home to Atlanta''s premier shopping destinations, Lenox Square and Phipps Plaza. This area combines world-class retail with luxury high-rise living, making it a hub for fashion enthusiasts and urban professionals.',
   'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600',
   ARRAY['Luxury Shopping','High-Rise Living','Fashion','Urban'],
   '{"title": "Lenox Square at 65: A Retail Icon''s Continuing Evolution", "excerpt": "From suburban mall to urban lifestyle center, exploring the ongoing transformation of Atlanta''s most famous shopping destination.", "image": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800", "category": "Retail", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Peachtree Battle', 'peachtree-battle',
   'An affluent residential neighborhood known for its historic homes and tree-lined streets. Named after the Civil War battle fought nearby, this area offers a quiet retreat while remaining close to Buckhead''s amenities.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Historic','Residential','Family-Friendly','Quiet'],
   '{"title": "Preserving History: Peachtree Battle''s Architectural Heritage", "excerpt": "A look at the neighborhood''s commitment to maintaining its historic character while embracing modern living.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "History", "date": "December 2025"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Garden Hills', 'garden-hills',
   'A charming 1920s neighborhood with cottage-style homes and a strong sense of community. Known for its annual Tour of Homes and active civic association, Garden Hills maintains its village character.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Historic','Community','Cottage-Style','Walkable'],
   '{"title": "Garden Hills: Where Neighbors Still Know Each Other", "excerpt": "Inside one of Atlanta''s most tight-knit communities and their secret to maintaining neighborhood bonds.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Peachtree Hills', 'peachtree-hills',
   'An eclectic neighborhood mixing bungalows with new construction, located near the Peachtree Hills recreation center. Popular with young professionals for its central location and diverse housing options.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Eclectic','Young Professionals','Central','Diverse'],
   '{"title": "Peachtree Hills: The Hidden Gem Between Buckhead and Midtown", "excerpt": "Why young professionals are flocking to this often-overlooked neighborhood.", "image": "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800", "category": "Neighborhood Spotlight", "date": "January 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Brookwood', 'brookwood',
   'A transitional area between Midtown and Buckhead featuring a mix of commercial and residential developments. The Brookwood Exchange and nearby restaurants make it a convenient urban neighborhood.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Urban','Convenient','Mixed-Use','Transitional'],
   '{"title": "Brookwood''s Commercial Renaissance", "excerpt": "New developments are bringing fresh energy to this connector neighborhood.", "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800", "category": "Development", "date": "December 2025"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Brookwood Hills', 'brookwood-hills',
   'A historic neighborhood established in 1922 with English cottage-style architecture. This tight-knit community features winding streets, mature trees, and homes with distinctive character.',
   'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=1600',
   ARRAY['Historic','English Cottage','Community','Charming'],
   '{"title": "The Timeless Appeal of Brookwood Hills", "excerpt": "How this century-old neighborhood maintains its character amid Atlanta''s rapid growth.", "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Chastain Park', 'chastain-park',
   'Named after Atlanta''s beloved 268-acre park featuring an amphitheater, golf course, tennis center, and horse park. The surrounding neighborhood offers family-friendly living with easy access to nature and outdoor recreation.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Family-Friendly','Parks','Nature','Concerts'],
   '{"title": "Summer Nights at Chastain: A Guide to the Amphitheater Season", "excerpt": "Everything you need to know about Atlanta''s favorite outdoor concert venue.", "image": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800", "category": "Entertainment", "date": "January 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'North Buckhead', 'north-buckhead-area',
   'A residential area featuring larger lots and custom homes near the Chattahoochee River. Popular with families seeking more space while staying close to Buckhead''s urban amenities.',
   'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
   ARRAY['Spacious','Family-Friendly','Custom Homes','Nature'],
   '{"title": "Living Large in North Buckhead", "excerpt": "Why families are choosing spacious North Buckhead over suburban alternatives.", "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", "category": "Real Estate", "date": "December 2025"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Kingswood', 'kingswood',
   'A quiet residential enclave with stately homes and excellent schools. This established neighborhood offers a suburban feel with urban accessibility.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Residential','Family-Friendly','Schools','Quiet'],
   '{"title": "Kingswood: Where Quality Schools Meet Quality Living", "excerpt": "A deep dive into what makes this neighborhood a top choice for families.", "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800", "category": "Education", "date": "January 2026"}'::jsonb,
   10),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Castlewood', 'castlewood',
   'An upscale neighborhood with large homes on generous lots near Chastain Park. Known for its privacy and exclusivity while maintaining a family-friendly atmosphere.',
   'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
   ARRAY['Upscale','Private','Family-Friendly','Spacious'],
   '{"title": "Inside Castlewood: Buckhead''s Quiet Luxury", "excerpt": "Exploring one of Atlanta''s most prestigious yet understated neighborhoods.", "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", "category": "Luxury Living", "date": "January 2026"}'::jsonb,
   11),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Pine Hills', 'pine-hills',
   'A wooded neighborhood offering larger lots and mature pine trees. Residents enjoy a secluded feel while being minutes from Buckhead''s restaurants and shopping.',
   'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
   ARRAY['Wooded','Secluded','Nature','Peaceful'],
   '{"title": "Pine Hills: Atlanta''s Urban Forest Retreat", "excerpt": "How this neighborhood maintains its natural character in the heart of Buckhead.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "Nature", "date": "December 2025"}'::jsonb,
   12),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Ridgewood Heights', 'ridgewood-heights',
   'A hilly neighborhood with winding streets and homes featuring varied architecture. The terrain provides many homes with beautiful views of the surrounding area.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Scenic','Varied Architecture','Views','Unique'],
   '{"title": "The Views of Ridgewood Heights", "excerpt": "Discovering the unexpected vistas in this rolling Buckhead neighborhood.", "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", "category": "Architecture", "date": "January 2026"}'::jsonb,
   13),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Nancy Creek', 'nancy-creek',
   'Named after the creek that runs through it, this neighborhood offers a connection to nature with access to walking trails and green spaces. A peaceful residential area with easy access to Chastain Park.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Nature','Trails','Peaceful','Family-Friendly'],
   '{"title": "Following Nancy Creek: Trails Through Buckhead", "excerpt": "Exploring the natural waterway that gives this neighborhood its character.", "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", "category": "Outdoors", "date": "January 2026"}'::jsonb,
   14),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Tuxedo Park', 'tuxedo-park',
   'One of Atlanta''s most prestigious addresses, home to the Governor''s Mansion and historic estates. This exclusive neighborhood features some of the city''s finest architecture and most valuable real estate.',
   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
   ARRAY['Prestigious','Historic','Estates','Exclusive'],
   '{"title": "The Grand Homes of Tuxedo Park", "excerpt": "A rare look inside one of America''s most exclusive neighborhoods.", "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800", "category": "Luxury Living", "date": "January 2026"}'::jsonb,
   15),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Paces', 'paces',
   'A refined neighborhood along West Paces Ferry Road featuring elegant homes and proximity to some of Atlanta''s best restaurants and the Atlanta History Center.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Elegant','Historic','Refined','Convenient'],
   '{"title": "West Paces Ferry: Atlanta''s Most Storied Address", "excerpt": "The history and prestige behind one of the city''s most famous streets.", "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", "category": "History", "date": "December 2025"}'::jsonb,
   16),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'West Paces Ferry', 'west-paces-ferry',
   'An upscale area along the famous West Paces Ferry Road, home to the Atlanta History Center and historic Swan House. Features large estates and excellent dining options.',
   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
   ARRAY['Historic','Cultural','Upscale','Dining'],
   '{"title": "A Day on West Paces Ferry", "excerpt": "From history museums to fine dining, exploring this iconic Atlanta corridor.", "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", "category": "Lifestyle", "date": "January 2026"}'::jsonb,
   17),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Argonne Forest', 'argonne-forest',
   'A secluded enclave of luxury estates named after the World War I battle. Known for its privacy, mature landscaping, and some of Atlanta''s most impressive homes.',
   'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
   ARRAY['Exclusive','Estates','Private','Luxury'],
   '{"title": "Argonne Forest: Where Privacy Meets Prestige", "excerpt": "Inside one of Atlanta''s most exclusive and secretive neighborhoods.", "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", "category": "Real Estate", "date": "January 2026"}'::jsonb,
   18),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Whitewater Creek', 'whitewater-creek',
   'A gated community featuring luxury homes on generous lots near the Chattahoochee River. Offers privacy and security with convenient access to Buckhead amenities.',
   'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
   ARRAY['Gated','Luxury','Private','River Access'],
   '{"title": "Life Behind the Gates: Whitewater Creek", "excerpt": "What it''s like to live in one of Buckhead''s premier gated communities.", "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800", "category": "Luxury Living", "date": "December 2025"}'::jsonb,
   19),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Wildwood', 'wildwood',
   'A neighborhood with a mix of classic and contemporary homes near Mount Paran Road. Known for its excellent schools and family-oriented community.',
   'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
   ARRAY['Family-Friendly','Schools','Classic','Contemporary'],
   '{"title": "Wildwood: A Family''s Guide to the Neighborhood", "excerpt": "Everything parents need to know about raising kids in Wildwood.", "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", "category": "Family", "date": "January 2026"}'::jsonb,
   20),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Peachtree Heights East', 'peachtree-heights-east',
   'A leafy neighborhood with elegant homes and tree-lined streets. Popular with families for its excellent schools and proximity to Buckhead''s amenities.',
   'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
   ARRAY['Leafy','Elegant','Family-Friendly','Schools'],
   '{"title": "The Charm of Peachtree Heights East", "excerpt": "Why families continue to choose this classic Buckhead neighborhood.", "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", "category": "Family", "date": "January 2026"}'::jsonb,
   21),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Peachtree Heights West', 'peachtree-heights-west',
   'Historic neighborhood with grand homes dating to the early 1900s. Features impressive architecture and a strong neighborhood association maintaining its character.',
   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
   ARRAY['Historic','Grand Homes','Architecture','Community'],
   '{"title": "A Century of Elegance: Peachtree Heights West", "excerpt": "Touring the historic homes that define this prestigious neighborhood.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "Architecture", "date": "December 2025"}'::jsonb,
   22),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Haynes Manor', 'haynes-manor',
   'A walkable neighborhood near Piedmont Road with a mix of original 1940s homes and new construction. Convenient to restaurants, shops, and transit.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Walkable','Convenient','Mixed Housing','Transit'],
   '{"title": "Haynes Manor''s Walkability Revolution", "excerpt": "How this Buckhead neighborhood became one of the area''s most pedestrian-friendly.", "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", "category": "Urban Living", "date": "January 2026"}'::jsonb,
   23),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Brandon', 'brandon',
   'A small, quiet residential area with well-maintained homes and a strong community feel. Conveniently located near Lindbergh MARTA station.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Quiet','Community','Transit','Residential'],
   '{"title": "Brandon: Buckhead''s Best-Kept Secret", "excerpt": "Discovering this overlooked gem near Lindbergh station.", "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", "category": "Neighborhood Spotlight", "date": "January 2026"}'::jsonb,
   24),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Lindridge/Martin Manor', 'lindridge-martin-manor',
   'A revitalized neighborhood on the border of Buckhead and Midtown. Known for its mid-century homes and increasingly popular with young professionals.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Mid-Century','Revitalized','Young Professionals','Border Area'],
   '{"title": "The Renaissance of Lindridge/Martin Manor", "excerpt": "How young homeowners are transforming this transitional neighborhood.", "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   25),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Springlake', 'springlake',
   'A quiet residential neighborhood with modest homes and a friendly community. Offers affordability within the Buckhead area.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Affordable','Quiet','Community','Modest'],
   '{"title": "Springlake: Buckhead Living Within Reach", "excerpt": "How to enjoy the Buckhead lifestyle without the premium price tag.", "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800", "category": "Real Estate", "date": "December 2025"}'::jsonb,
   26),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Collier Hills', 'collier-hills',
   'Located near Bobby Jones Golf Course and Bitsy Grant Tennis Center, this neighborhood offers excellent recreational amenities and easy access to both Buckhead and Midtown.',
   'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
   ARRAY['Recreation','Golf','Tennis','Active Lifestyle'],
   '{"title": "The Sporting Life in Collier Hills", "excerpt": "Where golf, tennis, and active living come together.", "image": "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800", "category": "Lifestyle", "date": "January 2026"}'::jsonb,
   27),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Ardmore', 'ardmore',
   'A transitional neighborhood between Buckhead and Midtown with a mix of housing types. Known for its central location and improving amenities.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Central','Transitional','Diverse','Improving'],
   '{"title": "Ardmore''s Moment Has Arrived", "excerpt": "Why investors and homebuyers are paying attention to this up-and-coming area.", "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800", "category": "Investment", "date": "January 2026"}'::jsonb,
   28),

  ((SELECT id FROM areas WHERE slug = 'buckhead'), 'Margaret Mitchell', 'margaret-mitchell',
   'Named after the famous author, this small neighborhood near Piedmont Hospital offers convenience and character in a residential setting.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Literary','Convenient','Character','Residential'],
   '{"title": "In Margaret Mitchell''s Footsteps", "excerpt": "The literary history behind this Buckhead neighborhood''s name.", "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800", "category": "History", "date": "December 2025"}'::jsonb,
   30);


-- ============================================================
-- NEIGHBORHOODS - Midtown (11 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Midtown Core', 'midtown-core',
   'The dense urban heart of Midtown featuring high-rise condos, the Fox Theatre, and vibrant street life along Peachtree Street. A walkable urban village with excellent transit access.',
   'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600',
   ARRAY['Urban','Walkable','Transit','Entertainment'],
   '{"title": "Living the High-Rise Life in Midtown Core", "excerpt": "What it''s really like to call Atlanta''s most urban neighborhood home.", "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", "category": "Urban Living", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Arts Center', 'arts-center',
   'Home to the Woodruff Arts Center, including the High Museum of Art, Atlanta Symphony Orchestra, and Alliance Theatre. The cultural heartbeat of the entire Southeast.',
   'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600',
   ARRAY['Cultural','Arts','Museums','Performing Arts'],
   '{"title": "The Woodruff Arts Center: A Cultural Campus", "excerpt": "Exploring the institutions that make this neighborhood the South''s cultural capital.", "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800", "category": "Arts & Culture", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Piedmont Park', 'piedmont-park',
   'Atlanta''s premier urban park and the surrounding residential area. The 189-acre park hosts festivals, concerts, and provides essential green space for the city. Adjacent homes offer park views and urban convenience.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Parks','Active','Festivals','Green Space'],
   '{"title": "A Year in Piedmont Park", "excerpt": "From Music Midtown to the Dogwood Festival, the events that define Atlanta''s backyard.", "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800", "category": "Parks & Recreation", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Ansley Park', 'ansley-park',
   'Atlanta''s first garden suburb, designed in 1904 with curving streets and grand homes. Features the Ansley Golf Club and maintains its historic character while being minutes from Midtown''s urban core.',
   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
   ARRAY['Historic','Garden Suburb','Golf','Grand Homes'],
   '{"title": "Ansley Park at 120: Atlanta''s First Garden Suburb", "excerpt": "How this pioneering planned community continues to set the standard for elegant living.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Piedmont Heights', 'piedmont-heights',
   'A residential neighborhood near Piedmont Hospital with a mix of bungalows and newer homes. Offers a quieter alternative to the dense Midtown core.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Residential','Bungalows','Quiet','Central'],
   '{"title": "Piedmont Heights: The Quiet Side of Midtown", "excerpt": "Finding peace and community in one of Midtown''s most residential enclaves.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "December 2025"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Sherwood Forest', 'sherwood-forest',
   'A charming neighborhood with tree-named streets (Robin Hood, Maid Marian, Friar Tuck). Features cottage-style homes and a strong neighborhood identity.',
   'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=1600',
   ARRAY['Charming','Cottage-Style','Whimsical','Community'],
   '{"title": "The Enchanted Streets of Sherwood Forest", "excerpt": "How one Atlanta neighborhood embraced its storybook theme.", "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800", "category": "Neighborhood Spotlight", "date": "January 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Morningside', 'morningside',
   'A sought-after neighborhood known for excellent schools, beautiful parks, and strong community bonds. Features Craftsman and Tudor homes along tree-lined streets.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Family-Friendly','Schools','Parks','Craftsman Homes'],
   '{"title": "Why Families Love Morningside", "excerpt": "The schools, parks, and community that make this Atlanta''s most family-friendly neighborhood.", "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800", "category": "Family", "date": "January 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Virginia-Highland', 'virginia-highland',
   'One of Atlanta''s most beloved neighborhoods, known for its walkable village atmosphere, independent shops, and excellent restaurants along Highland Avenue.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Walkable','Village','Independent Shops','Restaurants'],
   '{"title": "The Virginia-Highland Village Experience", "excerpt": "How this neighborhood maintains its independent character in a chain-dominated world.", "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", "category": "Lifestyle", "date": "January 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Atlantic Station', 'atlantic-station',
   'A mixed-use development built on a former steel mill site. Features shopping, dining, entertainment, and residential living in a walkable urban environment.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Mixed-Use','Shopping','Entertainment','New Urbanism'],
   '{"title": "Atlantic Station: From Industrial Wasteland to Urban Village", "excerpt": "The remarkable transformation of Atlanta''s largest brownfield redevelopment.", "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Home Park', 'home-park',
   'A historic neighborhood adjacent to Georgia Tech, featuring bungalows and a mix of students and long-time residents. Known for its community spirit and affordability.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Historic','Georgia Tech','Affordable','Community'],
   '{"title": "Home Park: Where Town Meets Gown", "excerpt": "How this neighborhood balances student life with long-time resident community.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "December 2025"}'::jsonb,
   10),

  ((SELECT id FROM areas WHERE slug = 'midtown'), 'Loring Heights', 'loring-heights',
   'A small, tight-knit neighborhood near I-75 with modest homes and an active neighborhood association. Offers affordability with easy highway access.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Affordable','Community','Central','Modest'],
   '{"title": "Loring Heights: Big Community, Small Neighborhood", "excerpt": "Inside one of Atlanta''s most active neighborhood associations.", "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   11);


-- ============================================================
-- NEIGHBORHOODS - Downtown (9 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Downtown Core', 'downtown-core',
   'The central business district featuring Five Points, Centennial Olympic Park, and major attractions. A hub of commerce, sports, and convention activity.',
   'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600',
   ARRAY['Business','Sports','Conventions','Urban'],
   '{"title": "Downtown Atlanta''s Resurgence", "excerpt": "How residential development is bringing new life to Atlanta''s urban core.", "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Centennial Hill', 'centennial-hill',
   'Home to Centennial Olympic Park, the Georgia Aquarium, and World of Coca-Cola. Atlanta''s premier tourist district with growing residential options.',
   'https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=1600',
   ARRAY['Attractions','Tourism','Entertainment','Aquarium'],
   '{"title": "Living Near the World''s Largest Aquarium", "excerpt": "What it''s like to call Centennial Hill home.", "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", "category": "Urban Living", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Sweet Auburn', 'sweet-auburn',
   'The historic heart of Black Atlanta and birthplace of Dr. Martin Luther King Jr. Once called "the richest Negro street in the world," it remains a vital cultural and historic district.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['Historic','Cultural','Civil Rights','Heritage'],
   '{"title": "Sweet Auburn: Walking in Dr. King''s Footsteps", "excerpt": "A journey through the neighborhood that shaped America''s civil rights movement.", "image": "https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Old Fourth Ward', 'old-fourth-ward',
   'One of Atlanta''s hottest neighborhoods, transformed by the BeltLine and Ponce City Market. Features historic sites, new restaurants, and the Atlanta BeltLine Eastside Trail.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['BeltLine','Hot Market','Restaurants','Historic'],
   '{"title": "Old Fourth Ward: The BeltLine Effect", "excerpt": "How the Atlanta BeltLine transformed this historic neighborhood.", "image": "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Castleberry Hill', 'castleberry-hill',
   'An arts district with converted warehouses, loft living, and galleries. Known for its Second Friday Art Stroll and creative community.',
   'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
   ARRAY['Arts','Lofts','Galleries','Creative'],
   '{"title": "Castleberry Hill''s Art Scene Lives On", "excerpt": "How this warehouse district maintains its creative spirit amid gentrification.", "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800", "category": "Arts & Culture", "date": "January 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'South Downtown', 'south-downtown',
   'A rapidly developing area south of the railroad tracks featuring adaptive reuse projects and emerging creative businesses. Part of the Newport South project.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Emerging','Creative','Development','Adaptive Reuse'],
   '{"title": "South Downtown''s $2 Billion Transformation", "excerpt": "Inside the ambitious redevelopment reshaping this forgotten area.", "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Summerhill', 'summerhill',
   'Atlanta''s oldest neighborhood, revitalized by Georgia State Stadium development. Features new dining, entertainment, and residential options around the former Turner Field site.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Historic','Revitalized','Sports','Dining'],
   '{"title": "Summerhill''s Second Act", "excerpt": "How Turner Field''s transformation is reviving Atlanta''s oldest neighborhood.", "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Peoplestown', 'peoplestown',
   'A historic African American neighborhood near the Atlanta BeltLine Southside Trail. Known for its community organizing and ongoing revitalization efforts.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Historic','BeltLine','Community','Revitalizing'],
   '{"title": "Peoplestown: Community-Led Revitalization", "excerpt": "How residents are shaping the future of their historic neighborhood.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "December 2025"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'downtown'), 'Mechanicsville', 'mechanicsville',
   'One of Atlanta''s oldest neighborhoods named for the railroad mechanics who lived here. Near Mercedes-Benz Stadium, experiencing renewed interest.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Historic','Stadium','Railroad History','Emerging'],
   '{"title": "Mechanicsville: A Neighborhood Built by Railroad Workers", "excerpt": "The working-class history behind this emerging area near the stadium.", "image": "https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   9);


-- ============================================================
-- NEIGHBORHOODS - Eastside (12 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Inman Park', 'inman-park',
   'Atlanta''s first planned suburb, featuring Victorian architecture, the BeltLine, and the annual Inman Park Festival. A vibrant community with excellent restaurants and walkability.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Victorian','BeltLine','Festival','Walkable'],
   '{"title": "Inman Park: Atlanta''s Original Suburb", "excerpt": "How Atlanta''s first planned community became its most desirable.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Little Five Points', 'little-five-points',
   'Atlanta''s eclectic alternative neighborhood featuring independent shops, vintage stores, and live music venues. The city''s counterculture heart.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Eclectic','Alternative','Music','Independent'],
   '{"title": "Keeping Little Five Points Weird", "excerpt": "How the neighborhood fights to maintain its alternative identity.", "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800", "category": "Culture", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Candler Park', 'candler-park',
   'A neighborhood centered around the beloved Candler Park featuring a golf course, pool, and festival. Known for its bungalows and community spirit.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Parks','Festival','Bungalows','Community'],
   '{"title": "Candler Park: Where Community Comes First", "excerpt": "Inside one of Atlanta''s most tight-knit neighborhood communities.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Lake Claire', 'lake-claire',
   'A bohemian neighborhood with community gardens, a land trust, and a laid-back vibe. Home to the Lake Claire Community Land Trust with its treehouse and gardens.',
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600',
   ARRAY['Bohemian','Gardens','Alternative','Community'],
   '{"title": "The Lake Claire Land Trust: Community Ownership in Action", "excerpt": "How neighbors created an urban oasis through collective ownership.", "image": "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Reynoldstown', 'reynoldstown',
   'A rapidly transforming neighborhood along the BeltLine Eastside Trail. Features a mix of historic homes, new construction, and the popular Memorial Drive corridor.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['BeltLine','Transforming','Historic','Restaurants'],
   '{"title": "Reynoldstown''s BeltLine Boom", "excerpt": "Inside the neighborhood at the center of Atlanta''s hottest corridor.", "image": "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Cabbagetown', 'cabbagetown',
   'A historic mill village with shotgun houses, murals, and strong community identity. Home to the Krog Street Tunnel and its famous street art.',
   'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
   ARRAY['Historic','Murals','Mill Village','Street Art'],
   '{"title": "Cabbagetown: Atlanta''s Living Canvas", "excerpt": "How street art defines this historic mill village''s identity.", "image": "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800", "category": "Arts & Culture", "date": "January 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Edgewood', 'edgewood',
   'An emerging neighborhood known for Edgewood Avenue''s bars and restaurants. Features historic homes and increasing development activity.',
   'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
   ARRAY['Nightlife','Emerging','Bars','Historic'],
   '{"title": "Edgewood Avenue: Atlanta''s Best Bar Crawl", "excerpt": "A guide to the dive bars and music venues that define this strip.", "image": "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=800", "category": "Nightlife", "date": "January 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Kirkwood', 'kirkwood',
   'A diverse neighborhood featuring Craftsman bungalows, an excellent elementary school, and a growing restaurant scene. Strong community organizations maintain its character.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Diverse','Bungalows','Schools','Community'],
   '{"title": "Kirkwood: Diversity as Strength", "excerpt": "How this neighborhood celebrates its multicultural identity.", "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   8),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'East Atlanta Village', 'east-atlanta-village',
   'A quirky neighborhood village known for live music, local bars, and the annual East Atlanta Strut. Features a walkable main street with independent businesses.',
   'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
   ARRAY['Music','Quirky','Village','Independent'],
   '{"title": "East Atlanta Village: Atlanta''s Last Bohemia", "excerpt": "How this neighborhood maintains its indie spirit.", "image": "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=800", "category": "Culture", "date": "January 2026"}'::jsonb,
   9),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Grant Park', 'grant-park',
   'One of Atlanta''s oldest neighborhoods, home to Zoo Atlanta and the historic Grant Park. Features beautiful Victorian homes and the annual Grant Park Summer Shade Festival.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Historic','Zoo','Victorian','Festivals'],
   '{"title": "Grant Park: Where Zoo Atlanta Meets Victorian Charm", "excerpt": "Living alongside one of the nation''s top zoos.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "Lifestyle", "date": "January 2026"}'::jsonb,
   10),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'Ormewood Park', 'ormewood-park',
   'A family-friendly neighborhood adjacent to Grant Park with bungalows, excellent schools, and active community organizations. Known for its neighborhood porch parties.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Family-Friendly','Bungalows','Schools','Porches'],
   '{"title": "Ormewood Park: The Art of the Porch Party", "excerpt": "How this neighborhood became Atlanta''s most sociable.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   11),

  ((SELECT id FROM areas WHERE slug = 'eastside'), 'East Lake', 'east-lake',
   'Home to the historic East Lake Golf Club and the Charlie Yates Golf Course. Known for its successful community revitalization through the East Lake Foundation.',
   'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600',
   ARRAY['Golf','Revitalized','Community','Historic'],
   '{"title": "East Lake: A Model for Community Transformation", "excerpt": "How the East Lake Foundation created lasting neighborhood change.", "image": "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   12);


-- ============================================================
-- NEIGHBORHOODS - Westside (8 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'westside'), 'West Midtown', 'west-midtown',
   'Atlanta''s trendiest neighborhood featuring converted warehouses, art galleries, and the Westside Provisions District. A hub for design, food, and creative businesses.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Trendy','Design','Food','Creative'],
   '{"title": "West Midtown: Atlanta''s Design District", "excerpt": "How warehouses became showrooms in Atlanta''s hottest neighborhood.", "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800", "category": "Design", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'West End', 'west-end',
   'A historic African American neighborhood experiencing a renaissance. Home to the Wren''s Nest, MARTA access, and the BeltLine Westside Trail.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['Historic','BeltLine','Transit','Renaissance'],
   '{"title": "West End Rising", "excerpt": "How community investment is revitalizing this historic neighborhood.", "image": "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'Bankhead', 'bankhead',
   'A northwest Atlanta neighborhood known for its hip-hop heritage and industrial character. Major redevelopment is transforming the former quarry into Westside Park.',
   'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
   ARRAY['Hip-Hop Heritage','Industrial','Redeveloping','Park'],
   '{"title": "Bankhead Bounce: The Hip-Hop Heritage of a Neighborhood", "excerpt": "How this area shaped Atlanta''s sound and identity.", "image": "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=800", "category": "Culture", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'Grove Park', 'grove-park',
   'A residential neighborhood near Westside Park with affordable housing and community gardens. Benefits from nearby BeltLine development.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Residential','Gardens','Affordable','BeltLine Adjacent'],
   '{"title": "Grove Park''s Garden Revolution", "excerpt": "How urban farming is changing this westside community.", "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'Vine City', 'vine-city',
   'A historic neighborhood near Mercedes-Benz Stadium that was home to many civil rights leaders. Major investments are transforming this community adjacent to the new Westside Park.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['Historic','Civil Rights','Stadium','Transforming'],
   '{"title": "Vine City: Where Civil Rights Leaders Lived", "excerpt": "The historic homes and legacies of a neighborhood that shaped America.", "image": "https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'English Avenue', 'english-avenue',
   'A historic neighborhood undergoing significant transformation near Mercedes-Benz Stadium and Westside Park. Part of major community revitalization efforts.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Historic','Transforming','Stadium Adjacent','Investment'],
   '{"title": "English Avenue''s Second Chance", "excerpt": "Major investments bring hope to this historic community.", "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'Mozley Park', 'mozley-park',
   'A westside neighborhood centered around the 14-acre Mozley Park. Features historic homes and a strong community identity.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Parks','Historic','Community','Residential'],
   '{"title": "Mozley Park: The Heart of the Westside", "excerpt": "How this park and its neighborhood maintain community bonds.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Parks", "date": "January 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'westside'), 'Adamsville', 'adamsville',
   'A predominantly residential neighborhood in northwest Atlanta with established communities and increasing development interest.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Residential','Established','Northwest','Community'],
   '{"title": "Adamsville: Stability on the Westside", "excerpt": "How this established community maintains its character.", "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800", "category": "Community", "date": "December 2025"}'::jsonb,
   8);


-- ============================================================
-- NEIGHBORHOODS - Southwest (5 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'southwest'), 'Cascade Heights', 'cascade-heights',
   'An affluent African American neighborhood known for its well-maintained homes and strong community. A historic center of Black wealth and achievement in Atlanta.',
   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
   ARRAY['Affluent','Historic','Community','Achievement'],
   '{"title": "Cascade Heights: A Legacy of Black Excellence", "excerpt": "The history and continuing importance of this prestigious neighborhood.", "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'southwest'), 'Collier Heights', 'collier-heights',
   'One of the nation''s first affluent African American suburbs, developed in the 1950s. Features mid-century modern homes and maintains its historic character.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Historic','Mid-Century','Affluent','Pioneering'],
   '{"title": "Collier Heights: America''s First Black Suburb", "excerpt": "How this neighborhood broke barriers in the 1950s.", "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'southwest'), 'Historic Southwest', 'southwest-atlanta',
   'The heart of southwest Atlanta featuring historic neighborhoods, churches, and community institutions that have long served as centers of Black life in Atlanta.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['Historic','Community','Churches','Cultural'],
   '{"title": "The Churches of Southwest Atlanta", "excerpt": "How faith institutions anchor these historic communities.", "image": "https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800", "category": "Faith", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'southwest'), 'West Manor', 'west-manor',
   'A quiet residential neighborhood with ranch-style homes and tree-lined streets. Known for its family-friendly atmosphere and community stability.',
   'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
   ARRAY['Residential','Family-Friendly','Ranch Homes','Quiet'],
   '{"title": "West Manor: Where Neighbors Watch Out for Each Other", "excerpt": "Inside one of Southwest Atlanta''s most stable communities.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'southwest'), 'Venetian Hills', 'venetian-hills',
   'A historic neighborhood near the Atlanta BeltLine Westside Trail. Features a mix of housing styles and benefits from nearby park and trail access.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Historic','BeltLine','Parks','Diverse Housing'],
   '{"title": "Venetian Hills Meets the BeltLine", "excerpt": "How trail development is impacting this southwest neighborhood.", "image": "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   5);


-- ============================================================
-- NEIGHBORHOODS - Southeast (4 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'southeast'), 'Lakewood Heights', 'lakewood-heights',
   'A historic neighborhood near the BeltLine Southside Trail with affordable housing and convenient access to downtown. Growing interest from young homebuyers.',
   'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
   ARRAY['Historic','BeltLine','Affordable','Emerging'],
   '{"title": "Lakewood Heights: Southside''s Hidden Gem", "excerpt": "Why first-time homebuyers are discovering this affordable neighborhood.", "image": "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800", "category": "Real Estate", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'southeast'), 'South River Gardens', 'south-river-gardens',
   'A residential neighborhood near the South River with increasing development activity. Features mature trees and affordable housing options.',
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600',
   ARRAY['Residential','Affordable','Nature','Developing'],
   '{"title": "South River Gardens: Nature at Your Doorstep", "excerpt": "Living near Atlanta''s South River greenway.", "image": "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800", "category": "Nature", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'southeast'), 'Gresham Park', 'gresham-park',
   'A DeKalb County community bordering Atlanta with residential neighborhoods and commercial areas. Known for its diverse population and community amenities.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Diverse','Residential','Commercial','Community'],
   '{"title": "Gresham Park: Where DeKalb Meets Atlanta", "excerpt": "Exploring the community on the county line.", "image": "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800", "category": "Community", "date": "December 2025"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'southeast'), 'East Point', 'east-point',
   'A charming city adjacent to Atlanta with a revitalized downtown, MARTA access, and growing arts scene. Known for affordable housing near the airport.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Charming','Transit','Arts','Affordable'],
   '{"title": "East Point''s Downtown Revival", "excerpt": "How this suburban city is creating its own urban village.", "image": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   4);


-- ============================================================
-- NEIGHBORHOODS - South Atlanta (4 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'south-atlanta'), 'College Park', 'college-park',
   'Home to the Atlanta Metropolitan State College and convenient to Hartsfield-Jackson Airport. Features historic homes and a revitalizing downtown.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['College Town','Airport','Historic','Revitalizing'],
   '{"title": "College Park: Gateway to Atlanta", "excerpt": "How proximity to the world''s busiest airport is shaping this community.", "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'south-atlanta'), 'Hapeville', 'hapeville',
   'The birthplace of Delta Air Lines and the Chick-fil-A Dwarf House. This small city features a walkable downtown and strong community identity.',
   'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
   ARRAY['Historic','Aviation','Walkable','Small Town'],
   '{"title": "Hapeville: Where Delta and Chick-fil-A Began", "excerpt": "The surprising origins of two iconic American brands.", "image": "https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800", "category": "History", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'south-atlanta'), 'Forest Park', 'forest-park',
   'A diverse city south of Atlanta known for the Atlanta State Farmers Market and Fort Gillem redevelopment. Features affordable housing and cultural diversity.',
   'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
   ARRAY['Diverse','Farmers Market','Affordable','Redeveloping'],
   '{"title": "Forest Park''s International Flavors", "excerpt": "Exploring the diverse cuisines of this multicultural community.", "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800", "category": "Food", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'south-atlanta'), 'Union City', 'union-city',
   'A rapidly growing city southwest of Atlanta with new development, the South Fulton Parkway, and increasing commercial activity.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Growing','Development','Commercial','Southwest'],
   '{"title": "Union City''s Growth Spurt", "excerpt": "How this small city is managing rapid development.", "image": "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   4);


-- ============================================================
-- NEIGHBORHOODS - North Atlanta (8 neighborhoods)
-- ============================================================
INSERT INTO neighborhoods (area_id, name, slug, description, image_url, vibes, featured_story, sort_order) VALUES
  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Sandy Springs', 'sandy-springs',
   'A major city north of Atlanta with corporate headquarters, upscale shopping, and the Chattahoochee River National Recreation Area. Features diverse housing and excellent amenities.',
   'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
   ARRAY['Corporate','Upscale','River','Suburban'],
   '{"title": "Sandy Springs: A City Within a City", "excerpt": "How this edge city created its own identity.", "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", "category": "Urban Planning", "date": "January 2026"}'::jsonb,
   1),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Dunwoody', 'dunwoody',
   'Home to Perimeter Mall and a major business district. This DeKalb County city features excellent schools, diverse dining, and MARTA access.',
   'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
   ARRAY['Business','Shopping','Schools','Transit'],
   '{"title": "Dunwoody: More Than a Mall", "excerpt": "How this business hub is creating community identity.", "image": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   2),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Brookhaven', 'brookhaven',
   'A DeKalb County city known for its tree-lined streets, excellent schools, and proximity to Oglethorpe University. Features diverse neighborhoods from historic to new construction.',
   'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
   ARRAY['Family-Friendly','Schools','Trees','Diverse'],
   '{"title": "Brookhaven: Where Families Put Down Roots", "excerpt": "Why families choose this tree-canopied community.", "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800", "category": "Family", "date": "January 2026"}'::jsonb,
   3),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Chamblee', 'chamblee',
   'A diverse city known for Buford Highway''s international dining scene. Features antique districts, MARTA access, and a growing downtown.',
   'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
   ARRAY['Diverse','International Food','Antiques','Transit'],
   '{"title": "Chamblee: Atlanta''s International Food Corridor", "excerpt": "A culinary tour of Buford Highway''s best restaurants.", "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800", "category": "Food", "date": "January 2026"}'::jsonb,
   4),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Doraville', 'doraville',
   'A multicultural city with one of metro Atlanta''s most diverse populations. Known for international markets, the Assembly mixed-use development, and MARTA access.',
   'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
   ARRAY['Multicultural','Markets','Development','Transit'],
   '{"title": "Doraville''s Assembly: A New Kind of Main Street", "excerpt": "How the former GM plant is becoming a walkable town center.", "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", "category": "Development", "date": "January 2026"}'::jsonb,
   5),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Vinings', 'vinings',
   'An upscale community near the Chattahoochee River with charming shops and restaurants. Features access to the Silver Comet Trail and maintains a village atmosphere.',
   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
   ARRAY['Upscale','Village','River','Trails'],
   '{"title": "Vinings Village: Small Town Feel, Big City Access", "excerpt": "How this community maintains its charm near I-285.", "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800", "category": "Lifestyle", "date": "January 2026"}'::jsonb,
   6),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Smyrna', 'smyrna',
   'A thriving city west of Atlanta near the Battery and SunTrust Park. Features a revitalized downtown, excellent parks, and strong community programming.',
   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
   ARRAY['Thriving','Braves','Parks','Downtown'],
   '{"title": "Smyrna: More Than the Braves'' Neighbor", "excerpt": "How this city is creating its own identity beyond the ballpark.", "image": "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800", "category": "Community", "date": "January 2026"}'::jsonb,
   7),

  ((SELECT id FROM areas WHERE slug = 'north-atlanta'), 'Roswell', 'roswell',
   'A historic city north of Atlanta with a vibrant downtown, Canton Street dining district, and access to the Chattahoochee River. Known for antebellum history and modern amenities.',
   'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
   ARRAY['Historic','Downtown','River','Dining'],
   '{"title": "Canton Street: Roswell''s Restaurant Row", "excerpt": "A guide to the dining scene that put Roswell on the map.", "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800", "category": "Food", "date": "January 2026"}'::jsonb,
   8);
