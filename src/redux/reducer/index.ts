import { combineReducers } from "redux";
import authReducer from "./auth";
import profilesReducer from "./profiles";

export default combineReducers({
  auth: authReducer,
  profile: profilesReducer,
});
