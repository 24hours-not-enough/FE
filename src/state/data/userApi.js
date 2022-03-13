import instance from './axios';

class UserApi {
  constructor() {
    this.axios = instance;
  }

  // 카카오 로그인
  async kakaoLogin({ code, navigate }) {
    return this.axios({
      method: 'get',
      url: `/api/kakaologin?code=${code}`,
    })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        alert('로그인을 다시 시도해주세요'); // 모달창: 문구
        navigate('/login', { replace: true });
      });
  }

  // 구글 로그인
  async googleLogin({ code, navigate }) {
    return this.axios({
      method: 'get',
      url: `/api/googlelogin?code=${code}`,
    })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        alert('로그인을 다시 시도해주세요'); // 모달창: 문구
        navigate('/login', { replace: true });
      });
  }

  // 닉네임 중복 체크
  async checkDuplication({ userInfo }) {
    return this.axios({
      method: 'post',
      url: 'http://15.164.216.191/api/username',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(userInfo),
    });
  }

  // 첫 로그인 시 프로필 이미지, 닉네임 등록
  async pushUserInfo({ tokens, userInfo }) {
    return this.axios({
      method: 'post',
      url: 'http://15.164.216.191/api/login/userinfo',
      headers: {
        'X-AUTH-TOKEN': tokens.access_token,
        'Content-Type': 'multipart/form-data',
      },
      data: userInfo,
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert('로그인을 다시 시도해주세요'); // 모달창: 문구
        // navigate('/login', { replace: true });
      });
  }
}

export default UserApi;
