/**
 * Area Page API Helper for ATL Vibes & Views
 *
 * This module provides data fetching for area pages (buckhead.html, midtown.html, etc.)
 * It tries GeoDirectory API first, then falls back to demo data.
 *
 * Usage in area pages:
 *   <script src="/js/geodir-api.js"></script>
 *   <script src="/js/area-page-api.js"></script>
 *
 *   // In your React component:
 *   const [businesses, setBusinesses] = useState(demoBusinesses);
 *   const [events, setEvents] = useState(demoEvents);
 *
 *   useEffect(() => {
 *     AreaPageAPI.loadAreaData('buckhead', {
 *       onBusinesses: setBusinesses,
 *       onEvents: setEvents,
 *       fallbackBusinesses: demoBusinesses,
 *       fallbackEvents: demoEvents
 *     });
 *   }, []);
 */

const AreaPageAPI = {
  // Check if GeoDirectory is available
  isGeoDirectoryAvailable() {
    return typeof window !== 'undefined' &&
           typeof window.GeoDirectoryAPI !== 'undefined';
  },

  /**
   * Load data for an area page
   * @param {string} areaId - Area identifier (buckhead, midtown, etc.)
   * @param {Object} options - Callback options
   * @param {Function} options.onBusinesses - Callback for businesses data
   * @param {Function} options.onEvents - Callback for events data
   * @param {Array} options.fallbackBusinesses - Fallback demo businesses
   * @param {Array} options.fallbackEvents - Fallback demo events
   * @param {number} options.limit - Max items to fetch (default: 10)
   */
  async loadAreaData(areaId, options = {}) {
    const {
      onBusinesses,
      onEvents,
      fallbackBusinesses = [],
      fallbackEvents = [],
      limit = 10
    } = options;

    // Load businesses
    if (onBusinesses) {
      try {
        if (this.isGeoDirectoryAvailable()) {
          const result = await window.GeoDirectoryAPI.getBusinessesByArea(areaId, { per_page: limit });
          if (result.items && result.items.length > 0) {
            // Map to expected format for area pages
            const businesses = result.items.map(this.mapBusinessForAreaPage);
            onBusinesses(businesses);
          } else {
            onBusinesses(fallbackBusinesses);
          }
        } else {
          onBusinesses(fallbackBusinesses);
        }
      } catch (error) {
        console.error('Failed to load businesses:', error);
        onBusinesses(fallbackBusinesses);
      }
    }

    // Load events
    if (onEvents) {
      try {
        if (this.isGeoDirectoryAvailable()) {
          const result = await window.GeoDirectoryAPI.getEventsByArea(areaId, { per_page: limit });
          if (result.items && result.items.length > 0) {
            // Map to expected format for area pages
            const events = result.items.map(this.mapEventForAreaPage);
            onEvents(events);
          } else {
            onEvents(fallbackEvents);
          }
        } else {
          onEvents(fallbackEvents);
        }
      } catch (error) {
        console.error('Failed to load events:', error);
        onEvents(fallbackEvents);
      }
    }
  },

  /**
   * Map GeoDirectory business to area page format
   */
  mapBusinessForAreaPage(item) {
    return {
      id: item.id,
      name: item.name,
      category: item.category || item.categories?.[0] || 'Business',
      description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || '',
      image: item.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      neighborhood: item.neighborhood || '',
      featured: item.featured || false,
      rating: item.rating?.average || 0,
      reviewCount: item.rating?.count || 0,
      phone: item.phone || '',
      website: item.website || '',
      address: item.address || ''
    };
  },

  /**
   * Map GeoDirectory event to area page format
   */
  mapEventForAreaPage(item) {
    return {
      id: item.id,
      title: item.name,
      category: item.category || item.categories?.[0] || 'Event',
      description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || '',
      image: item.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      date: item.startDate ? this.formatEventDate(item.startDate, item.endDate) : 'TBA',
      location: item.neighborhood || item.venue || '',
      featured: item.featured || false,
      startDate: item.startDate,
      endDate: item.endDate,
      ticketUrl: item.ticketUrl || '',
      price: item.price || 'Free'
    };
  },

  /**
   * Format event date range
   */
  formatEventDate(startDate, endDate) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const start = new Date(startDate);

    if (!endDate || startDate === endDate) {
      return start.toLocaleDateString('en-US', options);
    }

    const end = new Date(endDate);
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
    }

    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  },

  /**
   * Search businesses within an area
   */
  async searchBusinesses(areaId, query, limit = 10) {
    if (!this.isGeoDirectoryAvailable()) return [];

    try {
      const result = await window.GeoDirectoryAPI.searchBusinesses(query, {
        region: areaId,
        per_page: limit
      });
      return result.items.map(this.mapBusinessForAreaPage);
    } catch (error) {
      console.error('Search failed:', error);
      return [];
    }
  },

  /**
   * Get businesses by category within an area
   */
  async getBusinessesByCategory(areaId, category, limit = 10) {
    if (!this.isGeoDirectoryAvailable()) return [];

    try {
      const result = await window.GeoDirectoryAPI.getBusinessesByCategory(category, {
        region: areaId,
        per_page: limit
      });
      return result.items.map(this.mapBusinessForAreaPage);
    } catch (error) {
      console.error('Category fetch failed:', error);
      return [];
    }
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.AreaPageAPI = AreaPageAPI;
}
