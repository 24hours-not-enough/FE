const userData = { userId: 1, userName: 'sunny', userProfileImage: '/images/profile_default.jpg' };
const imagesData = ['/images/mock/1.jpg', '/images/mock/2.jpg', '/images/mock/3.jpg'];

const user = {
  userInfo: userData,
  notification: [
    {
      code: '초대',
      feedId: null,
      planId: 1,
      userData: [
        {
          userName: 'amy',
          userProfileImage: '',
        },
      ],
    },
    {
      code: '댓글',
      feedId: 1,
      commentId: 1,
      planId: null,
      userData: [
        {
          userName: 'amy',
          userProfileImage: '',
        },
      ],
    },
    {
      code: '채팅',
      feedId: null,
      planId: 1,
      userData: [
        {
          userName: 'amy',
          userProfileImage: '',
        },
      ],
    },
  ],
  bookmark: [
    {
      placeId: 1,
      latitude: 37.566,
      longitude: 126.9786,
      placeName: '땡땡식당',
      placeAddress: '서울시 어딘가',
      feedData: [
        {
          feedId: 1,
          title: '땡땡식당',
          date: '2022.03.18',
          images: ['/images/mock/1.jpg', '/images/mock/2.jpg', '/images/mock/3.jpg'],
          like: [userData, userData, userData],
          creator: userData,
          content: '피드 메모',
          comments: [
            {
              commentId: 1,
              creator: userData,
              content: '댓글 내용',
            },
          ],
        },
      ],
    },
  ],
};

const plan = [
  {
    planId: 1,
    title: 'title',
    travelDestination: '미국',
    travelStart: '2022-03-19T17:31:09.179Z',
    travelEnd: '2022-03-20T17:31:09.179Z',
    isDeleted: false,
    members: [userData, userData],
    calendars: [
      {
        calendarId: 1,
        title: '1일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 2,
        title: '2일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
    ],
    checkList: [
      {
        checkListId: 1,
        checkItem: '',
        isChecked: true,
      },
      {
        checkListId: 2,
        checkItem: '',
        isChecked: false,
      },
    ],
  },
  {
    planId: 2,
    title: 'title2',
    travelDestination: '미국',
    travelStart: '2022-03-21T17:31:09.179Z',
    travelEnd: '2022-03-25T17:31:09.179Z',
    isDeleted: false,
    members: [userData, userData],
    calendars: [
      {
        calendarId: 1,
        title: '1일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 2,
        title: '2일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 3,
        title: '3일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 4,
        title: '4일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
    ],
    checkList: [
      {
        checkListId: 1,
        checkItem: '',
        isChecked: true,
      },
    ],
  },
  {
    planId: 3,
    title: 'title3',
    travelDestination: '미국',
    travelStart: '2022-03-21T17:31:09.179Z',
    travelEnd: '2022-03-25T17:31:09.179Z',
    isDeleted: true,
    members: [userData, userData],
    calendars: [
      {
        calendarId: 1,
        title: '1일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 2,
        title: '2일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 3,
        title: '3일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
      {
        calendarId: 4,
        title: '4일차',
        calendarDetails: [
          {
            calendarDatilId: 1,
            locationName: '',
            locationMemo: '',
            latitude: 37.566,
            longitude: 126.9786,
            order: 1,
          },
        ],
      },
    ],
    checkList: [
      {
        checkListId: 1,
        checkItem: '',
        isChecked: true,
      },
    ],
  },
];

const feed = {
  myFeed: [
    {
      feedId: 1,
      title: '기념여행',
      travelStart: '2022.01.18',
      travelEnd: '2022.01.18',
      feedImages: [{ imgUrl: '', imgId: '12312' }, { imgUrl: '', imgId: '12312' }],
      feedDetail: [
        {
          title: '1일차',
          feedDetailLoc: [
            {
              feedDetailLocId: 1,
              latitude: 37.566,
              longitude: 126.9786,
              locationMemo: '',
              placeName: '',
              feedDetailLocImg: [{ imgUrl: '', imgId: '12312' }],
            },
            {
              feedDetailLocId: 2,
              latitude: 37.566,
              longitude: 126.9786,
              locationMemo: '',
              placeName: '',
              feedDetailLocImg: [{ imgUrl: '', imgId: '12332' }],
            },
          ],
        },
        {
          title: '2일차',
          feedDetailLoc: [
            {
              feedDetailLocId: 2,
              latitude: 37.566,
              longitude: 126.9786,
              locationMemo: '',
              placeName: '',
              feedDetailLocImg: [{ imgUrl: '' }],
            },
          ],
        },
      ],
    },
    {
      feedId: 2,
      title: '여행여행',
      travelStart: '2022.01.18',
      travelEnd: '2022.01.18',
      feedImages: [{ imgUrl: '', imgId: '12314' }, { imgUrl: '', imgId: '12315' }],
      feedDetail: [
        {
          title: '1일차',
          feedDetailLoc: [
            {
              feedDetailLocId: 1,
              latitude: 37.566,
              longitude: 126.9786,
              locationMemo: '',
              placeName: '',
              feedDetailLocImg: [{ imgUrl: '', imgId: '12312' }],
            },
            {
              feedDetailLocId: 2,
              latitude: 37.566,
              longitude: 126.9786,
              locationMemo: '',
              placeName: '',
              feedDetailLocImg: [{ imgUrl: '', imgId: '12332' }],
            },
          ],
        },
        {
          title: '2일차',
          feedDetailLoc: [
            {
              feedDetailLocId: 2,
              latitude: 37.566,
              longitude: 126.9786,
              locationMemo: '',
              placeName: '',
              feedDetailLocImg: [{ imgUrl: '' }],
            },
          ],
        },
      ],
    },
  ],
  myLikes: [
    {
      city: '',
      feeds: [{
        feedId: 1,
        title: '장소이름',
        date: '2022.01.18',
        images: imagesData,
        like: [userData, userData],
        creator: {
          userId: 2,
          userName: '작성자 닉네임',
          userProfileImage: '',
        },
        content: '피드 메모',
        comments: [
          {
            commentId: 1,
            creator: userData,
            content: '댓글 내용',
          },
        ],
      }],
    },
  ],
};

const place = [
  {
    placeId: 1,
    latitude: 37.566,
    longitude: 126.9786,
    placeName: '장소이름',
    feeds: [
      {
        feedId: 1,
        date: '2022.01.18',
        images: imagesData,
        like: [userData, userData],
        creator: userData,
        content: '피드 메모',
        comments: [
          {
            commentId: 1,
            creator: userData,
            content: '댓글 내용',
          },
          {
            commentId: 2,
            creator: userData,
            content: '댓글 내용2',
          },
          {
            commentId: 3,
            creator: userData,
            content: '댓글 내용3',
          },
        ],
      },
      {
        feedId: 2,
        date: '',
        images: imagesData,
        like: [userData, userData],
        creator: userData,
        content: '피드 메모',
        comments: [
          {
            commentId: 1,
            creator: userData,
            content: '댓글 내용',
          },
        ],
      },
    ],
  },
  {
    placeId: 2,
    latitude: 37.563,
    longitude: 126.9790,
    placeName: '장소이름',
    feeds: [{
      feedId: 1,
      date: '',
      images: imagesData,
      like: [userData, userData],
      creator: userData,
      content: '피드 메모',
      comments: [
        {
          commentId: 1,
          creator: userData,
          content: '댓글 내용',
        },
      ],
    }],
  },
];

export {
  user, plan, feed, place,
};
