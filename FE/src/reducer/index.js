import { combineReducers } from "redux";
import studentReducer from "./itemReducer/studentReducer"
export default combineReducers({
  student: studentReducer
});
