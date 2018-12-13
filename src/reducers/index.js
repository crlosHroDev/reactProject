import data from './data';
import moda from './modal';
import isLoading from './is-loading'

//import {combineReducers} from 'redux';
import {combineReducers} from 'redux-inmutable';

const rootReducer=combineReducers({
  data,
  modal,
  isLoading
})

export default rootReducer;
