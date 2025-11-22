import { apiRegistry, actionsRegistry } from '@penta-b/ma-lib';
import  GenerateFeature  from './GenerateFeature';
import GenrateStyle from './GenerateStyle';

let VL = null;

const ValidateVl = async (options) => {
  if (!VL) {
   
    await apiRegistry.getApis(["VectorLayer"]).then(([VectorLayer]) => {
      VL = new VectorLayer();
      actionsRegistry.dispatch("addVectorLayer", VL);
    });
  } 
  else {  options.clear &&  VL.clear(); }
};






 const DrawFeatures = async ({ 
  baseFeatures = [],
   bufferFeature = [],
    highlightFeatures = [],
     vectorLayerOptions = {}, 
     styleOptions = {}
     }) => {

  try {
    await ValidateVl({ clear: vectorLayerOptions.clear ?? true });

    const allFeatures = [];

   
    const bufferedfeature = await GenerateFeature(bufferFeature);
    bufferedfeature.style = await GenrateStyle({...styleOptions.buffer});
    
    allFeatures.push(bufferedfeature);

    if (baseFeatures.length > 0) {
      const olBaseFeatures = (await Promise.all(baseFeatures.map(GenerateFeature))).filter(Boolean);
      const baseStyle = await GenrateStyle(styleOptions.base || { color: "#808080"});
      olBaseFeatures.forEach(f => f.setStyle(baseStyle));
      allFeatures.push(...olBaseFeatures); 
    }
    if (highlightFeatures.length > 0) {
      const olHighlightFeatures = (await Promise.all(highlightFeatures.map(GenerateFeature))).filter(Boolean);
      const color = baseFeatures.length > 0 
      ? (styleOptions.highlight?.color || "#F00000")  
      : (styleOptions.highlight?.color || "#0000FF"); 
      
      const highlightStyle = await GenrateStyle({ ...styleOptions.highlight, color }); 
      olHighlightFeatures.forEach(f => f.setStyle(highlightStyle));
      allFeatures.push(...olHighlightFeatures);
    }

    VL.addFeatures(allFeatures);

  } catch (error) {
    console.error("[drawFeatures] ERROR:", error);
    throw error;
  }
};

export default DrawFeatures;