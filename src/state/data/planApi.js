import Axios from './axios';

class PlanApi {
  constructor() {
    this.axios = new Axios();
  }

  async createTriplan(planInfo) {
    this.axios.post('/api/plan', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(planInfo),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }
}

export default PlanApi;
