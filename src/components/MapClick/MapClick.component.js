import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import  CallQueryService  from "../../services/CallQueryService";
import  DrawFeatures  from "../../services/mapUtils";
import { setFeatures, setLayer } from "../actions";
import ShapePointAndPOlygon from "../shapePointAndPolygon";
import { useEffect, useRef } from "react";

/* interface MapClickProps {
  singleClick:{coordinate:number[],screenCoordinate:number[]}|null,
  isActive:boolean,
} */
const MapClickComponent = ({
  singleClick,
  isActive,
  settings,
  setLayer,
  setFeatures,
  showMapClickResult,
  removeMapClickResult,
}) => {
  const componentIdRef = useRef(null);
  const prevClickRef = useRef(null);
  console.log("singleClick", singleClick,"isActive", isActive,
    "settings", settings,"setLayer", setLayer,"setFeatures",
     setFeatures,"showMapClickResult", showMapClickResult,
     "removeMapClickResult", removeMapClickResult);

 
  useEffect(() => {
    if (!isActive) return;

    const prevClick = prevClickRef.current;
    const currentClick = singleClick;

    if (currentClick && currentClick !== prevClick) {
      const coordinate = currentClick.coordinate;

      const {
        currentClickFeature,
        bufferPolygon,
        buffered,
      } = ShapePointAndPOlygon(coordinate);

      const LAYER = settings.dataSettings.layers[0];
      setLayer(LAYER);

      CallQueryService(LAYER, bufferPolygon)
        .then(async (geoJsonFeatures) => {
          await DrawFeatures({
            baseFeatures: geoJsonFeatures ?? [],
            highlightFeatures: [currentClickFeature],
            bufferFeature: buffered,
            vectorLayerOptions: { clear: true },
            styleOptions: {
              base: { color: "#808080", radius: 25 },
              highlight: { radius: 10 },
              buffer: { color: "#f0f0f0" },
            },
          });

          setFeatures([...geoJsonFeatures]);
        })
        .catch(console.error);
    }

    prevClickRef.current = currentClick;
  }, [singleClick, isActive]);

 
  useEffect(() => {
    if (isActive) {
      showMapClickResult({}, (id) => {
        // Store the component ID in the ref
        componentIdRef.current = id; 
      });
    } else if(!isActive) {
      if (componentIdRef.current) {
        removeMapClickResult(componentIdRef.current);
        componentIdRef.current = null;
      }
    }
  }, [isActive]);

  return null;
};

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
