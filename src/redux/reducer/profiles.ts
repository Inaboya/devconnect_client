import { ProfileInitialState } from "../../utils/typings";
import {
  GET_PROFILES_FAILURE,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  profiles: [],
  profile: {},
  error: {},
} as ProfileInitialState;

export default function profilesReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
      };

    case GET_PROFILES_FAILURE:
      return {
        ...state,
        profiles: [],
        error: action.payload,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };

    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
  }
}
