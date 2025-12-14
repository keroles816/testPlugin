import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";


class SearchBulider extends React.Component {
  constructor(props) {
    super(props);
  } 
  componentDidUpdate(prevProps) {
    
  
   
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
   
    notify: (message, type) =>
      dispatch(actionsRegistry.getActionCreator("notify", message, type)),
    showMapClickResult: (props, onAdd) =>
      dispatch(
        actionsRegistry.getActionCreator(
          "showComponent",
          "keroles",
          "SearchBulider",
          props,
          onAdd
        )
      ),
    removeMapClickResult: (id) =>
      dispatch(actionsRegistry.getActionCreator("removeComponent", id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBulider);
