/* eslint-disable no-return-await */
import axios from 'axios';
import { getTokenFromSession, setTokenToSession } from '../../shared/utils';

export const imgApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_IP,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

imgApi.interceptors.request.use(
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

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_IP,
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

const refresh = () => axios({
  method: 'post',
  url: `${process.env.REACT_APP_SERVER_IP}/api/token`,
  data: {
    accessToken: getTokenFromSession('accessToken'),
    refreshToken: getTokenFromSession('refreshToken'),
  },
}).then((res) => {
  setTokenToSession('accessToken', res.data.accessToken);
  setTokenToSession('refreshToken', res.data.refreshToken);
});

instance.interceptors.response.use(
  (response) => response.data,
  async (err) => {
    // 토큰 만료됐을 경우 access token 재발급
    if (err.response.status === 401) {
      await refresh();
      return axios.create().request({
        ...err.response.config,
        headers: {
          authorization: getTokenFromSession('accessToken'),
          refreshToken: getTokenFromSession('refreshToken'),
        },
      });
    }
    return Promise.reject(err);
  },
);

imgApi.interceptors.response.use(
  (response) => response.data,
  async (err) => {
    // 토큰 만료됐을 경우 access token 재발급
    if (err.response.status === 401) {
      await refresh();
      return axios.create().request({
        ...err.response.config,
        headers: {
          authorization: getTokenFromSession('accessToken'),
          refreshToken: getTokenFromSession('refreshToken'),
        },
      });
    }
    return Promise.reject(err);
  },
);

export default instance;
