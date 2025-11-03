import React from "react";
import { withLocalize, componentRegistry } from "@penta-b/ma-lib";
import { LOCALIZATION_NAMESPACE } from "../../constants/constants";
import { components } from "@penta-b/grid";
import { selectFeatures } from "../selectors";
import { connect } from "react-redux";
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
];

class MapClickResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { t } = this.props;
    const fature = this.props.features.map((index) => index.properties);

    return (
      <div className="penta-container-center">
        <Grid
          trComponents={trComponents}
          gridComponents={gridComponents}
          settings={{
            name: "Map Click Result",
            rowIdentifier: "id",
            selectable: false,
            sortable: true,
            filterable: true,
            enableLargeView: true,
            maxComponents: 3,
            resizable: true,

            columns: [
              {
                id: "id",
                name: t("Id"),
                type: "srting",
                display: "basic",
                filterable: true,
                sortable: false,
              },
              {
                id: "marker_name",
                name: t("Marker name"),
                type: "string",
                display: "basic",
                filterable: true,
                sortable: false,
              },
              {
                id: "features",
                name: "",
                type: "component",
                display: "basic",
                filterable: false,
                sortable: false,
              },
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
