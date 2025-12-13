import {LOCALIZATION_NAMESPACE} from '../../constants/constants';
export const SET_FEATURES = `${LOCALIZATION_NAMESPACE}_SET_FEATURES`;


//action creators
export const setFeatures = (feature)=>{
    return{
        type:SET_FEATURES,
        payload:feature,
    }
}



export const setLayer= (layer) =>{
    return {
        type:"SET_LAYER",
        payload:layer,
    }
}