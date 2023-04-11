import { Action } from '../actions';
import { ActionType } from '../actions/actionType';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        loading: false,
      };

    case ActionType.REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};

export default authReducer;
