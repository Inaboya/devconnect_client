import { FormData } from "../../../utils/typings";
import api from "../../../utils/useAxios";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  USER_LOADED_FAILURE,
  USER_LOADED_SUCCESS,
} from "../actionTypes";

export const loadUser = () => async (dispatch: any) => {
  try {
    const res = await api.get("/users/load-user");

    dispatch({
      type: USER_LOADED_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: USER_LOADED_FAILURE,
      payload: error.response.data.error,
    });
  }
};

export const registerUser = (formData: FormData) => async (dispatch: any) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data,
    });

    return res.data;
  } catch (error: any) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data.error,
    });

    return error.response.data.errors;
  }
};

export const loginUser = (formData: FormData) => async (dispatch: any) => {
  try {
    const res = await api.post("/users/login", formData);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error.response.data.error,
    });
    return error.response.data.errors;
  }
};

export const getUser = (id: string) => async (dispatch: any) => {
  try {
    const res = await api.get(`/users/${id}`);

    dispatch({
      type: USER_LOADED_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    dispatch({
      type: USER_LOADED_FAILURE,
      payload: error.response.data.error,
    });
  }
};
