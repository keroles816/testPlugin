import { apiRegistry} from '@penta-b/ma-lib';
 const GenerateFeature = async (geoJsonFeaturesture) => {
  
  
  const [Feature] = await apiRegistry.getApis(["Feature"]);
  
  return new Feature({ ...geoJsonFeaturesture });
  
};
export default GenerateFeature;