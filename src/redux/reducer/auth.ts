import { AuthInitialState } from "../../utils/typings";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOG_OUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  USER_LOADED_FAILURE,
  USER_LOADED_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  error: null,
} as AuthInitialState;

const authReducer = (state = initialState, action: any) => {
  console.log(action.payload, "action.payload")
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isAuthenticated: false,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        error: null,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        isAuthenticated: false,
      };

    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case USER_LOADED_FAILURE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case LOG_OUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
