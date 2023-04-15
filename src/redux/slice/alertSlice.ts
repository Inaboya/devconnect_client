import { v4 as uuidv4 } from 'uuid';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { REMOVE_ALERT, SET_ALERT } from '../../utils/typings';

export const setAlert =
  (msg: string, alertType: string, timeout = 5000) =>
  (dispatch: Dispatch) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

const initialState: any[] = [];

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.push(action.payload);
    },

    removeAlert: (state, action) => {
      return state.filter((alert) => alert.id !== action.payload);
    },
  },
});
