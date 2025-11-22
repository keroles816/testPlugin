import { apiRegistry } from '@penta-b/ma-lib';
const GenrateStyle = async (styleOptions) => {
      
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
           styleOptions.radius 
          )
        )
      }
      
      return style;
    }
  );
};
export default GenrateStyle