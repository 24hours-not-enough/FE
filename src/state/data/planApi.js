import instance from './axios';

class PlanApi {
  constructor() {
    this.axios = instance;
  }

  // 계획 등록
  createTriplan(data) {
    return this.axios({
      method: 'post',
      url: '/api/plan',
      data,
    });
  }

  // 계획 수정
  updateTriplan(data, planId) {
    return this.axios({
      method: 'put',
      url: `/api/plan/${planId}`,
      data,
    });
  }

  // 계획 삭제
  deleteTriplan(data, planId) {
    return this.axios({
      method: 'put',
      url: `/api/plan/${planId}`,
      data,
    });
  }

  // 계획 단건 조회
  getCertainTriplan(planId) {
    return this.axios({
      method: 'get',
      url: `/api/plan/${planId}`,
    });
  }

  // 나의 여행 계획 전체 조회
  getMyTriplanList() {
    return this.axios({
      method: 'get',
      url: '/api/plan',
    });
  }

  // 계획에 친구 초대하기
  inviteToTriplan(data, planId) {
    return this.axios({
      method: 'post',
      url: `/api/member/plan/${planId}`,
      data,
    });
  }

  // 계획에서 친구 내보내기
  ejectFromTriplan(data, planId) {
    return this.axios({
      method: 'delete',
      url: `/api/member/plan/${planId}`,
      data,
    });
  }

  // 닉네임으로 유저 검색
  findByUsername(data) {
    return this.axios({
      method: 'get',
      url: '/api/user',
      data,
    });
  }
}

export default PlanApi;
