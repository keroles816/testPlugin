import React,{useCallback, useState,useEffect} from "react";
import { connect } from "react-redux";
import { selectLayer,selectFeatures } from "../selectors";
import { Form,validationService,initializeFieldValues } from "@penta-b/pbpm-plugin-form-builder";
import { LOCALIZATION_NAMESPACE } from "../../constants/constants";
import { selectorsRegistry, withLocalize,} from "@penta-b/ma-lib";
import { setFeatures } from "../actions";
import callAddService from "../../services/callAddService";
import CallMaxIdFeature from "../../services/getMaxidvalue/callMaxidFeature";


const FormBulider = (props) => {
  const [formData, setFormData] = useState({});
  
  

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


        CallMaxIdFeature(props.Layer[0]).then((
          async(
            maxIdResponse)=>{
              const newMaxId=maxIdResponse+1
       
         const newFeature={
            type: "Feature",
            
            geometry: {
              type: "Point",
              coordinates: coordinate
            },
           
            properties: {
            id_0: newMaxId,          
            name:formData.textfiled1
            }
          }



   const testPayload = [        
     {
    dataSource: {
      id: props.Layer[0]?.id,
      layerId: "id"
    },
    
      features: [
        newFeature
      ],
     
    crs: props.Layer[0]?.crs 
  }
]

     callAddService(
          testPayload,
          () => {
           
          props.setFeatures([...props.features,newFeature]);
          },
          (err) => {
            console.error("ERROR:", err?.response?.data || err);
          }
        );

        }))
          
                     
      }


      catch (error) {
        console.error("Validation service error:", error);
      }
    }
    
  return (
    
    <div style={{
      padding:"10px",
      display:"flex",
      flexDirection:"column",
      gap:"10px",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"20px",
      }}>
   <Form
   schema={schema}
   data={formData}
   namespace={LOCALIZATION_NAMESPACE}
   onDataChange={handleDataChange}
   />

   <button style={{
    backgroundColor:"#000000",
    marginTop:"10px",
    borderRadius:"10px",
    border:"none",
    cursor:"pointer",

   }}  
   onClick={() =>validateForm() }>
    <p style={{
      color:"#FFFFFF",
      fontSize:"18px",
      textAlign:"center",
      padding:"10px 20px",

      
      }}> Add a new point</p>

    </button>

    </div>
  
 
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

