import { Dispatch } from 'redux';
import { RegisterPayload } from '../utils/typings';
import { useAxios } from '../utils/useAxios';
import { ActionType } from './actionType';

export const registerUser =
  (payload: RegisterPayload) => async (dispatch: Dispatch) => {
    try {
      const res = await useAxios.post('/users', payload);

      dispatch({
        type: ActionType.REGISTER_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.REGISTER_USER_FAIL,
        payload: error.response.data.errors,
      });
    }
  };
