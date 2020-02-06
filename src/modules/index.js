import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';
import imageTap from './imageTap'
import selectOptions from './selectOptions'

const rootReducer = combineReducers({
  counter,
  todos,
  imageTap,
  selectOptions,
});

export default rootReducer;

// dem