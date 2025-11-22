import * as turf from "@turf/turf";

const ShapePointAndPOlygon =  (coordinate) => {

    const point =  turf.point(coordinate);
            const buffered = turf.buffer(
              point,
              100000,
              { units: "meters" } 
            );
    
            const bufferPolygon = buffered.geometry;

            
            const currentClickFeature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
            
            };



  return ({bufferPolygon,currentClickFeature,buffered})
}

export default ShapePointAndPOlygon