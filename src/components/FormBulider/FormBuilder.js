import React,{useCallback, useState,useEffect} from "react";
import { connect } from "react-redux";
import {
  withLocalize,
} from "@penta-b/ma-lib";
import { selectLayer,selectFeatures } from "../selectors";
import { Form,validationService,initializeFieldValues } from "@penta-b/pbpm-plugin-form-builder";
import { LOCALIZATION_NAMESPACE } from "../../constants/constants";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import { setFeatures } from "../actions";
import callAddService from "../../services/callAddService";

const FormBulider = (props) => {
  const [formData, setFormData] = useState({});
  
// const schema = Layer[0]?.basicSettings.formFieldEdit;
const schema = props?.Layer[0]?.basicSettings.formFieldsAdd;
 const currentClick = props.singleClick;
const coordinate = currentClick.coordinate



const handleDataChange= useCallback((data)=>{
  setFormData((prev)=>({
    ...prev,
    ...data}));
},[]);


const intialzedData = useCallback(async(data)=>{
  const formBuilderData = await initializeFieldValues(schema || {}, data || {});
  setFormData(formBuilderData);
  console.log("initialized Data", formBuilderData);
},[schema]); 

 useEffect(() => {
    intialzedData();
  }, [schema, intialzedData]);



 const validateForm = async () => {
    const { validateForm } = validationService
   
      try {
        const isDataValid = await validateForm(
          formData,
          schema,
          formData
        )
        

   const testPayload = [        
     {
    dataSource: {
      id: props.Layer[0]?.id,
      layerId: "id"
    },
    
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: coordinate
          },
          
          name: formData.textfiled1,
          properties: {
            col56: true,
            basicdata3: "9oo",
            col52: 88,
            col68: "1970-01-01T03:50:06.000+0000",
            basicdata11: "99",
            id_0: 1006,          
            col44: "8",
            col64: "2015-05-16T00:00:00.000+0000",
            col48: -1332123793,
            col60: "2015-05-16T03:50:06.000+0000",
            name: formData.textfiled1
          }
        }
      ],
     
    crs: props.Layer[0]?.crs 
  }
]
 

          const newFeature={
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: coordinate
            },
            properties: {
             
              name:formData.textfiled1
            }
          }
                      
        callAddService(
          testPayload,
          (res) => {
            console.log("Add Service Response:", res);
          props.setFeatures([...props.features,newFeature]);
          },
          (err) => {
            console.error("ERROR:", err?.response?.data || err);
          }
        );


        if (isDataValid.valid) {
          console.log("Form data is valid. Proceed with submission.");
        } 
      }
      catch (error) {
        console.error("Validation service error:", error);
      }
    }
    
  return (
    <>
   <Form
   schema={schema}
   data={formData}
   namespace={LOCALIZATION_NAMESPACE}
   onDataChange={handleDataChange}
   />

   <button onClick={() =>validateForm() }>
    add a new point
    </button>
   </>
  )
};


const mapStateToProps = (state) => {
  return {
    Layer:selectLayer(state),
    features: selectFeatures(state),
     singleClick: selectorsRegistry.getSelector(
      "selectMapSingleClick",
      state,
    
    ),
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setFeatures: (features) => dispatch(setFeatures(features)),
  }
    
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocalize(FormBulider, LOCALIZATION_NAMESPACE));

