export interface RegisterPayload {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

export interface AuthInitialState {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  user: RegisterPayload | null;
  error: string | null;
}

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
      