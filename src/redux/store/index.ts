import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import alertReducer from '../slice/alertSlice';
import { setAuthToken } from '../../utils/setAuthToken';

// store

const stored = configureStore({
  reducer: {
    user: authReducer,
    alert: alertReducer,
  },
});

let currentState = stored.getState();

stored.subscribe(() => {
  let previousState = currentState;

  currentState = stored.getState();

  if (previousState.user.token !== currentState.user.token) {
    const token = currentState.user.token;
    setAuthToken(token);
  }
});

export const store = stored

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
