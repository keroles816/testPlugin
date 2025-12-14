import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import  CallQueryService  from "../../services/CallQueryService";
import  DrawFeatures  from "../../services/mapUtils";
import { setFeatures, setLayer } from "../actions";
import ShapePointAndPOlygon from "../shapePointAndPolygon";


class MapClickComponent extends React.Component {
  constructor(props) {
    super(props);
  } 
  componentDidUpdate(prevProps) {
    
  
    if (this.props.isActive) {
      const prevClick = prevProps.singleClick;
      const currentClick = this.props.singleClick;
      if (currentClick && currentClick !== prevClick) {

     const coordinate = currentClick.coordinate
     const {currentClickFeature, bufferPolygon, buffered } = ShapePointAndPOlygon(coordinate);

    const LAYER = this.props?.settings.dataSettings.layers[0];
    this.props.setLayer(LAYER)


        CallQueryService(LAYER, bufferPolygon)
          .then(async (geoJsonFeaturestures) => {
             await DrawFeatures({
              baseFeatures: geoJsonFeaturestures ?? [],
               highlightFeatures:  [currentClickFeature] ,   
               bufferFeature: buffered,    
              vectorLayerOptions: { clear: true },
              styleOptions: {
                base: { color: "#808080", radius: 25, isFile: false },
                highlight: { radius: 10, isFile: false },
                buffer: { color: "#f0f0f0", isFile: false }, 
              },
            });
            

          const combined = [...geoJsonFeaturestures];
          this.props.setFeatures(combined);
          
          })
          
          .catch((error) => {
            console.error("Error in callQuery Service" + error);
          });
      }
    }
    if (this.props.isActive && prevProps.isActive != this.props.isActive) {
      this.props.showMapClickResult(
        {
          removeMapClickResult: this.removeMapClickResult,
        },
        (id) => {
          this.id = id;
        }
      );
    } else if (!this.props.isActive) {
      this.id && this.props.removeMapClickResult(this.id);
      this.props.removeMapClickResult(this.currentCID);
      this.currentCID = null;
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    singleClick: selectorsRegistry.getSelector(
      "selectMapSingleClick",
      state,
      ownProps.reducerId
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFeatures: (features) => dispatch(setFeatures(features)),
    setLayer:(layer)=>dispatch(setLayer(layer)),
    notify: (message, type) =>
      dispatch(actionsRegistry.getActionCreator("notify", message, type)),
    showMapClickResult: (props, onAdd) =>
      dispatch(
        actionsRegistry.getActionCreator(
          "showComponent",
          "keroles",
          "MapClickResult",
          props,
          onAdd
        )
      ),
    removeMapClickResult: (id) =>
      dispatch(actionsRegistry.getActionCreator("removeComponent", id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapClickComponent);
