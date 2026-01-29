/**
 * GeoDirectory API Service for ATL Vibes & Views
 *
 * This module provides a clean interface to the GeoDirectory REST API
 * through the Vercel serverless proxy at /api/geodir
 */

const PROXY_URL = '/api/geodir';

/**
 * Maps GeoDirectory response fields to ATL Vibes & Views UI structure
 */
function mapGeoDirectoryToListing(item) {
  return {
    id: item.id,
    name: item.post_title || item.title?.rendered || '',
    description: item.post_content || item.content?.rendered || '',
    image: item.featured_image || item.featured_image_url || '/images/placeholder.jpg',
    address: formatAddress(item),
    phone: item.phone || item.geodir_contact || '',
    website: item.website || item.geodir_website || '',
    email: item.email || item.geodir_email || '',
    category: item.post_category || item.default_category || '',
    categories: item.post_category ? [item.post_category] : [],
    neighborhood: item.neighbourhood || item.geodir_neighbourhood || '',
    area: mapNeighborhoodToArea(item.neighbourhood),
    latitude: parseFloat(item.latitude) || null,
    longitude: parseFloat(item.longitude) || null,
    rating: {
      average: parseFloat(item.overall_rating) || 0,
      count: parseInt(item.rating_count) || 0
    },
    hours: item.business_hours || null,
    amenities: item.amenities || [],
    images: item.post_images || [],
    social: {
      facebook: item.facebook || '',
      instagram: item.instagram || '',
      twitter: item.twitter || ''
    },
    status: item.post_status === 'publish' ? 'approved' : 'pending',
    featured: item.is_featured === '1' || item.is_featured === true,
    createdAt: item.post_date || null,
    updatedAt: item.post_modified || null,
    // Keep original data for reference
    _raw: item
  };
}

/**
 * Maps GeoDirectory event to ATL Vibes event structure
 */
function mapGeoDirectoryToEvent(item) {
  const listing = mapGeoDirectoryToListing(item);
  return {
    ...listing,
    type: 'event',
    startDate: item.event_start || item.geodir_event_dates?.start_date || null,
    endDate: item.event_end || item.geodir_event_dates?.end_date || null,
    startTime: item.event_start_time || null,
    endTime: item.event_end_time || null,
    recurring: item.is_recurring === '1' || item.is_recurring === true,
    recurringPattern: item.recurring_pattern || null,
    venue: item.venue || item.post_title || '',
    ticketUrl: item.ticket_url || item.tickets_url || '',
    price: item.event_cost || item.price || 'Free'
  };
}

/**
 * Format address from GeoDirectory fields
 */
function formatAddress(item) {
  const parts = [];
  if (item.street) parts.push(item.street);
  if (item.street2) parts.push(item.street2);
  if (item.city) parts.push(item.city);
  if (item.region) parts.push(item.region);
  if (item.zip) parts.push(item.zip);
  return parts.join(', ') || item.geodir_street || '';
}

/**
 * Map neighborhood to area ID
 */
function mapNeighborhoodToArea(neighborhood) {
  if (!neighborhood) return 'atlanta';

  const neighborhoodLower = neighborhood.toLowerCase();

  // Area mappings
  const areaMap = {
    'buckhead': ['buckhead', 'chastain', 'garden hills', 'peachtree hills', 'brookhaven'],
    'midtown': ['midtown', 'atlantic station', 'ansley park', 'piedmont park', 'virginia highland'],
    'downtown': ['downtown', 'centennial', 'sweet auburn', 'castleberry', 'south downtown'],
    'eastside': ['east atlanta', 'east lake', 'edgewood', 'kirkwood', 'reynoldstown', 'cabbagetown', 'inman park', 'old fourth ward', 'little five points'],
    'westside': ['west end', 'westside', 'vine city', 'english avenue', 'grove park', 'west midtown', 'bankhead'],
    'southwest': ['southwest', 'east point', 'college park', 'hapeville', 'ben hill', 'cascade'],
    'southeast': ['southeast', 'lakewood', 'pittsburgh', 'thomasville', 'peoplestown'],
    'south-atlanta': ['south atlanta', 'mechanicsville', 'summerhill', 'grant park', 'ormewood'],
    'north-atlanta': ['north atlanta', 'sandy springs', 'dunwoody', 'chamblee', 'doraville', 'tucker', 'druid hills']
  };

  for (const [area, keywords] of Object.entries(areaMap)) {
    if (keywords.some(kw => neighborhoodLower.includes(kw))) {
      return area;
    }
  }

  return 'atlanta';
}

/**
 * GeoDirectory API Client
 */
const GeoDirectoryAPI = {
  /**
   * Generic fetch wrapper with error handling
   */
  async fetch(endpoint, params = {}) {
    try {
      const queryParams = new URLSearchParams({
        endpoint,
        ...params
      }).toString();

      const response = await fetch(`${PROXY_URL}?${queryParams}`);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`GeoDirectory API error (${endpoint}):`, error);
      throw error;
    }
  },

  /**
   * Get all businesses (places)
   * @param {Object} params - Query parameters (per_page, page, category, etc.)
   */
  async getBusinesses(params = {}) {
    const defaults = { per_page: 20, page: 1 };
    const result = await this.fetch('places', { ...defaults, ...params });
    return {
      items: (result.data || []).map(mapGeoDirectoryToListing),
      meta: result.meta
    };
  },

  /**
   * Get a single business by ID
   * @param {number} id - Business ID
   */
  async getBusinessById(id) {
    const result = await this.fetch(`places/${id}`);
    return mapGeoDirectoryToListing(result.data || result);
  },

  /**
   * Get businesses by category
   * @param {string} category - Category slug or ID
   * @param {Object} params - Additional query parameters
   */
  async getBusinessesByCategory(category, params = {}) {
    return this.getBusinesses({ category, ...params });
  },

  /**
   * Get businesses by neighborhood
   * @param {string} neighborhood - Neighborhood name or slug
   * @param {Object} params - Additional query parameters
   */
  async getBusinessesByNeighborhood(neighborhood, params = {}) {
    return this.getBusinesses({ neighbourhood: neighborhood, ...params });
  },

  /**
   * Get businesses by area (maps to multiple neighborhoods)
   * @param {string} areaId - Area identifier (buckhead, midtown, etc.)
   * @param {Object} params - Additional query parameters
   */
  async getBusinessesByArea(areaId, params = {}) {
    // Areas map to location/region in GeoDirectory
    return this.getBusinesses({ region: areaId, ...params });
  },

  /**
   * Search businesses
   * @param {string} query - Search term
   * @param {Object} params - Additional query parameters
   */
  async searchBusinesses(query, params = {}) {
    return this.getBusinesses({ search: query, ...params });
  },

  /**
   * Get featured businesses
   * @param {Object} params - Additional query parameters
   */
  async getFeaturedBusinesses(params = {}) {
    return this.getBusinesses({ featured: true, ...params });
  },

  /**
   * Get all events
   * @param {Object} params - Query parameters
   */
  async getEvents(params = {}) {
    const defaults = { per_page: 20, page: 1 };
    const result = await this.fetch('events', { ...defaults, ...params });
    return {
      items: (result.data || []).map(mapGeoDirectoryToEvent),
      meta: result.meta
    };
  },

  /**
   * Get a single event by ID
   * @param {number} id - Event ID
   */
  async getEventById(id) {
    const result = await this.fetch(`events/${id}`);
    return mapGeoDirectoryToEvent(result.data || result);
  },

  /**
   * Get events by area
   * @param {string} areaId - Area identifier
   * @param {Object} params - Additional query parameters
   */
  async getEventsByArea(areaId, params = {}) {
    return this.getEvents({ region: areaId, ...params });
  },

  /**
   * Get upcoming events
   * @param {Object} params - Additional query parameters
   */
  async getUpcomingEvents(params = {}) {
    const today = new Date().toISOString().split('T')[0];
    return this.getEvents({ event_start_after: today, orderby: 'event_start', order: 'asc', ...params });
  },

  /**
   * Get business categories
   */
  async getBusinessCategories() {
    const result = await this.fetch('places/categories');
    return result.data || [];
  },

  /**
   * Get event categories
   */
  async getEventCategories() {
    const result = await this.fetch('events/categories');
    return result.data || [];
  },

  /**
   * Get reviews for a listing
   * @param {number} listingId - The listing/place ID
   * @param {Object} params - Additional query parameters
   */
  async getReviews(listingId, params = {}) {
    const result = await this.fetch('reviews', { post: listingId, ...params });
    return {
      items: result.data || [],
      meta: result.meta
    };
  },

  /**
   * Get neighborhoods/locations
   */
  async getNeighborhoods() {
    const result = await this.fetch('neighbourhoods');
    return result.data || [];
  },

  /**
   * Check if API is available and configured
   */
  async checkStatus() {
    try {
      await this.fetch('places', { per_page: 1 });
      return { available: true, error: null };
    } catch (error) {
      return { available: false, error: error.message };
    }
  },

  /**
   * Submit a new business listing
   * @param {Object} businessData - The business data to submit
   */
  async submitBusiness(businessData) {
    try {
      const response = await fetch(`${PROXY_URL}?endpoint=places`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(businessData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details?.message || error.message || `Submission failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Business submission error:', error);
      throw error;
    }
  },

  /**
   * Submit a new event listing
   * @param {Object} eventData - The event data to submit
   */
  async submitEvent(eventData) {
    try {
      const response = await fetch(`${PROXY_URL}?endpoint=events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details?.message || error.message || `Submission failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Event submission error:', error);
      throw error;
    }
  }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GeoDirectoryAPI, mapGeoDirectoryToListing, mapGeoDirectoryToEvent };
}

// Make available globally for inline scripts
if (typeof window !== 'undefined') {
  window.GeoDirectoryAPI = GeoDirectoryAPI;
}
