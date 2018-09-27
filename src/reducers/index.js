import { combineReducers } from "redux";
import checkingReducer from "./checkingReducer";
const Reducers = combineReducers({
  checking: checkingReducer
});
export default Reducers;
