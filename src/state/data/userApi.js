import axios from 'axios';

class UserApi {
  constructor() {
    this.base = process.env.REACT_APP_IP;
  }

  async kakaoLogin({ code, navigate }) {
    const kakaoLoginConfig = {
      method: 'get',
      url: `${this.base}/api/kakaologin?code=${code}`,
    };

    return axios(kakaoLoginConfig)
      .then((res) => {
        const {
          result, msg, isFirst, email,
        } = res.data;
        console.log(res);

        if (isFirst) {
          navigate('/login/profile', { state: email, replace: true });
        } else {
          alert('로그인 성공');
          navigate('/', { replace: true });
        }

        return isFirst === 'true';
      })
      .catch((error) => {
        console.log(error.response);
        return false;
      });
  }

  async googleLogin({ code, navigate }) {
    const googleLoginConfig = {
      method: 'get',
      url: `${this.base}/api/googlelogin?code=${code}`,
    };

    return axios(googleLoginConfig)
      .then((res) => {
        const {
          result, msg, isFirst, email,
        } = res.data;
        console.log(res);

        if (isFirst) {
          navigate('/login/profile', { state: email, replace: true });
        } else {
          alert('로그인 성공');
          navigate('/', { replace: true });
        }

        return isFirst === 'true';
      })
      .catch((error) => {
        console.log(error.response);
        return false;
      });
  }

  async pushUserInfo({ email, userInfo }) {
    const config = {
      method: 'post',
      url: `${this.base}/api/login/userinfo/${email}`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: userInfo,
    };

    axios(config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
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
