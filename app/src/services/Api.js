import axios from 'axios';
import { getToken } from './Auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getToken();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    console.log(error);
  },
);

export default api;
