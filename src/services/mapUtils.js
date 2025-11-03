import { apiRegistry, actionsRegistry } from '@penta-b/ma-lib';

let VL = null;

const ValidateVl = async (options) => {

  
  if (!VL) {
    //Create a new Vector Layer & add it to map
    await apiRegistry.getApis(["VectorLayer"]).then(([VectorLayer]) => {
      VL = new VectorLayer();
      actionsRegistry.dispatch("addVectorLayer", VL);
      
    });
  } else {
    //remove old drawing and clear the layer 
    
      
    options.clear &&  VL.clear();
  
  }
};


const genrateStyle = async (styleOptions) => {
      
  return await apiRegistry.getApis(["Style", "Fill", "Stroke", "Circle"]).then(
    ([Style, Fill, Stroke, Circle]) => {  

      let style;

       if (styleOptions?.isFile) {
        
        style = new Style({
          image: new styleOptions.Icon({
            src: styleOptions.iconSrc,
          }),
        });
      } 
     
      else {

        style = new Style(
          null,
          null,
          new Circle(
            new Fill(styleOptions.color || "rgba(255,0,0,0.5)"),
            new Stroke( '#808080', 1, null ),
           styleOptions.radius || 25 //diameter of the circle
          )
        )
      }
      
      return style;
    }
  );
};




export const generateFeature = async (geoJSONFeature) => {
  
  if (
    !geoJSONFeature.geometry.coordinates || geoJSONFeature.geometry.coordinates.length === 0
  ) {
    console.warn("[generateFeature]  Skipping invalid feature:", geoJSONFeature);
    return null; 
  }
 // what the benfit 
  const [Feature] = await apiRegistry.getApis(["Feature"]);
  //This takes a normal GeoJSON feature and creates an OpenLayers feature.

  return new Feature({ ...geoJSONFeature });
  
};



export const drawFeatures = async (GEOJSONFeatures,options) => {
  
  try {
    await ValidateVl(options.vectorLayerOptions);
    const features = (await Promise.all(GEOJSONFeatures.map(generateFeature))).filter(Boolean);
    const style = await genrateStyle(options.styleOptions);   

     features.forEach(f => f.setStyle(style)); 
    VL.addFeatures(features);
  
  

  } catch (error) {
    console.error("[drawFeatures] ERROR:", error);
    throw error;
  }

};
