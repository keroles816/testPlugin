import {store,query,systemShowLoading,systemHideLoading} from "@penta-b/ma-lib";


//this file will contains two functions to query data from the server
const genQueryBody = (layer,bufferPolygon) => {
  return [
    {
      dataSource: {id: layer.id},
          filter: {
    conditionList: [{
      spatialCondition: {
        key: layer.geometryField.fieldName,
        geometry: JSON.stringify(bufferPolygon),//object {type:"Polygon",coordinates:[]}
        spatialRelation: "INTERSECT"
      }
    }],

    logicalOperation: "AND"
  }, 
      crs: layer.crs,
    
    },
  ];
};




export const callQueryService = async (layer,bufferPolygon)=>{
  
    store.dispatch(systemShowLoading());

    try{
      const response = await query.queryFeatures(genQueryBody(layer,bufferPolygon));
            
      const featuresData = response?.data?.[0]?.features?
        JSON.parse(response.data[0].features).features : [];

        //irecieved features data without geojson Api 
      return featuresData ;
    }
  catch (error) {
  console.error(" Query failed:", error);
  if (error.response) {
  
    console.error("Status:", error.response.status);
  }

  if (error?.response?.status === 401) {
    console.warn(" Unauthorized (401). Maybe token expired — refresh token.");
    return [];
  }

  throw error;
}
finally {
    store.dispatch(systemHideLoading());
  }
};