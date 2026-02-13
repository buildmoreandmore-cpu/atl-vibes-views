/**
 * Site Configuration — City-Agnostic Content Platform
 *
 * This single config file drives ALL city-specific content.
 * To deploy for a different city, change values here — no other files need editing.
 */

const SiteConfig = {
  // ============================================
  // SITE IDENTITY
  // ============================================
  site: {
    name: 'ATL Vibes & Views',
    tagline: 'Culture Blog & Vlog Magazine',
    domain: 'atlvibesandviews.com',
    logoText: 'ATL Vibes & Views',
    description: 'Your guide to Atlanta\'s neighborhoods, businesses, events, and culture.',
    email: 'hello@atlvibesandviews.com'
  },

  // ============================================
  // CITY CONFIGURATION
  // ============================================
  city: {
    name: 'Atlanta',
    nameShort: 'ATL',
    state: 'Georgia',
    stateCode: 'GA',
    country: 'US',
    coordinates: { lat: 33.749, lng: -84.388 },
    timezone: 'America/New_York',
    metroArea: 'Metro Atlanta'
  },

  // ============================================
  // THEME
  // ============================================
  theme: {
    colors: {
      primaryYellow: '#FFD95A',
      primaryRed: '#DC3535',
      accentRed: '#C62828',
      secondaryYellow: '#FFF8E1',
      textDark: '#1A1A2E',
      textLight: '#6B7280',
      borderColor: '#E5E7EB',
      bgLight: '#FAFAFA',
      bgDark: '#1A1A2E',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444'
    },
    fonts: {
      heading: "'Source Sans 3', sans-serif",
      body: "'Source Sans 3', sans-serif",
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700;900&display=swap'
    }
  },

  // ============================================
  // AREAS (top-level city zones)
  // ============================================
  areas: [
    {
      id: 'buckhead',
      name: 'Buckhead',
      slug: 'buckhead',
      tagline: 'Uptown Luxury & Nightlife',
      description: 'Atlanta\'s upscale district known for luxury shopping, fine dining, and vibrant nightlife.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600',
      vibes: ['Luxury', 'Nightlife', 'Shopping', 'Dining'],
      page: 'buckhead.html'
    },
    {
      id: 'midtown',
      name: 'Midtown',
      slug: 'midtown',
      tagline: 'Arts, Culture & Innovation',
      description: 'The cultural heart of Atlanta with world-class museums, theaters, and a thriving tech scene.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600',
      vibes: ['Arts', 'Culture', 'Tech', 'Parks'],
      page: 'midtown.html'
    },
    {
      id: 'downtown',
      name: 'Downtown',
      slug: 'downtown',
      tagline: 'History & Urban Energy',
      description: 'The historic core where Atlanta\'s past meets its future in a dynamic urban landscape.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600',
      vibes: ['History', 'Sports', 'Urban', 'Transit'],
      page: 'downtown.html'
    },
    {
      id: 'eastside',
      name: 'Eastside',
      slug: 'eastside',
      tagline: 'Creative & Eclectic',
      description: 'A collection of creative neighborhoods with indie shops, street art, and diverse dining.',
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1600',
      vibes: ['Creative', 'Indie', 'Diverse', 'Walkable'],
      page: 'eastside.html'
    },
    {
      id: 'westside',
      name: 'Westside',
      slug: 'westside',
      tagline: 'Emerging & Authentic',
      description: 'Rapidly evolving neighborhoods blending rich history with new development.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600',
      vibes: ['Emerging', 'History', 'Food', 'Community'],
      page: 'westside.html'
    },
    {
      id: 'southwest',
      name: 'Southwest',
      slug: 'southwest',
      tagline: 'Heritage & Community',
      description: 'Established communities with deep roots and growing cultural attractions.',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600',
      vibes: ['Heritage', 'Family', 'Community', 'Parks'],
      page: 'southwest.html'
    },
    {
      id: 'southeast',
      name: 'Southeast',
      slug: 'southeast',
      tagline: 'Growth & Opportunity',
      description: 'Areas of tremendous growth with new retail, dining, and entertainment options.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600',
      vibes: ['Growth', 'Affordable', 'Nature', 'Family'],
      page: 'southeast.html'
    },
    {
      id: 'south-atlanta',
      name: 'South Atlanta',
      slug: 'south-atlanta',
      tagline: 'Revival & Culture',
      description: 'Historic neighborhoods experiencing a cultural and economic renaissance.',
      image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1600',
      vibes: ['Revival', 'Culture', 'History', 'Affordable'],
      page: 'south-atlanta.html'
    },
    {
      id: 'north-atlanta',
      name: 'North Atlanta',
      slug: 'north-atlanta',
      tagline: 'Suburban & Connected',
      description: 'Suburban communities with urban amenities, top schools, and diverse dining.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600',
      vibes: ['Suburban', 'Schools', 'Dining', 'Parks'],
      page: 'north-atlanta.html'
    }
  ],

  // ============================================
  // NAVIGATION
  // ============================================
  nav: {
    main: [
      { label: 'Home', href: 'index.html' },
      { label: 'Areas', href: '#areas', dropdown: true },
      { label: 'Events', href: 'events.html' },
      { label: 'Directory', href: 'directory.html' },
      { label: 'Properties', href: 'properties.html' },
      { label: 'Development', href: 'development.html' },
      { label: 'Submit', href: 'submit.html' }
    ],
    footer: [
      { label: 'About', href: 'about.html' },
      { label: 'Contact', href: 'contact.html' },
      { label: 'Advertise', href: 'advertise.html' },
      { label: 'Media Kit', href: 'media-kit.html' },
      { label: 'Support', href: 'support.html' },
      { label: 'Terms', href: 'terms.html' },
      { label: 'Privacy', href: 'privacy.html' },
      { label: 'Cookies', href: 'cookies.html' }
    ]
  },

  // ============================================
  // BUSINESS CATEGORIES
  // ============================================
  businessCategories: [
    'Restaurant', 'Bar & Lounge', 'Cafe & Coffee', 'Retail & Shopping',
    'Health & Wellness', 'Beauty & Salon', 'Fitness & Gym', 'Entertainment',
    'Professional Services', 'Home Services', 'Automotive', 'Education',
    'Real Estate', 'Technology', 'Arts & Culture', 'Non-Profit', 'Other'
  ],

  // ============================================
  // EVENT CATEGORIES
  // ============================================
  eventCategories: [
    'Music & Concerts', 'Food & Drink', 'Arts & Culture', 'Sports & Fitness',
    'Community', 'Business & Networking', 'Education & Workshops',
    'Family & Kids', 'Nightlife', 'Festivals', 'Markets & Fairs',
    'Tech & Innovation', 'Charity & Fundraising', 'Other'
  ],

  // ============================================
  // SUPABASE
  // ============================================
  supabase: {
    url: '', // Set via environment or manually
    anonKey: '' // Set via environment or manually
  },

  // ============================================
  // AI / CONTENT PIPELINE
  // ============================================
  ai: {
    ingestEndpoint: '/api/ingest',
    batchIngestEndpoint: '/api/ingest-batch',
    contentTypes: ['business', 'event', 'article', 'neighborhood_update'],
    defaultStatus: 'pending',
    scrapingSources: {
      businesses: ['yelp', 'google_places'],
      events: ['eventbrite', 'meetup'],
      articles: ['ai_generated']
    }
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.SiteConfig = SiteConfig;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SiteConfig;
}
