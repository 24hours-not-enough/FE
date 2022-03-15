import axios from 'axios';
import { getTokenFromSession } from '../../shared/utils';

const instance = axios.create({
  baseURL: process.env.REACT_APP_IP,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
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
    response,
  (error) =>
    Promise.reject(error),
  // token 만료시간일 경우
  // 그 외 에러 코드에 맞는 가공
);

export default instance;

// class Axios {
//   constructor() {
//     this.base = process.env.REACT_APP_IP;

//     this.instance = axios.create({
//       baseURL: this.base,
//     });
//   }

//   get(config) {
//     return this.instance.get(config);
//   }

//   post(config) {
//     return this.instance.post(config);
//   }

//   put(config) {
//     return this.instance.put(config);
//   }

//   delete(config) {
//     return this.instance.delete(config);
//   }
// }

// export default Axios;
