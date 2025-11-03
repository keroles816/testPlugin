import * as actions from '../actions';

const initialState={
    features: [],
}


//reducer function
const reducer=(state=initialState , action)=>{
  switch(action.type){
    case actions.SET_FEATURES:
        return{
            ...state,
            features:[...action.payload],
        }
        default:
            return {...state}
  }





}
export default reducer;