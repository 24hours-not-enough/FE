import axios from 'axios';

class UserApi {
  constructor() {
    this.base = 'http://localhost:3000';
  }

  async kakaoSignIn({ userInfo, code }) {
    const kakaoSiginInConfig = {
      method: 'post',
      url: `${this.base}/api/kakaologin?code=${code}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(userInfo),
    };

    return axios(kakaoSiginInConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  async checkDuplication({ userInfo }) {
    const checkDuplicationConfig = {
      method: 'get',
      url: `${this.base}/api/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(userInfo),
    };

    return axios(checkDuplicationConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}

export default UserApi;
