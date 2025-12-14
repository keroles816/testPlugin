import {store,query,systemShowLoading,systemHideLoading} from "@penta-b/ma-lib";
import GenerateQueryBody from "./GenerateQueryBody";


 const CallQueryService = async (LAYER,bufferPolygon)=>{
  
    store.dispatch(systemShowLoading());

    try{
      const response = await query.queryFeatures(GenerateQueryBody(LAYER,bufferPolygon));
            
      const featuresData = response?.data?.[0]?.features?
        JSON.parse(response.data[0].features).features : [];
      return featuresData;
    }
  catch (error) {
  console.error(" Query failed:", error);
}
finally {
    store.dispatch(systemHideLoading());
  }
};

export default CallQueryService;