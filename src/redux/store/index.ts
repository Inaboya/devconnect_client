import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import alertReducer from '../slice/alertSlice';

// store

export const store = configureStore({
  reducer: {
    user: authReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
