import useAxios from './useAxios';

export const setAuthToken = (token: string | null) => {
  if (token) {
    useAxios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete useAxios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};
