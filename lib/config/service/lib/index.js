'use strict';

// Provides access to service metering and aggregation configuration.

// Services are configured as individual config scripts in the services dir
var services = {
  storage: require('./services/storage.js'),
  analytics: require('./services/analytics.js')
};

// Return the list of all configured services
var all = function all() {
  return services;
};

// Return the configuration for the specified service
var config = function config(sid) {
  return all()[sid];
};

// Export our public functions
module.exports = config;
module.exports.all = all;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBS2IsSUFBTSxRQUFRLEdBQUc7QUFDZixTQUFPLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0FBQ3pDLFdBQVMsRUFBRSxPQUFPLENBQUMseUJBQXlCLENBQUM7Q0FDOUMsQ0FBQzs7O0FBR0YsSUFBTSxHQUFHLEdBQUcsU0FBTixHQUFHO1NBQVMsUUFBUTtDQUFBLENBQUM7OztBQUczQixJQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBSSxHQUFHO1NBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQzs7O0FBR25DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gUHJvdmlkZXMgYWNjZXNzIHRvIHNlcnZpY2UgbWV0ZXJpbmcgYW5kIGFnZ3JlZ2F0aW9uIGNvbmZpZ3VyYXRpb24uXG5cbi8vIFNlcnZpY2VzIGFyZSBjb25maWd1cmVkIGFzIGluZGl2aWR1YWwgY29uZmlnIHNjcmlwdHMgaW4gdGhlIHNlcnZpY2VzIGRpclxuY29uc3Qgc2VydmljZXMgPSB7XG4gIHN0b3JhZ2U6IHJlcXVpcmUoJy4vc2VydmljZXMvc3RvcmFnZS5qcycpLFxuICBhbmFseXRpY3M6IHJlcXVpcmUoJy4vc2VydmljZXMvYW5hbHl0aWNzLmpzJylcbn07XG5cbi8vIFJldHVybiB0aGUgbGlzdCBvZiBhbGwgY29uZmlndXJlZCBzZXJ2aWNlc1xuY29uc3QgYWxsID0gKCkgPT4gc2VydmljZXM7XG5cbi8vIFJldHVybiB0aGUgY29uZmlndXJhdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBzZXJ2aWNlXG5jb25zdCBjb25maWcgPSAoc2lkKSA9PiBhbGwoKVtzaWRdO1xuXG4vLyBFeHBvcnQgb3VyIHB1YmxpYyBmdW5jdGlvbnNcbm1vZHVsZS5leHBvcnRzID0gY29uZmlnO1xubW9kdWxlLmV4cG9ydHMuYWxsID0gYWxsO1xuXG4iXX0=