import instance from './axios';

class UserApi {
  constructor() {
    this.axios = instance;
    this.SUCCESS = 'success';
    this.FAIL = 'fail';
    this.TRUE = 'true';
    this.FALSE = 'false';
  }

  // 카카오 로그인
  async kakaoLogin({ code, navigate }) {
    return this.axios({
      method: 'get',
      // url: `/api/kakaologin?code=${code}`,
      url: '/api/kakaologin.json',
    })
      .then((res) => {
        console.log(res);
        if (res.result === this.SUCCESS) {
          if (res && res.isFirst === this.TRUE) {
            navigate('/login/profile', { state: res.tokens, replace: true });
          } else if (res && res.isFirst === this.FALSE) {
            navigate('/', { replace: true });
            return res;
          }
        }
        if (res.result === this.FAIL) {
          alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
          navigate('/login', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
        navigate('/login', { replace: true });
      });
  }

  // 구글 로그인
  async googleLogin({ code, navigate }) {
    return this.axios({
      method: 'get',
      // url: `/api/googlelogin?code=${code}`,
      url: '/api/kakaologin.json',
    })
      .then((res) => {
        console.log(res);
        if (res.result === this.SUCCESS) {
          if (res && res.isFirst === this.TRUE) {
            navigate('/login/profile', { state: res.tokens, replace: true });
          } else if (res && res.isFirst === this.FALSE) {
            navigate('/', { replace: true });
            return res;
          }
        }
        if (res.result === this.FAIL) {
          alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
          navigate('/login', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
        navigate('/login', { replace: true });
      });
  }

  // 닉네임 중복 체크
  async checkDuplication({ userInfo }) {
    return this.axios({
      method: 'get',
      // method: 'post',
      // url: '/api/username',
      url: '/api/username.json',
      data: userInfo,
    });
  }

  // 첫 로그인 시 프로필 이미지, 닉네임 등록
  async loginUserInfo({ tokens, userInfo, navigate }) {
    return this.axios({
      method: 'get',
      // method: 'post',
      // url: '/api/login/userinfo',
      url: '/api/login/userinfo.json',
      headers: {
        authorization: tokens.access_token,
        refreshToken: tokens.refresh_token,
        'Content-Type': 'multipart/form-data',
      },
      data: userInfo,
    })
      .then((res) => {
        console.log(res);
        if (res.result === this.SUCCESS) {
          navigate('/', { replace: true });
          return { ...res, tokens };
        }
        if (res.result === this.FAIL) {
          alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
          navigate('/login', { replace: true });
        }
      });
  }
}

export default UserApi;
