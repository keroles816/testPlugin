import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import { callQueryService } from "../../services/queryService";
import { drawFeatures } from "../../services/mapUtils";
import { setFeatures } from "../actions";
import * as turf from "@turf/turf";


class MapClickComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps) {
    //The last click value before re-render

    if (this.props.isActive) {
      const prevClick = prevProps.singleClick;
      const currentClick = this.props.singleClick;
      if (currentClick && currentClick !== prevClick) {
        const coordinate = currentClick.coordinate;

      
        const point = turf.point(coordinate);
        const buffered = turf.buffer(
          point,
          100000,
          { units: "meters" } // big buffer
        );

        const bufferPolygon = buffered.geometry;
        const circleFeature = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: currentClick.coordinate,
          },
          properties: {
            radius: 10000,
          },
        };

        const LAYER = this.props?.settings.dataSettings.LAYER;

        callQueryService(LAYER, bufferPolygon)
          .then(async (GEOJSONFeatures) => {
            if (!GEOJSONFeatures) {
              return this.props.notify(
                "No features found at this location",
                "error"
              );
            }
            
      if(GEOJSONFeatures.length > 0){
          const intersected = GEOJSONFeatures[0]
          circleFeature.geometry.coordinates = intersected.geometry.coordinates
      } 

      console.log("buffered,",buffered);
            await drawFeatures({
              baseFeatures: GEOJSONFeatures ?? [],
               highlightFeatures:  [circleFeature] ,   
               bufferFeature: buffered,    
              vectorLayerOptions: { clear: true },
              styleOptions: {
                base: { color: "#808080", radius: 25, isFile: false },
                highlight: { radius: 10, isFile: false } // color automatically red or blue
              },
            });

          const combined = [...GEOJSONFeatures];
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
    //locally defined action creators
    setFeatures: (features) => dispatch(setFeatures(features)),
    //coming from the ma-lib actions registry global action creators runing automatically in runtime
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
