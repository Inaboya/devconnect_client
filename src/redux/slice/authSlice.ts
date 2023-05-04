import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  AuthInitialState,
  LoginPayload,
  LOGOUT,
  RegisterPayload,
} from '../../utils/typings';
import useAxios from '../../utils/useAxios';
import { setAlert } from './alertSlice';


// initial state
const initialState: AuthInitialState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
};

// create async thunk
export const loadUser = createAsyncThunk(
  'auth/loadUser',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await useAxios.get(
        `${process.env.REACT_APP_BACKEND_API}/users`,
      );

      return res.data;
    } catch (error: any) {
      console.log({ error });
      return rejectWithValue(error.response.data.errors);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (payload: RegisterPayload, { rejectWithValue, getState, dispatch }) => {
    console.log({ payload });
    try {
      const res = await useAxios.post(
        `${process.env.REACT_APP_BACKEND_API}/users`,
        payload,
      );

      return res.data;
    } catch (error: any) {
      console.log(error, 'error action');
      return rejectWithValue(
        error.response.data.errors || error.response.data.message,
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: LoginPayload, { rejectWithValue, getState, dispatch }) => {
    try {
      const res = await useAxios.post(
        `${process.env.REACT_APP_BACKEND_API}/users/login`,
        payload,
      );

      dispatch(loadUser);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.errors);
    }
  },
);

// logout user
export const logoutUser = () => {
  return { type: LOGOUT };
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    loginUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    loadUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    logOut: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// export default authSlice.reducer;

export default authSlice.reducer;
