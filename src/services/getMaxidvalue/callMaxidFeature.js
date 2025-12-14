import {store,query,systemShowLoading,systemHideLoading} from "@penta-b/ma-lib";
import GetMaxFeatureIdQuery from "./GetMaxFeatureIdQuery";


 const CallMaxIdFeature = async (LAYER)=>{
  
    store.dispatch(systemShowLoading());

    try{
      const response = await query.queryFeatures(GetMaxFeatureIdQuery(LAYER));
      
            
      const featuresData = response?.data?.[0]?.features?
        JSON.parse(response.data[0].features).features[0] : [];

        const maxFeatureIdQuery = featuresData?.properties?.id_0 || 0;
      return maxFeatureIdQuery;
    }
  catch (error) {
  console.error(" Query failed:", error);
}
finally {
    store.dispatch(systemHideLoading());
  }
};

export default CallMaxIdFeature;