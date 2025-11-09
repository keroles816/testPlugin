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
  //geoJsonFeature is an object of json format
  if (
    !geoJSONFeature.geometry.coordinates || geoJSONFeature.geometry.coordinates.length === 0
  ) {
    console.warn("[generateFeature]  Skipping invalid feature:", geoJSONFeature);
    return null; 
  }
 // what the benfit 
  const [Feature] = await apiRegistry.getApis(["Feature"]);
//converted geoJson to ol features to draw on the map and add style and functionality

  return new Feature({ ...geoJSONFeature });
  
};



export const drawFeatures = async ({ baseFeatures = [], highlightFeatures = [], vectorLayerOptions = {}, styleOptions = {} }) => {
  try {
    // 1️⃣ Ensure Vector Layer exists and clear if requested
    await ValidateVl({ clear: vectorLayerOptions.clear ?? true });

    const allFeatures = [];

    
    if (baseFeatures.length > 0) {
      const olBaseFeatures = (await Promise.all(baseFeatures.map(generateFeature))).filter(Boolean);
      const baseStyle = await genrateStyle(styleOptions.base || { color: "#808080", radius: 25 });
      olBaseFeatures.forEach(f => f.setStyle(baseStyle));
      allFeatures.push(...olBaseFeatures);
    }

  
    if (highlightFeatures.length > 0) {
      const olHighlightFeatures = (await Promise.all(highlightFeatures.map(generateFeature))).filter(Boolean);

      
      const color = baseFeatures.length > 0 
                    ? (styleOptions.highlight?.color || "#F00000")  // red if base exists
                    : (styleOptions.highlight?.color || "#0000FF"); // blue if only highlight

      const highlightStyle = await genrateStyle({ ...styleOptions.highlight, color });
      olHighlightFeatures.forEach(f => f.setStyle(highlightStyle));
      allFeatures.push(...olHighlightFeatures);
    }

   
    VL.addFeatures(allFeatures);

  } catch (error) {
    console.error("[drawFeatures] ERROR:", error);
    throw error;
  }
};

