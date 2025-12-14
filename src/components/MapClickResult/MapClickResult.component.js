import React from "react";
import { withLocalize, componentRegistry } from "@penta-b/ma-lib";
import { LOCALIZATION_NAMESPACE } from "../../constants/constants";
import { components } from "@penta-b/grid";
import { selectFeatures } from "../selectors";
import { connect } from "react-redux";
import FormButton from "../../components/Form/FormButton";
import columnFiled from "../ColumFiled";

const Grid = components.Grid;
const ZoomToFeatureButton = componentRegistry.getComponent(
  "ZoomToFeatureButton"
);
const HighlightFeatureButton = componentRegistry.getComponent(
  "HighlightFeatureButton"
);

const trComponents = [
  { component: ZoomToFeatureButton, settings: {} },
  { component: HighlightFeatureButton, settings: {} },
];
const gridComponents = [
  { component: ZoomToFeatureButton, settings: {} },
  { component: HighlightFeatureButton, settings: {} },
 {component:FormButton, settings:{
  
 }},
];

class MapClickResult extends React.Component {
 

  render() {
    
const fature = this.props.features.map((feature) => ({
  ...feature,
  id: `Enterprise.${feature.properties.id_0}` || feature.id,
  name: feature.properties.name,
 
}));

    return (
      <div>
        <Grid
          trComponents={trComponents}
          gridComponents={gridComponents}
          settings={{
            name: "MapClick Result",
            rowIdentifier: "id",
            selectable: false,
            sortable: true,
            filterable: true,
            enableLargeView: true,
            maxComponents: 3,
            resizable: true,

            columns: [
              columnFiled({ id: "id", name: "ID", type: "string",filterable:true,sortable:true }),
              columnFiled({ id: "name", name: "Name", type: "string",filterable:true,sortable:true }),
              columnFiled({ id: "feature", name: "", type: "component", filterable:false,sortable:false }),
            ],
            
            data: fature,
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    features: selectFeatures(state),
  };
};

export default connect(
  mapStateToProps,
  null
)(withLocalize(MapClickResult, LOCALIZATION_NAMESPACE));
