import axios from 'axios';
import { getTokenFromSession } from '../../shared/utils';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_IP,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromSession();
    token && (config.headers.common['X-AUTH-TOKEN'] = token);
    return config;
  },
);

instance.interceptors.response.use(
  (response) =>
    response.data,
  (error) =>
    Promise.reject(error),
  // token 만료시간일 경우
  // 그 외 에러 코드에 맞는 가공
);

export default instance;
