import axios from 'axios';
import instance from './axios';

class PlaceApi {
  constructor() {
    this.axios = instance;
    this.this = axios;
    this.base = process.env.REACT_APP_SERVER_IP;
  }

  // 메인페이지 get
  async getPlaceAxios({
    x1, x2, y1, y2,
  }) {
    return this.this({
      method: 'post',
      url: `${this.base}/api/map`,
      data: {
        leftX: x1,
        rightX: x2,
        bottomY: y1,
        topY: y2,
      },
    })
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        return res.allLocationsDtoList;
      });
  }

  // 피드 등록
  async addFeedAxios(feedId) {
    return this.axios({
      method: 'put',
      url: `api/feed/${feedId}`,
    });
  }

  // 피드 수정
  async updateFeedAxios() {
    return this.axios({
      method: 'post',
      url: 'api/feed',
    });
  }

  // 피드 삭제
  async deleteFeedAxios(feedId) {
    return this.axios({
      method: 'delete',
      url: `api/feed/${feedId}`,
    });
  }

  // 피드 댓글 등록
  async addFeedCommentAxios(feedId) {
    return this.axios({
      method: 'post',
      url: `/api/feed/comment/${feedId}`,
    });
  }

  // 피드 댓글 수정
  async updateFeedCommentAxios(feedId) {
    return this.axios({
      method: 'put',
      url: `/api/feed/comment/${feedId}`,
    });
  }

  // 피드 댓글 삭제
  async deleteFeedCommentAxios(feedId) {
    return this.axios({
      method: 'delete',
      url: `/api/feed/comment/${feedId}`,
    });
  }

  // 북마크 등록
  async addBookmarkAxios(placeId) {
    return this.axios({
      method: 'post',
      url: `/api/feed/${placeId}/bookmark`,
    });
  }

  // 북마크 해제
  async deleteBookmarkAxios(placeId) {
    return this.axios({
      method: 'delete',
      url: `/api/feed/${placeId}/unbookmark`,
    });
  }

  // 피드 좋아요
  async addFeedLike(feedId) {
    return this.axios({
      method: 'post',
      url: `/api/feed/${feedId}/like`,
    });
  }

  // 피드 좋아요 삭제
  async deleteFeedLike(feedId) {
    return this.axios({
      method: 'delete',
      url: `/api/feed/${feedId}/unlike`,
    });
  }

  // 장소등록
  async addPlaceAxios({ placeData }) {
    return this.axios({
      method: 'post',
      url: '/api/newFeed',
      data: placeData,
    });
  }
}

export default PlaceApi;
