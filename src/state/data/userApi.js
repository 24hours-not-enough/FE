import Axios from './axios';

class UserApi {
  constructor() {
    this.base = 'http://15.164.216.191';
    this.axios = new Axios();
  }

  // 카카오 로그인
  async kakaoLogin({ code, navigate }) {
    this.axios.get(`/api/kakaologin?code=${code}`)
      .then((res) => {
        console.log(res);
        const {
          result, msg, isfirst, email,
        } = res.data;

        if (isfirst) {
          navigate('/login/profile', { state: email, replace: true });
        } else {
          alert('로그인 성공');
          navigate('/', { replace: true });
          // 토큰 받아서 session에 넣어주기
        }

        return isfirst === 'true';
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        return false;
      });
  }

  // 구글 로그인
  async googleLogin({ code, navigate }) {
    this.axios.get(`/api/googlelogin?code=${code}`)
      .then((res) => {
        console.log(res);
        const {
          result, msg, isfirst, email,
        } = res.data;

        if (isfirst) {
          navigate('/login/profile', { state: email, replace: true });
        } else {
          alert('로그인 성공');
          navigate('/', { replace: true });
          // 토큰 받아서 session에 넣어주기
        }

        return isfirst === 'true';
      })
      .catch((error) => {
        console.log(error.response);
        return false;
      });
  }

  // 첫 로그인 시 프로필 이미지, 닉네임 등록
  async pushUserInfo({ email, userInfo }) {
    this.axios.post(`/api/login/userinfo/${email}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: userInfo,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }

  // 닉네임 중복 체크
  async checkDuplication({ userInfo }) {
    this.axios.get('/api/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(userInfo),
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
}

export default UserApi;
