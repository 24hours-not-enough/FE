import instance from './axios';

class PlaceApi {
  constructor() {
    this.axios = instance;
  }

  // 메인페이지 get
  getPlaceAxios({
    x1, x2, y1, y2,
  }) {
    return this.axios({
      method: 'post',
      url: '/api/map',
      data: {
        leftX: x1,
        rightX: x2,
        bottomY: y1,
        topY: y2,
      },
    })
      .then((res) => {
        console.log(res);
      });
  }
}

export default PlaceApi;
