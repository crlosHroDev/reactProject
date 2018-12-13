import data from './data';
import moda from './modal';

import {combineReducers} from 'redux';

const rootReducer=combineReducers({
  data,
  modal
})

export default rootReducer;
