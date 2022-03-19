const userData = { userId: 1, userName: 'sunny', userProfileImage: '' };

const user = {
  userId: '1',
  userName: 'sunny',
  userProfileImage: '',
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
      coordinates: ['latitude', 'longitude'],
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
    travelStart: '',
    travelEnd: '',
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
            coordinates: ['latitude', 'longitude'],
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
    title: 'title',
    travelDestination: '미국',
    travelStart: '',
    travelEnd: '',
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
            coordinates: ['latitude', 'longitude'],
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
      title: '',
      travelStart: '',
      travelEnd: '',
      feedDetail: [
        {
          title: '1일차',
          feedDetailLoc: [
            {
              feedDetailLocId: 1,
              coordinates: ['latitude', 'longitude'],
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
        date: '',
        images: [''],
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
    coordinates: ['latitude', 'longitude'],
    placeName: '장소이름',
    placeAddress: '지역 주소',
    feeds: [{
      feedId: 1,
      title: '장소이름',
      date: '',
      images: [''],
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
