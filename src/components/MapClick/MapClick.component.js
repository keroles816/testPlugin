import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import { callQueryService } from "../../services/queryService";
import { drawFeatures } from "../../services/mapUtils";
import { setFeatures } from "../actions";
import * as turf from "@turf/turf";
import { toLonLat, fromLonLat } from "ol/proj";

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

        //draw the circle with GeoJSON format
        // create a buffer
        const point = turf.point(coordinate);
        const buffered = turf.buffer(
          point,
          100000,
          { units: "meters" } // big buffer
        );

        const bufferPolygon = buffered.geometry;
        

        //determine how to draw the circle how would you like
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
        //this is a Layer i got from db to search with it
        //settings injected or passed from the parent component

        callQueryService(LAYER, bufferPolygon)
          .then(async (GEOJSONFeatures) => {
            if (!GEOJSONFeatures) {
              return this.props.notify(
                "No features found at this location",
                "error"
              );
            }
            //then i got the layer and i search with it via layer id and crs and key and witch column intyersect with
            

            if (!GEOJSONFeatures || GEOJSONFeatures.length === 0) {
              await drawFeatures([circleFeature], {
                vectorLayerOptions: { clear: true   }, //Do not clear the layer before drawing

                styleOptions: {
                  color: "#0000FF",
                  isFile: false,
                  radius: 25
                  //i need to clear after this draw
                },
              });
            } else {
              await drawFeatures(GEOJSONFeatures, {
                vectorLayerOptions: { clear: true },
                styleOptions: { color: "#808080", isFile: false , radius: 25 },
              });

              await drawFeatures([circleFeature], {
                vectorLayerOptions: { clear: false },
                styleOptions: { color: "#F00000", isFile: false , radius: 25 },
              });
            }


             const combined = [...GEOJSONFeatures, circleFeature];
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
