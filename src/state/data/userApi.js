import instance from './axios';

class UserApi {
  constructor() {
    this.axios = instance;
  }

  // 카카오 로그인
  async kakaoLogin({ code }) {
    return this.axios({
      method: 'get',
      url: `/api/kakaologin?code=${code}`,
    });
  }

  // 구글 로그인
  async googleLogin({ code }) {
    return this.axios({
      method: 'get',
      url: `/api/googlelogin?code=${code}`,
    });
  }

  // 닉네임 중복 체크
  async checkDuplication({ userInfo }) {
    return this.axios({
      method: 'post',
      url: '/api/username',
      data: userInfo,
    });
  }

  // 첫 로그인 시 프로필 이미지, 닉네임 등록
  async pushUserInfo({ token, userInfo }) {
    return this.axios({
      method: 'post',
      url: '/api/login/userinfo',
      headers: {
        'X-AUTH-TOKEN': token,
        'Content-Type': 'multipart/form-data',
      },
      data: userInfo,
    });
  }
}

export default UserApi;
