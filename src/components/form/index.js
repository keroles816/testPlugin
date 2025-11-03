import React from "react";
import {Form} from "@penta-b/mna-penta-smart-forms";
import { LOCALIZATION_NAMESPACE } from "../../constants/constants";

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.formData={}
        this.OnSubmit=this.OnSubmit.bind(this);
    }

        OnSubmit(){
            console.log("Form Data:",this.formData);
        }
  render() {
    const schema = this.props.LAYER.basicSettings.ADD_FORM
    return(
        <div style={{padding:'10px'}}>
            <Form 
            schema={schema}
            formData={this.formData}
            namespace={LOCALIZATION_NAMESPACE}
            />
            <div className="penta-container-center">
                <button className="Penta-button penta-main-button" 
                onClick={this.OnSubmit}>
                    Add new point
                </button>
            </div>
        </div>
    )
  }

}
export default FormComponent;