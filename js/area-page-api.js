/**
 * Area Page API Helper - DEPRECATED
 *
 * This module is replaced by platform-api.js which provides
 * backward-compatible AreaPageAPI wrappers.
 *
 * Kept as a stub for any pages that may still reference it directly.
 */

const AreaPageAPI = window.AreaPageAPI || {
  async loadAreaData() {},
  async searchBusinesses() { return []; },
  async getBusinessesByCategory() { return []; }
};

if (typeof window !== 'undefined') {
  window.AreaPageAPI = AreaPageAPI;
}
