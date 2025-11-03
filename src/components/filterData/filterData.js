// Helper function to get distance (simplified version)
const getDistance = (coord1, coord2) => {
  const [lon1, lat1] = coord1;
  const [lon2, lat2] = coord2;
  const R = 6371000; // Earth radius in meters
  const toRad = (deg) => deg * Math.PI / 180;
// convert degrees to radians
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
 // Haversine formula to calculate the shortest distance over the earth’s surface between two points
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// --- Main part ---
const filterFeaturesInCircle = (features, circleCenter, circleRadius) => {
     const list = features.features || features;
  return features.filter((feature) => {
    // Get the coordinates of this feature
    const coords = feature.geometry.coordinates;
    console.log("Feature coords:", coords);
    // For polygon or multipolygon, we take the first coordinate (center)
    const point = Array.isArray(coords[0][0])
    ? coords[0][0][0][0] // handles multipolygon
    : coords; // handles point
    console.log("Point used for distance calculation:", point);

    const distance = getDistance(circleCenter, point);
    return distance <= circleRadius;
  });
};



export default filterFeaturesInCircle;


