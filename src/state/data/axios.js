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
  async (err) => {
    console.log(err);
    console.log(err.response);
    // 토큰 만료됐을 경우 access token 재발급
    if (err.response.status === 401) {
      await axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_IP}/api/token`,
        data: {
          accessToken: getTokenFromSession('accessToken'),
          refreshToken: getTokenFromSession('refreshToken'),
        },
      })
        .then((res) => {
          setTokenToSession('accessToken', res.data.accessToken);
          setTokenToSession('refreshToken', res.data.refreshToken);
        });
      return axios.create().request(err.response.config);
    }
    return Promise.reject(err);
  },
);

export default instance;
