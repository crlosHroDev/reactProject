import data from './data';
import moda from './modal';

//import {combineReducers} from 'redux';
import {combineReducers} from 'redux-inmutable';

const rootReducer=combineReducers({
  data,
  modal
})

export default rootReducer;
