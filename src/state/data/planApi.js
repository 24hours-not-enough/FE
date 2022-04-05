import instance from './axios';

class PlanApi {
  constructor() {
    this.axios = instance;
    this.SUCCESS = 'success';
  }

  // 내 플랜 전부 불러오기
  async getPlans() {
    return this.axios({
      method: 'get',
      url: '/api/plan/planDetails',
      // url: '/api/plan/planDetails.json',
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  // 새로운 트리플랜 생성
  async createPlan({ updatedPlan, navigate }) {
    return this.axios({
      // method: 'get',
      method: 'post',
      url: 'api/plan',
      // url: 'api/plan.json',
      data: updatedPlan,
    })
      .then((res) => {
        console.log(res);
        alert('새로운 트리플랜을 생성했습니다');
        navigate('/plan', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert('에러가 발생했습니다 다시 시도해보세요');
      });
  }

  // 트리플랜 수정
  async updatePlan({ planId, updatedPlan, navigate }) {
    console.log(planId);
    return this.axios({
      // method: 'get',
      method: 'put',
      url: `api/plan/${planId}`,
      // url: 'api/plan.json',
      data: updatedPlan,
    })
      .then((res) => {
        console.log(res);
        alert('트리플랜 업데이트에 성공했습니다');
        navigate('/plan', { replace: true });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        alert('에러가 발생했습니다 다시 시도해보세요');
      });
  }

  // days 추가
  async addDays(planId) {
    return this.axios({
      method: 'post',
      url: `/api/plan/${planId}/days`,
    })
      .then((res) => ({ result: true, planId, calendarId: res.data.calendarId }))
      .catch(() => ({ result: false }));
  }

  // 일정 상세등록, 수정
  async updatePlanDetail({ planId, planDetailData }) {
    return this.axios({
      method: 'post',
      url: `/api/plan/${planId}/days/calendar`,
      data: planDetailData,
    });
  }

  // 초대하기 위한 유저 닉네임 검색
  async searchUser(userName) {
    return this.axios({
      method: 'get',
      url: `api/user/${userName}`,
      // url: 'api/user/nickname.json',
    });
  }

  // 트리플랜 삭제, 복원
  async togglePlanDeleteState({ planId, navigate, isInDetail }) {
    return this.axios({
      method: 'put',
      url: `/api/plan/${planId}/storage`,
    })
      .then((res) => {
        console.log(res);
        isInDetail && navigate('/plan', { replace: true });
      });
  }

  // 트리플랜 영구삭제
  async deletePlanPermanently(planId) {
    return this.axios({
      method: 'delete',
      url: `/api/plan/${planId}`,
    });
  }

  // 체크리스트 등록 및 수정
  async updateChecklistAxios({ planId, checklistData }) {
    return this.axios({
      method: 'post',
      url: `/api/plan/${planId}/checkLists`,
      data: checklistData,
    });
  }

  // 여행계획 나가기
  async goOutFromPlanAxios(planId) {
    return this.axios({
      method: 'delete',
      url: `/api/plan/${planId}/member`,
    });
  }

  // 알림 초대 수락하기
  async acceptInvitationAxios(planId) {
    return this.axios({
      method: 'post',
      url: `api/member/plan/${planId}/active`,
    });
  }

  // 내 트리플랜에 담기
  async placeToTriplan({ planId, calendarId, placeData }) {
    return this.axios({
      method: 'post',
      url: `api/plan/${planId}/${calendarId}`,
      data: placeData,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }

  // 초대 url로 들어왔을 때
  async linkByInviteURL({ roomId, navigate }) {
    return this.axios({
      method: 'post',
      url: `api/member/plan/room/${roomId}`,
    })
      .then((res) => {
        if (res.result === this.SUCCESS) {
          navigate('/plan', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }
}

export default PlanApi;
