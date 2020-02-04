import { combineReducers } from "redux";
import counter from './counter';
import todos from './todos';
import imageTap from './imageTap'

const rootReducer = combineReducers({
  counter,
  todos,
  imageTap,
});

export default rootReducer;