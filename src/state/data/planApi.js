import axios from 'axios';
import instance from './axios';

class PlanApi {
  constructor() {
    this.axios = instance;
    this.mock = axios;
  }

  // 계획 등록
  createTriplan({ planInfo }) {
    // return this.axios({
    //   method: 'post',
    //   url: '/api/plan',
    //   data: planInfo,
    // });
    return this.mock({
      method: 'get',
      url: 'http://localhost:3000/api/plan/create.json',
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
  deleteTriplan(planId) {
    // return this.axios({
    //   method: 'put',
    //   url: `/api/plan/${planId}`,
    //   data: { del_fl: false },
    // });
    console.log(planId);
    return this.mock({
      method: 'get',
      url: 'http://localhost:3000/api/plan/delete.json',
    });
  }

  // 계획 복구
  restoreTriplan(planId) {
    // return this.axios({
    //   method: 'put',
    //   url: `/api/plan/${planId}`,
    //   data: { del_fl: true },
    // });
    console.log(planId);
    return this.mock({
      method: 'get',
      url: 'http://localhost:3000/api/plan/restore.json',
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
    // return this.axios({
    //   method: 'get',
    //   url: '/api/plan',
    // })
    return this.mock({
      method: 'get',
      url: 'http://localhost:3000/api/plan.json',
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
  findByUsername(nickname) {
    return this.axios({
      method: 'get',
      url: `/api/user/${nickname}`,
    });
  }
}

export default PlanApi;
