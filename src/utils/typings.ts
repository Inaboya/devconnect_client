export interface FormData {
  name?: string;
  email: string;
  password: string;
  password2?: string;
}


export interface AuthInitialState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: FormData | null;
  error: string | null;
}

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const LOGOUT = 'LOGOUT';
      