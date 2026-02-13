/**
 * Platform API Client — City-Agnostic Content Platform
 *
 * Single client-side API library replacing geodir-api.js + area-page-api.js.
 * All methods call the new Vercel serverless functions backed by Supabase.
 */

const PlatformAPI = {
  // ============================================
  // BUSINESSES / LISTINGS
  // ============================================

  /**
   * Get businesses by area
   * @param {string|number} areaId - Area slug or ID
   * @param {Object} params - { page, perPage, category, featured }
   */
  async getBusinessesByArea(areaId, params = {}) {
    return this._get('/api/listings', { area: areaId, ...params });
  },

  /**
   * Search businesses
   * @param {string} query - Search term
   * @param {Object} params - Additional filters
   */
  async searchBusinesses(query, params = {}) {
    return this._get('/api/listings', { search: query, ...params });
  },

  /**
   * Get featured businesses
   * @param {Object} params - { perPage, area }
   */
  async getFeaturedBusinesses(params = {}) {
    return this._get('/api/listings', { featured: true, ...params });
  },

  /**
   * Get a single business by ID
   * @param {string} id - Business UUID
   */
  async getBusinessById(id) {
    const result = await this._get('/api/listings', { id });
    return result.data?.[0] || null;
  },

  /**
   * Submit a new business listing
   * @param {Object} data - Business data
   */
  async submitBusiness(data) {
    return this._post('/api/listings', data);
  },

  // ============================================
  // EVENTS
  // ============================================

  /**
   * Get events
   * @param {Object} params - { area, category, upcoming, page, perPage }
   */
  async getEvents(params = {}) {
    return this._get('/api/events', params);
  },

  /**
   * Get upcoming events
   * @param {Object} params - Additional filters
   */
  async getUpcomingEvents(params = {}) {
    return this._get('/api/events', { upcoming: true, ...params });
  },

  /**
   * Get events by area
   * @param {string|number} areaId - Area slug or ID
   * @param {Object} params - Additional filters
   */
  async getEventsByArea(areaId, params = {}) {
    return this._get('/api/events', { area: areaId, ...params });
  },

  /**
   * Submit a new event
   * @param {Object} data - Event data
   */
  async submitEvent(data) {
    return this._post('/api/events', data);
  },

  // ============================================
  // AREAS & NEIGHBORHOODS
  // ============================================

  /**
   * Get all areas
   * @param {Object} params - { neighborhoods: true } to include neighborhoods
   */
  async getAreas(params = {}) {
    return this._get('/api/areas', params);
  },

  /**
   * Get a single area by ID or slug
   * @param {string|number} idOrSlug - Area ID or slug
   */
  async getAreaById(idOrSlug) {
    const param = typeof idOrSlug === 'number' ? { id: idOrSlug } : { slug: idOrSlug };
    const result = await this._get('/api/areas', { ...param, neighborhoods: true });
    return result.data?.[0] || null;
  },

  // ============================================
  // FORMS
  // ============================================

  /**
   * Submit a form
   * @param {string} formType - 'contact', 'newsletter', 'business', 'event', 'support'
   * @param {Object} data - Form data
   */
  async submitForm(formType, data) {
    return this._post('/api/forms', { formType, ...data });
  },

  // ============================================
  // INTERNAL HELPERS
  // ============================================

  async _get(url, params = {}) {
    try {
      // Filter out undefined/null params
      const cleanParams = {};
      Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null && v !== '') {
          cleanParams[k] = v;
        }
      });

      const queryString = new URLSearchParams(cleanParams).toString();
      const fullUrl = queryString ? `${url}?${queryString}` : url;

      const response = await fetch(fullUrl);

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`PlatformAPI GET ${url}:`, error);
      return { data: [], meta: { total: 0 } };
    }
  },

  async _post(url, data = {}) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || `API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`PlatformAPI POST ${url}:`, error);
      throw error;
    }
  }
};

// Backward compatibility — existing code referencing GeoDirectoryAPI will use PlatformAPI
if (typeof window !== 'undefined') {
  window.PlatformAPI = PlatformAPI;
  window.GeoDirectoryAPI = PlatformAPI;
  window.AreaPageAPI = {
    isGeoDirectoryAvailable: () => true,
    loadAreaData: async (areaId, options = {}) => {
      const { onBusinesses, onEvents, fallbackBusinesses = [], fallbackEvents = [], limit = 10 } = options;
      try {
        if (onBusinesses) {
          const result = await PlatformAPI.getBusinessesByArea(areaId, { perPage: limit });
          onBusinesses(result.data?.length ? result.data : fallbackBusinesses);
        }
        if (onEvents) {
          const result = await PlatformAPI.getEventsByArea(areaId, { perPage: limit });
          onEvents(result.data?.length ? result.data : fallbackEvents);
        }
      } catch (e) {
        console.error('AreaPageAPI fallback error:', e);
        if (onBusinesses) onBusinesses(fallbackBusinesses);
        if (onEvents) onEvents(fallbackEvents);
      }
    },
    searchBusinesses: async (areaId, query, limit = 10) => {
      const result = await PlatformAPI.searchBusinesses(query, { area: areaId, perPage: limit });
      return result.data || [];
    },
    getBusinessesByCategory: async (areaId, category, limit = 10) => {
      const result = await PlatformAPI.getBusinessesByArea(areaId, { category, perPage: limit });
      return result.data || [];
    }
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PlatformAPI;
}
