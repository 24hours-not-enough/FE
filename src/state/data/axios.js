import axios from 'axios';
import { getTokenFromSession } from '../../shared/utils';

export const imgApi = axios.create({
  baseURL: 'http://13.124.67.66',
  headers: {
    'Content-Type': 'application/json',
  },
});

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_IP,
  // baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getTokenFromSession('accessToken');
    const refreshToken = getTokenFromSession('refreshToken');
    if (accessToken && refreshToken) {
      config.headers.common.authorization = accessToken;
      config.headers.common.refreshToken = refreshToken;
    }
    return config;
  },
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) =>
    Promise.reject(error),
  // token 만료시간일 경우
  // 그 외 에러 코드에 맞는 가공
);

export default instance;
