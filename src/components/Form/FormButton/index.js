 import React from "react";
import { connect } from "react-redux";
import {
  actionsRegistry,
  withLocalize,
  systemAddNotification,
} from "@penta-b/ma-lib";

import { LOCALIZATION_NAMESPACE } from "../../../constants/constants";

class FormButton extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
    this.AddFormID = null;
    this.state = {
      isActive: false,
    }
  }

  openForm() {
     
    const LAYER = this.props?.settings

  try {
  
    this.props.showAddForm(
      {
        LAYER,

        clear: () => {
        
          if (this.AddFormID) {
            
            this.props.removeComponent(this.AddFormID);

            this.setState({
              ...this.state,
              isActive:false
            })            

          }
        },
      },
      (id) => {
        
        this.AddFormID = id;
        this.setState({
          ...this.state,
          isActive:true
        });
      },
      () => {
      
        this.AddFormID = null;
        this.props.removeComponent(this.AddFormID);
        this.setState({
          ...this.state,
          isActive:false
        })
      }
    );

  } catch (err) {
    console.error("ERROR inside openForm:", err);

  }

  if(this.state.isActive){
   this.props.notify("you have opend the form already","warning")
    this.setState({
      ...this.state,
      isActive:false})
  }else{
   this.props.notify("Form opened successfully","success")
    this.setState({
      ...this.state,
      isActive:true})
  }

}


  render() {
    return <button style={{
      padding:"10px 20px",
    
      borderRadius:"20px",
      border:"none",
      cursor:"pointer",
      fontSize:"16px",
      

    }} onClick={this.openForm}>
    ✚ Add a new Point  
      </button>;
  }
}

const mapDispatchToProps = (dispatch) => ({

  showAddForm: (props, onAdd, onRemove) =>
    dispatch(
      actionsRegistry.getActionCreator(
        "showComponent",
        LOCALIZATION_NAMESPACE,
        "FormBulider", 
        props,
        onAdd,
        onRemove
      )
    ),
     notify: (message, type) =>
      dispatch(systemAddNotification( message, type)),
  removeComponent: (id) =>
    dispatch(actionsRegistry.getActionCreator("removeComponent", id)),
});

export default connect(
  null,
  mapDispatchToProps
)(withLocalize(FormButton, LOCALIZATION_NAMESPACE));
 