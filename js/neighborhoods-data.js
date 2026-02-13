/**
 * ATL Vibes & Views - Comprehensive Neighborhood Data
 * Used by neighborhood.html template to dynamically load neighborhood content
 */

const neighborhoodsData = {
  // ===== BUCKHEAD NEIGHBORHOODS =====
  'buckhead-village': {
    name: 'Buckhead Village',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'The heart of Buckhead\'s shopping and nightlife scene. This walkable district features upscale boutiques, trendy restaurants, and some of Atlanta\'s most popular bars and clubs. The area underwent a major redevelopment creating a vibrant mixed-use destination.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
    vibes: ['Nightlife', 'Shopping', 'Dining', 'Walkable'],
    featuredStory: {
      title: 'The Evolution of Buckhead Village: From Strip Malls to Urban Oasis',
      excerpt: 'How a $1 billion redevelopment transformed this neighborhood into Atlanta\'s premier mixed-use destination.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'lenox': {
    name: 'Lenox',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'Home to Atlanta\'s premier shopping destinations, Lenox Square and Phipps Plaza. This area combines world-class retail with luxury high-rise living, making it a hub for fashion enthusiasts and urban professionals.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600',
    vibes: ['Luxury Shopping', 'High-Rise Living', 'Fashion', 'Urban'],
    featuredStory: {
      title: 'Lenox Square at 65: A Retail Icon\'s Continuing Evolution',
      excerpt: 'From suburban mall to urban lifestyle center, exploring the ongoing transformation of Atlanta\'s most famous shopping destination.',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
      category: 'Retail',
      date: 'January 2026'
    }
  },
  'peachtree-battle': {
    name: 'Peachtree Battle',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'An affluent residential neighborhood known for its historic homes and tree-lined streets. Named after the Civil War battle fought nearby, this area offers a quiet retreat while remaining close to Buckhead\'s amenities.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Historic', 'Residential', 'Family-Friendly', 'Quiet'],
    featuredStory: {
      title: 'Preserving History: Peachtree Battle\'s Architectural Heritage',
      excerpt: 'A look at the neighborhood\'s commitment to maintaining its historic character while embracing modern living.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'History',
      date: 'December 2025'
    }
  },
  'garden-hills': {
    name: 'Garden Hills',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A charming 1920s neighborhood with cottage-style homes and a strong sense of community. Known for its annual Tour of Homes and active civic association, Garden Hills maintains its village character.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Historic', 'Community', 'Cottage-Style', 'Walkable'],
    featuredStory: {
      title: 'Garden Hills: Where Neighbors Still Know Each Other',
      excerpt: 'Inside one of Atlanta\'s most tight-knit communities and their secret to maintaining neighborhood bonds.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'peachtree-hills': {
    name: 'Peachtree Hills',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'An eclectic neighborhood mixing bungalows with new construction, located near the Peachtree Hills recreation center. Popular with young professionals for its central location and diverse housing options.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Eclectic', 'Young Professionals', 'Central', 'Diverse'],
    featuredStory: {
      title: 'Peachtree Hills: The Hidden Gem Between Buckhead and Midtown',
      excerpt: 'Why young professionals are flocking to this often-overlooked neighborhood.',
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800',
      category: 'Neighborhood Spotlight',
      date: 'January 2026'
    }
  },
  'brookwood': {
    name: 'Brookwood',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A transitional area between Midtown and Buckhead featuring a mix of commercial and residential developments. The Brookwood Exchange and nearby restaurants make it a convenient urban neighborhood.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Urban', 'Convenient', 'Mixed-Use', 'Transitional'],
    featuredStory: {
      title: 'Brookwood\'s Commercial Renaissance',
      excerpt: 'New developments are bringing fresh energy to this connector neighborhood.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
      category: 'Development',
      date: 'December 2025'
    }
  },
  'brookwood-hills': {
    name: 'Brookwood Hills',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A historic neighborhood established in 1922 with English cottage-style architecture. This tight-knit community features winding streets, mature trees, and homes with distinctive character.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=1600',
    vibes: ['Historic', 'English Cottage', 'Community', 'Charming'],
    featuredStory: {
      title: 'The Timeless Appeal of Brookwood Hills',
      excerpt: 'How this century-old neighborhood maintains its character amid Atlanta\'s rapid growth.',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'chastain-park': {
    name: 'Chastain Park',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'Named after Atlanta\'s beloved 268-acre park featuring an amphitheater, golf course, tennis center, and horse park. The surrounding neighborhood offers family-friendly living with easy access to nature and outdoor recreation.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Family-Friendly', 'Parks', 'Nature', 'Concerts'],
    featuredStory: {
      title: 'Summer Nights at Chastain: A Guide to the Amphitheater Season',
      excerpt: 'Everything you need to know about Atlanta\'s favorite outdoor concert venue.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
      category: 'Entertainment',
      date: 'January 2026'
    }
  },
  'north-buckhead-area': {
    name: 'North Buckhead',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A residential area featuring larger lots and custom homes near the Chattahoochee River. Popular with families seeking more space while staying close to Buckhead\'s urban amenities.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
    vibes: ['Spacious', 'Family-Friendly', 'Custom Homes', 'Nature'],
    featuredStory: {
      title: 'Living Large in North Buckhead',
      excerpt: 'Why families are choosing spacious North Buckhead over suburban alternatives.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      category: 'Real Estate',
      date: 'December 2025'
    }
  },
  'kingswood': {
    name: 'Kingswood',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A quiet residential enclave with stately homes and excellent schools. This established neighborhood offers a suburban feel with urban accessibility.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Residential', 'Family-Friendly', 'Schools', 'Quiet'],
    featuredStory: {
      title: 'Kingswood: Where Quality Schools Meet Quality Living',
      excerpt: 'A deep dive into what makes this neighborhood a top choice for families.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      category: 'Education',
      date: 'January 2026'
    }
  },
  'castlewood': {
    name: 'Castlewood',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'An upscale neighborhood with large homes on generous lots near Chastain Park. Known for its privacy and exclusivity while maintaining a family-friendly atmosphere.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
    vibes: ['Upscale', 'Private', 'Family-Friendly', 'Spacious'],
    featuredStory: {
      title: 'Inside Castlewood: Buckhead\'s Quiet Luxury',
      excerpt: 'Exploring one of Atlanta\'s most prestigious yet understated neighborhoods.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      category: 'Luxury Living',
      date: 'January 2026'
    }
  },
  'pine-hills': {
    name: 'Pine Hills',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A wooded neighborhood offering larger lots and mature pine trees. Residents enjoy a secluded feel while being minutes from Buckhead\'s restaurants and shopping.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
    vibes: ['Wooded', 'Secluded', 'Nature', 'Peaceful'],
    featuredStory: {
      title: 'Pine Hills: Atlanta\'s Urban Forest Retreat',
      excerpt: 'How this neighborhood maintains its natural character in the heart of Buckhead.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'Nature',
      date: 'December 2025'
    }
  },
  'ridgewood-heights': {
    name: 'Ridgewood Heights',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A hilly neighborhood with winding streets and homes featuring varied architecture. The terrain provides many homes with beautiful views of the surrounding area.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Scenic', 'Varied Architecture', 'Views', 'Unique'],
    featuredStory: {
      title: 'The Views of Ridgewood Heights',
      excerpt: 'Discovering the unexpected vistas in this rolling Buckhead neighborhood.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Architecture',
      date: 'January 2026'
    }
  },
  'nancy-creek': {
    name: 'Nancy Creek',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'Named after the creek that runs through it, this neighborhood offers a connection to nature with access to walking trails and green spaces. A peaceful residential area with easy access to Chastain Park.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Nature', 'Trails', 'Peaceful', 'Family-Friendly'],
    featuredStory: {
      title: 'Following Nancy Creek: Trails Through Buckhead',
      excerpt: 'Exploring the natural waterway that gives this neighborhood its character.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      category: 'Outdoors',
      date: 'January 2026'
    }
  },
  'tuxedo-park': {
    name: 'Tuxedo Park',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'One of Atlanta\'s most prestigious addresses, home to the Governor\'s Mansion and historic estates. This exclusive neighborhood features some of the city\'s finest architecture and most valuable real estate.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
    vibes: ['Prestigious', 'Historic', 'Estates', 'Exclusive'],
    featuredStory: {
      title: 'The Grand Homes of Tuxedo Park',
      excerpt: 'A rare look inside one of America\'s most exclusive neighborhoods.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      category: 'Luxury Living',
      date: 'January 2026'
    }
  },
  'paces': {
    name: 'Paces',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A refined neighborhood along West Paces Ferry Road featuring elegant homes and proximity to some of Atlanta\'s best restaurants and the Atlanta History Center.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Elegant', 'Historic', 'Refined', 'Convenient'],
    featuredStory: {
      title: 'West Paces Ferry: Atlanta\'s Most Storied Address',
      excerpt: 'The history and prestige behind one of the city\'s most famous streets.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      category: 'History',
      date: 'December 2025'
    }
  },
  'west-paces-ferry': {
    name: 'West Paces Ferry',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'An upscale area along the famous West Paces Ferry Road, home to the Atlanta History Center and historic Swan House. Features large estates and excellent dining options.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    vibes: ['Historic', 'Cultural', 'Upscale', 'Dining'],
    featuredStory: {
      title: 'A Day on West Paces Ferry',
      excerpt: 'From history museums to fine dining, exploring this iconic Atlanta corridor.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      category: 'Lifestyle',
      date: 'January 2026'
    }
  },
  'argonne-forest': {
    name: 'Argonne Forest',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A secluded enclave of luxury estates named after the World War I battle. Known for its privacy, mature landscaping, and some of Atlanta\'s most impressive homes.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
    vibes: ['Exclusive', 'Estates', 'Private', 'Luxury'],
    featuredStory: {
      title: 'Argonne Forest: Where Privacy Meets Prestige',
      excerpt: 'Inside one of Atlanta\'s most exclusive and secretive neighborhoods.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      category: 'Real Estate',
      date: 'January 2026'
    }
  },
  'whitewater-creek': {
    name: 'Whitewater Creek',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A gated community featuring luxury homes on generous lots near the Chattahoochee River. Offers privacy and security with convenient access to Buckhead amenities.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600',
    vibes: ['Gated', 'Luxury', 'Private', 'River Access'],
    featuredStory: {
      title: 'Life Behind the Gates: Whitewater Creek',
      excerpt: 'What it\'s like to live in one of Buckhead\'s premier gated communities.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      category: 'Luxury Living',
      date: 'December 2025'
    }
  },
  'wildwood': {
    name: 'Wildwood',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A neighborhood with a mix of classic and contemporary homes near Mount Paran Road. Known for its excellent schools and family-oriented community.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
    vibes: ['Family-Friendly', 'Schools', 'Classic', 'Contemporary'],
    featuredStory: {
      title: 'Wildwood: A Family\'s Guide to the Neighborhood',
      excerpt: 'Everything parents need to know about raising kids in Wildwood.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Family',
      date: 'January 2026'
    }
  },
  'peachtree-heights-east': {
    name: 'Peachtree Heights East',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A leafy neighborhood with elegant homes and tree-lined streets. Popular with families for its excellent schools and proximity to Buckhead\'s amenities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
    vibes: ['Leafy', 'Elegant', 'Family-Friendly', 'Schools'],
    featuredStory: {
      title: 'The Charm of Peachtree Heights East',
      excerpt: 'Why families continue to choose this classic Buckhead neighborhood.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      category: 'Family',
      date: 'January 2026'
    }
  },
  'peachtree-heights-west': {
    name: 'Peachtree Heights West',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'Historic neighborhood with grand homes dating to the early 1900s. Features impressive architecture and a strong neighborhood association maintaining its character.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    vibes: ['Historic', 'Grand Homes', 'Architecture', 'Community'],
    featuredStory: {
      title: 'A Century of Elegance: Peachtree Heights West',
      excerpt: 'Touring the historic homes that define this prestigious neighborhood.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'Architecture',
      date: 'December 2025'
    }
  },
  'haynes-manor': {
    name: 'Haynes Manor',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A walkable neighborhood near Piedmont Road with a mix of original 1940s homes and new construction. Convenient to restaurants, shops, and transit.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Walkable', 'Convenient', 'Mixed Housing', 'Transit'],
    featuredStory: {
      title: 'Haynes Manor\'s Walkability Revolution',
      excerpt: 'How this Buckhead neighborhood became one of the area\'s most pedestrian-friendly.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Urban Living',
      date: 'January 2026'
    }
  },
  'brandon': {
    name: 'Brandon',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A small, quiet residential area with well-maintained homes and a strong community feel. Conveniently located near Lindbergh MARTA station.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Quiet', 'Community', 'Transit', 'Residential'],
    featuredStory: {
      title: 'Brandon: Buckhead\'s Best-Kept Secret',
      excerpt: 'Discovering this overlooked gem near Lindbergh station.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Neighborhood Spotlight',
      date: 'January 2026'
    }
  },
  'lindridge-martin-manor': {
    name: 'Lindridge/Martin Manor',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A revitalized neighborhood on the border of Buckhead and Midtown. Known for its mid-century homes and increasingly popular with young professionals.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Mid-Century', 'Revitalized', 'Young Professionals', 'Border Area'],
    featuredStory: {
      title: 'The Renaissance of Lindridge/Martin Manor',
      excerpt: 'How young homeowners are transforming this transitional neighborhood.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'springlake': {
    name: 'Springlake',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A quiet residential neighborhood with modest homes and a friendly community. Offers affordability within the Buckhead area.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Affordable', 'Quiet', 'Community', 'Modest'],
    featuredStory: {
      title: 'Springlake: Buckhead Living Within Reach',
      excerpt: 'How to enjoy the Buckhead lifestyle without the premium price tag.',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
      category: 'Real Estate',
      date: 'December 2025'
    }
  },
  'collier-hills': {
    name: 'Collier Hills',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'Located near Bobby Jones Golf Course and Bitsy Grant Tennis Center, this neighborhood offers excellent recreational amenities and easy access to both Buckhead and Midtown.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
    vibes: ['Recreation', 'Golf', 'Tennis', 'Active Lifestyle'],
    featuredStory: {
      title: 'The Sporting Life in Collier Hills',
      excerpt: 'Where golf, tennis, and active living come together.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800',
      category: 'Lifestyle',
      date: 'January 2026'
    }
  },
  'ardmore': {
    name: 'Ardmore',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'A transitional neighborhood between Buckhead and Midtown with a mix of housing types. Known for its central location and improving amenities.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Central', 'Transitional', 'Diverse', 'Improving'],
    featuredStory: {
      title: 'Ardmore\'s Moment Has Arrived',
      excerpt: 'Why investors and homebuyers are paying attention to this up-and-coming area.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
      category: 'Investment',
      date: 'January 2026'
    }
  },
  'margaret-mitchell': {
    name: 'Margaret Mitchell',
    area: 'buckhead',
    areaName: 'Buckhead',
    description: 'Named after the famous author, this small neighborhood near Piedmont Hospital offers convenience and character in a residential setting.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Literary', 'Convenient', 'Character', 'Residential'],
    featuredStory: {
      title: 'In Margaret Mitchell\'s Footsteps',
      excerpt: 'The literary history behind this Buckhead neighborhood\'s name.',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800',
      category: 'History',
      date: 'December 2025'
    }
  },

  // ===== MIDTOWN NEIGHBORHOODS =====
  'midtown-core': {
    name: 'Midtown Core',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'The dense urban heart of Midtown featuring high-rise condos, the Fox Theatre, and vibrant street life along Peachtree Street. A walkable urban village with excellent transit access.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600',
    vibes: ['Urban', 'Walkable', 'Transit', 'Entertainment'],
    featuredStory: {
      title: 'Living the High-Rise Life in Midtown Core',
      excerpt: 'What it\'s really like to call Atlanta\'s most urban neighborhood home.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      category: 'Urban Living',
      date: 'January 2026'
    }
  },
  'arts-center': {
    name: 'Arts Center',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'Home to the Woodruff Arts Center, including the High Museum of Art, Atlanta Symphony Orchestra, and Alliance Theatre. The cultural heartbeat of the entire Southeast.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1600',
    vibes: ['Cultural', 'Arts', 'Museums', 'Performing Arts'],
    featuredStory: {
      title: 'The Woodruff Arts Center: A Cultural Campus',
      excerpt: 'Exploring the institutions that make this neighborhood the South\'s cultural capital.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      category: 'Arts & Culture',
      date: 'January 2026'
    }
  },
  'piedmont-park': {
    name: 'Piedmont Park',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'Atlanta\'s premier urban park and the surrounding residential area. The 189-acre park hosts festivals, concerts, and provides essential green space for the city. Adjacent homes offer park views and urban convenience.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Parks', 'Active', 'Festivals', 'Green Space'],
    featuredStory: {
      title: 'A Year in Piedmont Park',
      excerpt: 'From Music Midtown to the Dogwood Festival, the events that define Atlanta\'s backyard.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
      category: 'Parks & Recreation',
      date: 'January 2026'
    }
  },
  'ansley-park': {
    name: 'Ansley Park',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'Atlanta\'s first garden suburb, designed in 1904 with curving streets and grand homes. Features the Ansley Golf Club and maintains its historic character while being minutes from Midtown\'s urban core.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    vibes: ['Historic', 'Garden Suburb', 'Golf', 'Grand Homes'],
    featuredStory: {
      title: 'Ansley Park at 120: Atlanta\'s First Garden Suburb',
      excerpt: 'How this pioneering planned community continues to set the standard for elegant living.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'piedmont-heights': {
    name: 'Piedmont Heights',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'A residential neighborhood near Piedmont Hospital with a mix of bungalows and newer homes. Offers a quieter alternative to the dense Midtown core.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Residential', 'Bungalows', 'Quiet', 'Central'],
    featuredStory: {
      title: 'Piedmont Heights: The Quiet Side of Midtown',
      excerpt: 'Finding peace and community in one of Midtown\'s most residential enclaves.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'December 2025'
    }
  },
  'sherwood-forest': {
    name: 'Sherwood Forest',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'A charming neighborhood with tree-named streets (Robin Hood, Maid Marian, Friar Tuck). Features cottage-style homes and a strong neighborhood identity.',
    image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=1600',
    vibes: ['Charming', 'Cottage-Style', 'Whimsical', 'Community'],
    featuredStory: {
      title: 'The Enchanted Streets of Sherwood Forest',
      excerpt: 'How one Atlanta neighborhood embraced its storybook theme.',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
      category: 'Neighborhood Spotlight',
      date: 'January 2026'
    }
  },
  'morningside': {
    name: 'Morningside',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'A sought-after neighborhood known for excellent schools, beautiful parks, and strong community bonds. Features Craftsman and Tudor homes along tree-lined streets.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Family-Friendly', 'Schools', 'Parks', 'Craftsman Homes'],
    featuredStory: {
      title: 'Why Families Love Morningside',
      excerpt: 'The schools, parks, and community that make this Atlanta\'s most family-friendly neighborhood.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      category: 'Family',
      date: 'January 2026'
    }
  },
  'virginia-highland': {
    name: 'Virginia-Highland',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'One of Atlanta\'s most beloved neighborhoods, known for its walkable village atmosphere, independent shops, and excellent restaurants along Highland Avenue.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Walkable', 'Village', 'Independent Shops', 'Restaurants'],
    featuredStory: {
      title: 'The Virginia-Highland Village Experience',
      excerpt: 'How this neighborhood maintains its independent character in a chain-dominated world.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      category: 'Lifestyle',
      date: 'January 2026'
    }
  },
  'atlantic-station': {
    name: 'Atlantic Station',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'A mixed-use development built on a former steel mill site. Features shopping, dining, entertainment, and residential living in a walkable urban environment.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Mixed-Use', 'Shopping', 'Entertainment', 'New Urbanism'],
    featuredStory: {
      title: 'Atlantic Station: From Industrial Wasteland to Urban Village',
      excerpt: 'The remarkable transformation of Atlanta\'s largest brownfield redevelopment.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'home-park': {
    name: 'Home Park',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'A historic neighborhood adjacent to Georgia Tech, featuring bungalows and a mix of students and long-time residents. Known for its community spirit and affordability.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Historic', 'Georgia Tech', 'Affordable', 'Community'],
    featuredStory: {
      title: 'Home Park: Where Town Meets Gown',
      excerpt: 'How this neighborhood balances student life with long-time resident community.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'December 2025'
    }
  },
  'loring-heights': {
    name: 'Loring Heights',
    area: 'midtown',
    areaName: 'Midtown',
    description: 'A small, tight-knit neighborhood near I-75 with modest homes and an active neighborhood association. Offers affordability with easy highway access.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Affordable', 'Community', 'Central', 'Modest'],
    featuredStory: {
      title: 'Loring Heights: Big Community, Small Neighborhood',
      excerpt: 'Inside one of Atlanta\'s most active neighborhood associations.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },

  // ===== DOWNTOWN NEIGHBORHOODS =====
  'downtown-core': {
    name: 'Downtown Core',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'The central business district featuring Five Points, Centennial Olympic Park, and major attractions. A hub of commerce, sports, and convention activity.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600',
    vibes: ['Business', 'Sports', 'Conventions', 'Urban'],
    featuredStory: {
      title: 'Downtown Atlanta\'s Resurgence',
      excerpt: 'How residential development is bringing new life to Atlanta\'s urban core.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'centennial-hill': {
    name: 'Centennial Hill',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'Home to Centennial Olympic Park, the Georgia Aquarium, and World of Coca-Cola. Atlanta\'s premier tourist district with growing residential options.',
    image: 'https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=1600',
    vibes: ['Attractions', 'Tourism', 'Entertainment', 'Aquarium'],
    featuredStory: {
      title: 'Living Near the World\'s Largest Aquarium',
      excerpt: 'What it\'s like to call Centennial Hill home.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      category: 'Urban Living',
      date: 'January 2026'
    }
  },
  'sweet-auburn': {
    name: 'Sweet Auburn',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'The historic heart of Black Atlanta and birthplace of Dr. Martin Luther King Jr. Once called "the richest Negro street in the world," it remains a vital cultural and historic district.',
    image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
    vibes: ['Historic', 'Cultural', 'Civil Rights', 'Heritage'],
    featuredStory: {
      title: 'Sweet Auburn: Walking in Dr. King\'s Footsteps',
      excerpt: 'A journey through the neighborhood that shaped America\'s civil rights movement.',
      image: 'https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'old-fourth-ward': {
    name: 'Old Fourth Ward',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'One of Atlanta\'s hottest neighborhoods, transformed by the BeltLine and Ponce City Market. Features historic sites, new restaurants, and the Atlanta BeltLine Eastside Trail.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['BeltLine', 'Hot Market', 'Restaurants', 'Historic'],
    featuredStory: {
      title: 'Old Fourth Ward: The BeltLine Effect',
      excerpt: 'How the Atlanta BeltLine transformed this historic neighborhood.',
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'castleberry-hill': {
    name: 'Castleberry Hill',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'An arts district with converted warehouses, loft living, and galleries. Known for its Second Friday Art Stroll and creative community.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
    vibes: ['Arts', 'Lofts', 'Galleries', 'Creative'],
    featuredStory: {
      title: 'Castleberry Hill\'s Art Scene Lives On',
      excerpt: 'How this warehouse district maintains its creative spirit amid gentrification.',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
      category: 'Arts & Culture',
      date: 'January 2026'
    }
  },
  'south-downtown': {
    name: 'South Downtown',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'A rapidly developing area south of the railroad tracks featuring adaptive reuse projects and emerging creative businesses. Part of the Newport South project.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Emerging', 'Creative', 'Development', 'Adaptive Reuse'],
    featuredStory: {
      title: 'South Downtown\'s $2 Billion Transformation',
      excerpt: 'Inside the ambitious redevelopment reshaping this forgotten area.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'summerhill': {
    name: 'Summerhill',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'Atlanta\'s oldest neighborhood, revitalized by Georgia State Stadium development. Features new dining, entertainment, and residential options around the former Turner Field site.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Historic', 'Revitalized', 'Sports', 'Dining'],
    featuredStory: {
      title: 'Summerhill\'s Second Act',
      excerpt: 'How Turner Field\'s transformation is reviving Atlanta\'s oldest neighborhood.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'peoplestown': {
    name: 'Peoplestown',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'A historic African American neighborhood near the Atlanta BeltLine Southside Trail. Known for its community organizing and ongoing revitalization efforts.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Historic', 'BeltLine', 'Community', 'Revitalizing'],
    featuredStory: {
      title: 'Peoplestown: Community-Led Revitalization',
      excerpt: 'How residents are shaping the future of their historic neighborhood.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'December 2025'
    }
  },
  'mechanicsville': {
    name: 'Mechanicsville',
    area: 'downtown',
    areaName: 'Downtown',
    description: 'One of Atlanta\'s oldest neighborhoods named for the railroad mechanics who lived here. Near Mercedes-Benz Stadium, experiencing renewed interest.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Historic', 'Stadium', 'Railroad History', 'Emerging'],
    featuredStory: {
      title: 'Mechanicsville: A Neighborhood Built by Railroad Workers',
      excerpt: 'The working-class history behind this emerging area near the stadium.',
      image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },

  // ===== EASTSIDE NEIGHBORHOODS =====
  'inman-park': {
    name: 'Inman Park',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'Atlanta\'s first planned suburb, featuring Victorian architecture, the BeltLine, and the annual Inman Park Festival. A vibrant community with excellent restaurants and walkability.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Victorian', 'BeltLine', 'Festival', 'Walkable'],
    featuredStory: {
      title: 'Inman Park: Atlanta\'s Original Suburb',
      excerpt: 'How Atlanta\'s first planned community became its most desirable.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'little-five-points': {
    name: 'Little Five Points',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'Atlanta\'s eclectic alternative neighborhood featuring independent shops, vintage stores, and live music venues. The city\'s counterculture heart.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Eclectic', 'Alternative', 'Music', 'Independent'],
    featuredStory: {
      title: 'Keeping Little Five Points Weird',
      excerpt: 'How the neighborhood fights to maintain its alternative identity.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
      category: 'Culture',
      date: 'January 2026'
    }
  },
  'candler-park': {
    name: 'Candler Park',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A neighborhood centered around the beloved Candler Park featuring a golf course, pool, and festival. Known for its bungalows and community spirit.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Parks', 'Festival', 'Bungalows', 'Community'],
    featuredStory: {
      title: 'Candler Park: Where Community Comes First',
      excerpt: 'Inside one of Atlanta\'s most tight-knit neighborhood communities.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'lake-claire': {
    name: 'Lake Claire',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A bohemian neighborhood with community gardens, a land trust, and a laid-back vibe. Home to the Lake Claire Community Land Trust with its treehouse and gardens.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600',
    vibes: ['Bohemian', 'Gardens', 'Alternative', 'Community'],
    featuredStory: {
      title: 'The Lake Claire Land Trust: Community Ownership in Action',
      excerpt: 'How neighbors created an urban oasis through collective ownership.',
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'reynoldstown': {
    name: 'Reynoldstown',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A rapidly transforming neighborhood along the BeltLine Eastside Trail. Features a mix of historic homes, new construction, and the popular Memorial Drive corridor.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['BeltLine', 'Transforming', 'Historic', 'Restaurants'],
    featuredStory: {
      title: 'Reynoldstown\'s BeltLine Boom',
      excerpt: 'Inside the neighborhood at the center of Atlanta\'s hottest corridor.',
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'cabbagetown': {
    name: 'Cabbagetown',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A historic mill village with shotgun houses, murals, and strong community identity. Home to the Krog Street Tunnel and its famous street art.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600',
    vibes: ['Historic', 'Murals', 'Mill Village', 'Street Art'],
    featuredStory: {
      title: 'Cabbagetown: Atlanta\'s Living Canvas',
      excerpt: 'How street art defines this historic mill village\'s identity.',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
      category: 'Arts & Culture',
      date: 'January 2026'
    }
  },
  'edgewood': {
    name: 'Edgewood',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'An emerging neighborhood known for Edgewood Avenue\'s bars and restaurants. Features historic homes and increasing development activity.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
    vibes: ['Nightlife', 'Emerging', 'Bars', 'Historic'],
    featuredStory: {
      title: 'Edgewood Avenue: Atlanta\'s Best Bar Crawl',
      excerpt: 'A guide to the dive bars and music venues that define this strip.',
      image: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=800',
      category: 'Nightlife',
      date: 'January 2026'
    }
  },
  'kirkwood': {
    name: 'Kirkwood',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A diverse neighborhood featuring Craftsman bungalows, an excellent elementary school, and a growing restaurant scene. Strong community organizations maintain its character.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Diverse', 'Bungalows', 'Schools', 'Community'],
    featuredStory: {
      title: 'Kirkwood: Diversity as Strength',
      excerpt: 'How this neighborhood celebrates its multicultural identity.',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'east-atlanta-village': {
    name: 'East Atlanta Village',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A quirky neighborhood village known for live music, local bars, and the annual East Atlanta Strut. Features a walkable main street with independent businesses.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
    vibes: ['Music', 'Quirky', 'Village', 'Independent'],
    featuredStory: {
      title: 'East Atlanta Village: Atlanta\'s Last Bohemia',
      excerpt: 'How this neighborhood maintains its indie spirit.',
      image: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=800',
      category: 'Culture',
      date: 'January 2026'
    }
  },
  'grant-park': {
    name: 'Grant Park',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'One of Atlanta\'s oldest neighborhoods, home to Zoo Atlanta and the historic Grant Park. Features beautiful Victorian homes and the annual Grant Park Summer Shade Festival.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Historic', 'Zoo', 'Victorian', 'Festivals'],
    featuredStory: {
      title: 'Grant Park: Where Zoo Atlanta Meets Victorian Charm',
      excerpt: 'Living alongside one of the nation\'s top zoos.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'Lifestyle',
      date: 'January 2026'
    }
  },
  'ormewood-park': {
    name: 'Ormewood Park',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'A family-friendly neighborhood adjacent to Grant Park with bungalows, excellent schools, and active community organizations. Known for its neighborhood porch parties.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Family-Friendly', 'Bungalows', 'Schools', 'Porches'],
    featuredStory: {
      title: 'Ormewood Park: The Art of the Porch Party',
      excerpt: 'How this neighborhood became Atlanta\'s most sociable.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'east-lake': {
    name: 'East Lake',
    area: 'eastside',
    areaName: 'Eastside',
    description: 'Home to the historic East Lake Golf Club and the Charlie Yates Golf Course. Known for its successful community revitalization through the East Lake Foundation.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1600',
    vibes: ['Golf', 'Revitalized', 'Community', 'Historic'],
    featuredStory: {
      title: 'East Lake: A Model for Community Transformation',
      excerpt: 'How the East Lake Foundation created lasting neighborhood change.',
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },

  // ===== WESTSIDE NEIGHBORHOODS =====
  'west-midtown': {
    name: 'West Midtown',
    area: 'westside',
    areaName: 'Westside',
    description: 'Atlanta\'s trendiest neighborhood featuring converted warehouses, art galleries, and the Westside Provisions District. A hub for design, food, and creative businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Trendy', 'Design', 'Food', 'Creative'],
    featuredStory: {
      title: 'West Midtown: Atlanta\'s Design District',
      excerpt: 'How warehouses became showrooms in Atlanta\'s hottest neighborhood.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      category: 'Design',
      date: 'January 2026'
    }
  },
  'west-end': {
    name: 'West End',
    area: 'westside',
    areaName: 'Westside',
    description: 'A historic African American neighborhood experiencing a renaissance. Home to the Wren\'s Nest, MARTA access, and the BeltLine Westside Trail.',
    image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
    vibes: ['Historic', 'BeltLine', 'Transit', 'Renaissance'],
    featuredStory: {
      title: 'West End Rising',
      excerpt: 'How community investment is revitalizing this historic neighborhood.',
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'bankhead': {
    name: 'Bankhead',
    area: 'westside',
    areaName: 'Westside',
    description: 'A northwest Atlanta neighborhood known for its hip-hop heritage and industrial character. Major redevelopment is transforming the former quarry into Westside Park.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600',
    vibes: ['Hip-Hop Heritage', 'Industrial', 'Redeveloping', 'Park'],
    featuredStory: {
      title: 'Bankhead Bounce: The Hip-Hop Heritage of a Neighborhood',
      excerpt: 'How this area shaped Atlanta\'s sound and identity.',
      image: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=800',
      category: 'Culture',
      date: 'January 2026'
    }
  },
  'grove-park': {
    name: 'Grove Park',
    area: 'westside',
    areaName: 'Westside',
    description: 'A residential neighborhood near Westside Park with affordable housing and community gardens. Benefits from nearby BeltLine development.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Residential', 'Gardens', 'Affordable', 'BeltLine Adjacent'],
    featuredStory: {
      title: 'Grove Park\'s Garden Revolution',
      excerpt: 'How urban farming is changing this westside community.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'vine-city': {
    name: 'Vine City',
    area: 'westside',
    areaName: 'Westside',
    description: 'A historic neighborhood near Mercedes-Benz Stadium that was home to many civil rights leaders. Major investments are transforming this community adjacent to the new Westside Park.',
    image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
    vibes: ['Historic', 'Civil Rights', 'Stadium', 'Transforming'],
    featuredStory: {
      title: 'Vine City: Where Civil Rights Leaders Lived',
      excerpt: 'The historic homes and legacies of a neighborhood that shaped America.',
      image: 'https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'english-avenue': {
    name: 'English Avenue',
    area: 'westside',
    areaName: 'Westside',
    description: 'A historic neighborhood undergoing significant transformation near Mercedes-Benz Stadium and Westside Park. Part of major community revitalization efforts.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Historic', 'Transforming', 'Stadium Adjacent', 'Investment'],
    featuredStory: {
      title: 'English Avenue\'s Second Chance',
      excerpt: 'Major investments bring hope to this historic community.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'mozley-park': {
    name: 'Mozley Park',
    area: 'westside',
    areaName: 'Westside',
    description: 'A westside neighborhood centered around the 14-acre Mozley Park. Features historic homes and a strong community identity.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Parks', 'Historic', 'Community', 'Residential'],
    featuredStory: {
      title: 'Mozley Park: The Heart of the Westside',
      excerpt: 'How this park and its neighborhood maintain community bonds.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Parks',
      date: 'January 2026'
    }
  },
  'adamsville': {
    name: 'Adamsville',
    area: 'westside',
    areaName: 'Westside',
    description: 'A predominantly residential neighborhood in northwest Atlanta with established communities and increasing development interest.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Residential', 'Established', 'Northwest', 'Community'],
    featuredStory: {
      title: 'Adamsville: Stability on the Westside',
      excerpt: 'How this established community maintains its character.',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
      category: 'Community',
      date: 'December 2025'
    }
  },

  // ===== SOUTHWEST ATLANTA NEIGHBORHOODS =====
  'cascade-heights': {
    name: 'Cascade Heights',
    area: 'southwest',
    areaName: 'Southwest Atlanta',
    description: 'An affluent African American neighborhood known for its well-maintained homes and strong community. A historic center of Black wealth and achievement in Atlanta.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    vibes: ['Affluent', 'Historic', 'Community', 'Achievement'],
    featuredStory: {
      title: 'Cascade Heights: A Legacy of Black Excellence',
      excerpt: 'The history and continuing importance of this prestigious neighborhood.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'collier-heights': {
    name: 'Collier Heights',
    area: 'southwest',
    areaName: 'Southwest Atlanta',
    description: 'One of the nation\'s first affluent African American suburbs, developed in the 1950s. Features mid-century modern homes and maintains its historic character.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Historic', 'Mid-Century', 'Affluent', 'Pioneering'],
    featuredStory: {
      title: 'Collier Heights: America\'s First Black Suburb',
      excerpt: 'How this neighborhood broke barriers in the 1950s.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'southwest-atlanta': {
    name: 'Historic Southwest',
    area: 'southwest',
    areaName: 'Southwest Atlanta',
    description: 'The heart of southwest Atlanta featuring historic neighborhoods, churches, and community institutions that have long served as centers of Black life in Atlanta.',
    image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
    vibes: ['Historic', 'Community', 'Churches', 'Cultural'],
    featuredStory: {
      title: 'The Churches of Southwest Atlanta',
      excerpt: 'How faith institutions anchor these historic communities.',
      image: 'https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800',
      category: 'Faith',
      date: 'January 2026'
    }
  },
  'west-manor': {
    name: 'West Manor',
    area: 'southwest',
    areaName: 'Southwest Atlanta',
    description: 'A quiet residential neighborhood with ranch-style homes and tree-lined streets. Known for its family-friendly atmosphere and community stability.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600',
    vibes: ['Residential', 'Family-Friendly', 'Ranch Homes', 'Quiet'],
    featuredStory: {
      title: 'West Manor: Where Neighbors Watch Out for Each Other',
      excerpt: 'Inside one of Southwest Atlanta\'s most stable communities.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'venetian-hills': {
    name: 'Venetian Hills',
    area: 'southwest',
    areaName: 'Southwest Atlanta',
    description: 'A historic neighborhood near the Atlanta BeltLine Westside Trail. Features a mix of housing styles and benefits from nearby park and trail access.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Historic', 'BeltLine', 'Parks', 'Diverse Housing'],
    featuredStory: {
      title: 'Venetian Hills Meets the BeltLine',
      excerpt: 'How trail development is impacting this southwest neighborhood.',
      image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },

  // ===== SOUTHEAST ATLANTA NEIGHBORHOODS =====
  'lakewood-heights': {
    name: 'Lakewood Heights',
    area: 'southeast',
    areaName: 'Southeast Atlanta',
    description: 'A historic neighborhood near the BeltLine Southside Trail with affordable housing and convenient access to downtown. Growing interest from young homebuyers.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600',
    vibes: ['Historic', 'BeltLine', 'Affordable', 'Emerging'],
    featuredStory: {
      title: 'Lakewood Heights: Southside\'s Hidden Gem',
      excerpt: 'Why first-time homebuyers are discovering this affordable neighborhood.',
      image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=800',
      category: 'Real Estate',
      date: 'January 2026'
    }
  },
  'south-river-gardens': {
    name: 'South River Gardens',
    area: 'southeast',
    areaName: 'Southeast Atlanta',
    description: 'A residential neighborhood near the South River with increasing development activity. Features mature trees and affordable housing options.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600',
    vibes: ['Residential', 'Affordable', 'Nature', 'Developing'],
    featuredStory: {
      title: 'South River Gardens: Nature at Your Doorstep',
      excerpt: 'Living near Atlanta\'s South River greenway.',
      image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800',
      category: 'Nature',
      date: 'January 2026'
    }
  },
  'gresham-park': {
    name: 'Gresham Park',
    area: 'southeast',
    areaName: 'Southeast Atlanta',
    description: 'A DeKalb County community bordering Atlanta with residential neighborhoods and commercial areas. Known for its diverse population and community amenities.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Diverse', 'Residential', 'Commercial', 'Community'],
    featuredStory: {
      title: 'Gresham Park: Where DeKalb Meets Atlanta',
      excerpt: 'Exploring the community on the county line.',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800',
      category: 'Community',
      date: 'December 2025'
    }
  },
  'east-point': {
    name: 'East Point',
    area: 'southeast',
    areaName: 'Southeast Atlanta',
    description: 'A charming city adjacent to Atlanta with a revitalized downtown, MARTA access, and growing arts scene. Known for affordable housing near the airport.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Charming', 'Transit', 'Arts', 'Affordable'],
    featuredStory: {
      title: 'East Point\'s Downtown Revival',
      excerpt: 'How this suburban city is creating its own urban village.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },

  // ===== SOUTH ATLANTA NEIGHBORHOODS =====
  'college-park': {
    name: 'College Park',
    area: 'south-atlanta',
    areaName: 'South Atlanta',
    description: 'Home to the Atlanta Metropolitan State College and convenient to Hartsfield-Jackson Airport. Features historic homes and a revitalizing downtown.',
    image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
    vibes: ['College Town', 'Airport', 'Historic', 'Revitalizing'],
    featuredStory: {
      title: 'College Park: Gateway to Atlanta',
      excerpt: 'How proximity to the world\'s busiest airport is shaping this community.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'hapeville': {
    name: 'Hapeville',
    area: 'south-atlanta',
    areaName: 'South Atlanta',
    description: 'The birthplace of Delta Air Lines and the Chick-fil-A Dwarf House. This small city features a walkable downtown and strong community identity.',
    image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=1600',
    vibes: ['Historic', 'Aviation', 'Walkable', 'Small Town'],
    featuredStory: {
      title: 'Hapeville: Where Delta and Chick-fil-A Began',
      excerpt: 'The surprising origins of two iconic American brands.',
      image: 'https://images.unsplash.com/photo-1544621832-8d81c6def0b3?w=800',
      category: 'History',
      date: 'January 2026'
    }
  },
  'forest-park': {
    name: 'Forest Park',
    area: 'south-atlanta',
    areaName: 'South Atlanta',
    description: 'A diverse city south of Atlanta known for the Atlanta State Farmers Market and Fort Gillem redevelopment. Features affordable housing and cultural diversity.',
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1600',
    vibes: ['Diverse', 'Farmers Market', 'Affordable', 'Redeveloping'],
    featuredStory: {
      title: 'Forest Park\'s International Flavors',
      excerpt: 'Exploring the diverse cuisines of this multicultural community.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      category: 'Food',
      date: 'January 2026'
    }
  },
  'union-city': {
    name: 'Union City',
    area: 'south-atlanta',
    areaName: 'South Atlanta',
    description: 'A rapidly growing city southwest of Atlanta with new development, the South Fulton Parkway, and increasing commercial activity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Growing', 'Development', 'Commercial', 'Southwest'],
    featuredStory: {
      title: 'Union City\'s Growth Spurt',
      excerpt: 'How this small city is managing rapid development.',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },

  // ===== NORTH ATLANTA NEIGHBORHOODS =====
  'sandy-springs': {
    name: 'Sandy Springs',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'A major city north of Atlanta with corporate headquarters, upscale shopping, and the Chattahoochee River National Recreation Area. Features diverse housing and excellent amenities.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
    vibes: ['Corporate', 'Upscale', 'River', 'Suburban'],
    featuredStory: {
      title: 'Sandy Springs: A City Within a City',
      excerpt: 'How this edge city created its own identity.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Urban Planning',
      date: 'January 2026'
    }
  },
  'dunwoody': {
    name: 'Dunwoody',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'Home to Perimeter Mall and a major business district. This DeKalb County city features excellent schools, diverse dining, and MARTA access.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    vibes: ['Business', 'Shopping', 'Schools', 'Transit'],
    featuredStory: {
      title: 'Dunwoody: More Than a Mall',
      excerpt: 'How this business hub is creating community identity.',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'brookhaven': {
    name: 'Brookhaven',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'A DeKalb County city known for its tree-lined streets, excellent schools, and proximity to Oglethorpe University. Features diverse neighborhoods from historic to new construction.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600',
    vibes: ['Family-Friendly', 'Schools', 'Trees', 'Diverse'],
    featuredStory: {
      title: 'Brookhaven: Where Families Put Down Roots',
      excerpt: 'Why families choose this tree-canopied community.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
      category: 'Family',
      date: 'January 2026'
    }
  },
  'chamblee': {
    name: 'Chamblee',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'A diverse city known for Buford Highway\'s international dining scene. Features antique districts, MARTA access, and a growing downtown.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
    vibes: ['Diverse', 'International Food', 'Antiques', 'Transit'],
    featuredStory: {
      title: 'Chamblee: Atlanta\'s International Food Corridor',
      excerpt: 'A culinary tour of Buford Highway\'s best restaurants.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      category: 'Food',
      date: 'January 2026'
    }
  },
  'doraville': {
    name: 'Doraville',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'A multicultural city with one of metro Atlanta\'s most diverse populations. Known for international markets, the Assembly mixed-use development, and MARTA access.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600',
    vibes: ['Multicultural', 'Markets', 'Development', 'Transit'],
    featuredStory: {
      title: 'Doraville\'s Assembly: A New Kind of Main Street',
      excerpt: 'How the former GM plant is becoming a walkable town center.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Development',
      date: 'January 2026'
    }
  },
  'vinings': {
    name: 'Vinings',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'An upscale community near the Chattahoochee River with charming shops and restaurants. Features access to the Silver Comet Trail and maintains a village atmosphere.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600',
    vibes: ['Upscale', 'Village', 'River', 'Trails'],
    featuredStory: {
      title: 'Vinings Village: Small Town Feel, Big City Access',
      excerpt: 'How this community maintains its charm near I-285.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      category: 'Lifestyle',
      date: 'January 2026'
    }
  },
  'smyrna': {
    name: 'Smyrna',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'A thriving city west of Atlanta near the Battery and SunTrust Park. Features a revitalized downtown, excellent parks, and strong community programming.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
    vibes: ['Thriving', 'Braves', 'Parks', 'Downtown'],
    featuredStory: {
      title: 'Smyrna: More Than the Braves\' Neighbor',
      excerpt: 'How this city is creating its own identity beyond the ballpark.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800',
      category: 'Community',
      date: 'January 2026'
    }
  },
  'roswell': {
    name: 'Roswell',
    area: 'north-atlanta',
    areaName: 'North Atlanta',
    description: 'A historic city north of Atlanta with a vibrant downtown, Canton Street dining district, and access to the Chattahoochee River. Known for antebellum history and modern amenities.',
    image: 'https://images.unsplash.com/photo-1569161031678-f49b4b9ca6f1?w=1600',
    vibes: ['Historic', 'Downtown', 'River', 'Dining'],
    featuredStory: {
      title: 'Canton Street: Roswell\'s Restaurant Row',
      excerpt: 'A guide to the dining scene that put Roswell on the map.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      category: 'Food',
      date: 'January 2026'
    }
  }
};

// Helper function to get related neighborhoods from the same area
function getRelatedNeighborhoods(neighborhoodId, limit = 5) {
  const neighborhood = neighborhoodsData[neighborhoodId];
  if (!neighborhood) return [];

  return Object.entries(neighborhoodsData)
    .filter(([id, n]) => n.area === neighborhood.area && id !== neighborhoodId)
    .slice(0, limit)
    .map(([id, n]) => ({ id, ...n }));
}

// Helper function to get all neighborhoods for an area
function getNeighborhoodsByArea(areaId) {
  return Object.entries(neighborhoodsData)
    .filter(([id, n]) => n.area === areaId)
    .map(([id, n]) => ({ id, ...n }));
}

// Export for use in templates
if (typeof window !== 'undefined') {
  window.neighborhoodsData = neighborhoodsData;
  window.getRelatedNeighborhoods = getRelatedNeighborhoods;
  window.getNeighborhoodsByArea = getNeighborhoodsByArea;
}
