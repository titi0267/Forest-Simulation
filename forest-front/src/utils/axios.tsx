import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:80/tree',
});

axiosInstance.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type';
  config.headers['Access-Control-Allow-Credentials'] = true;
  return config;
});

export default axiosInstance;
