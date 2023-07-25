// import axios from "axios";

import { Dispatch } from "redux";
import useAxios from "../../../utils/useAxios";
import {
  GET_PROFILES_FAILURE,
  GET_PROFILES_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
} from "../actionTypes";

export const getCurrentUserProfile = () => async (dispatch: Dispatch) => {
  try {
    const res = await useAxios.get("/profile/me");

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });

    return res.data;
  } catch (error: any) {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.response.data.errors,
    });

    return error.response.data.errors;
  }
};

export const getUserProfiles = () => async (dispatch: Dispatch) => {
  try {
    const res = await useAxios.get("/profile");

    dispatch({
      type: GET_PROFILES_SUCCESS,
      payload: res.data,
    });

    return res.data;
  } catch (error: any) {
    dispatch({
      type: GET_PROFILES_FAILURE,
      payload: error.response.data.errors,
    });

    return error.response.data.errors;
  }
};

export const getProfilesById = (id: string) => async (dispatch: Dispatch) => {
  try {
    const res = await useAxios.get(`/profile/${id}`);

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });

    return res.data;
  } catch (error: any) {
    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.response.data.errors,
    });
  }
};

export const createProfile =
  (formData: any, edit = false) =>
  async (dispatch: Dispatch) => {};
