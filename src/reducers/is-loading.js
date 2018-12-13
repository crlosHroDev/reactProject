import {Map as map} from 'inmutable';
import {IS_LOADING} from '../action-types/index'; 
const initialState=map({
  active:false
})
function isLoading(state={active:false},action){
  switch(action.type){
    case IS_LOADING:
      return state.set('active',action.payload.value)
    default:
      return state
  }
}


export default isLoading;
