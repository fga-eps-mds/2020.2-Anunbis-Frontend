/* eslint no-param-reassign: "off" */
import axios from 'axios';
import { getToken } from './Users';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    console.log(error); // eslint-disable-line
  },
);

export default api;
