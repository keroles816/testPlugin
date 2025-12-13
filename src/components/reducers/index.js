import * as actions from '../actions';

const initialState={
    features: [],
    layer:[],
}

const reducer=(state=initialState , action)=>{
  switch(action.type){
    case actions.SET_FEATURES:
        return{
            ...state,
            features:[...action.payload],
        }
        case "SET_LAYER":
          return{
            ...state,
            layer:[action.payload]

          }
        default:
            return {...state}
  }





}
export default reducer;