import axios from 'axios';
import {store} from '../redux/store';
import { LOGOUT} from './typings'

const baseUrl = process.env.BACKEND_API as string;

const useAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});



useAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  },
);

export default useAxios;
