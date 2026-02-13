/**
 * GeoDirectory API Stubs
 *
 * These empty stubs prevent runtime errors in files that reference
 * GeoDirectoryAPI or NeighborhoodFilter. All functionality has been
 * migrated to platform-api.js and the Supabase backend.
 */

const GeoDirectoryAPI = {};
const NeighborhoodFilter = {};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GeoDirectoryAPI, NeighborhoodFilter };
}

if (typeof window !== 'undefined') {
  window.GeoDirectoryAPI = GeoDirectoryAPI;
  window.NeighborhoodFilter = NeighborhoodFilter;
}
