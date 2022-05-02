import axios from 'axios';
import { removeToken } from '../../shared/utils';
import instance from './axios';

class UserApi {
  constructor() {
    this.axios = instance;
    this.realAxios = axios;
    this.SUCCESS = 'success';
    this.FAIL = 'fail';
    this.base = process.env.REACT_APP_SERVER_IP;
  }

  // 카카오 로그인
  async kakaoLogin({ code, navigate }) {
    return this.axios({
      method: 'get',
      url: `/api/kakaologin?code=${code}`,
    })
      .then((res) => {
        if (res.result === this.SUCCESS) {
          if (res && res.first === true) {
            navigate('/login/profile', { state: res.tokens, replace: true });
          } else if (res && res.first === false) {
            navigate('/', { replace: true });
            return res;
          }
        }
        if (res.result === this.FAIL) {
          alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
          navigate('/login', { replace: true });
        }
      })
      .catch(() => {
        alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
        navigate('/login', { replace: true });
      });
  }

  // 구글 로그인
  async googleLogin({ code, navigate }) {
    return this.axios({
      method: 'get',
      url: `/api/googlelogin?code=${code}`,
    })
      .then((res) => {
        if (res.result === this.SUCCESS) {
          if (res && res.first === true) {
            navigate('/login/profile', { state: res.tokens, replace: true });
          } else if (res && res.first === false) {
            navigate('/', { replace: true });
            return res;
          }
        }
        if (res.result === this.FAIL) {
          alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
          navigate('/login', { replace: true });
        }
      })
      .catch(() => {
        alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
        navigate('/login', { replace: true });
      });
  }

  // 닉네임 중복 체크
  async checkDuplication({ tokens, userInfo }) {
    return this.axios({
      method: 'post',
      url: '/api/username',
      headers: {
        authorization: tokens.access_token,
        refreshToken: tokens.refresh_token,
      },
      data: userInfo,
    });
  }

  // 첫 로그인 시 프로필 이미지, 닉네임 등록
  async loginUserInfo({ tokens, userInfo, navigate }) {
    return this.realAxios({
      method: 'post',
      url: `${this.base}/api/login/userinfo`,
      headers: {
        authorization: tokens.access_token,
        refreshToken: tokens.refresh_token,
        'Content-Type': 'multipart/form-data',
      },
      data: userInfo,
    })
      .then((res) => res.data)
      .then((res) => {
        if (res.result === this.SUCCESS) {
          navigate('/', { replace: true });
          return { ...res, tokens };
        }
        if (res.result === this.FAIL) {
          alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
          navigate('/login', { replace: true });
        }
      }).catch(() => {
        alert('오류가 발생했습니다. 로그인을 다시 시도해주세요');
        navigate('/login', { replace: true });
      });
  }

  async getUser() {
    return this.axios({
      method: 'get',
      url: '/api/user',
    });
  }

  // 로그아웃
  async logoutAxios() {
    return this.axios({
      method: 'get',
      url: '/api/logout',
    });
  }

  // 회원탈퇴
  async withdrawalAxios() {
    return this.axios({
      method: 'post',
      url: '/api/withdrawal',
    })
      .then(() => removeToken());
  }

  // 피드 좋아요
  async likeFeedAxios({ feedDetailLocId }) {
    return this.axios({
      method: 'post',
      url: `/api/feed/${feedDetailLocId}/like`,
    });
  }

  // 피드 좋아요 취소
  async unlikeFeedAxios({ feedDetailLocId }) {
    return this.axios({
      method: 'delete',
      url: `/api/feed/${feedDetailLocId}/unlike`,
    });
  }
}

export default UserApi;
