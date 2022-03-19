// id : location id
const dataMap = [
  {
    locationId: 1,
    latitude: '37.5626',
    longitude: '126.9786567',
    locationName: '롯데월드',
    locationMemo: '서울시 어쩌구 저쩌구',
    imageUrl: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },
  {
    locationId: 2,
    latitude: '37.826',
    longitude: '126.9786567',
    locationName: '여기',
    locationMemo: '서울시 어쩌구 저쩌구',
    imageUrl: 'https://www.vviptravel.com/wp-content/uploads/2019/05/lotte-world-theme-park-castle.jpg',
  },
  {
    id: 3,
    latitude: '37.566',
    longitude: '126.9786567',
    locationName: '저기',
    locationMemo: '서울시 어쩌구 저쩌구',
    imageUrl: 'https://www.vviptravel.com/wp-content/uploads/2019/05/lotte-world-theme-park-castle.jpg',
  },
  {
    id: 4,
    latitude: '37.566826',
    longitude: '126',
    locationName: '요기',
    locationMemo: '서울시 어쩌구 저쩌구',
    imageUrl: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },
];

// id : feed id
const dataPhoto = [
  {
    id: 1,
    url: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },
  {
    id: 2,
    url: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },
  {
    id: 3,
    url: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },
  {
    id: 4,
    url: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },
  {
    id: 5,
    url: 'https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg',
  },

];

// id : triplan id, calendar id
const dataTriplan = [
  { id: 1, title: '미국 가자 우아악', list: [{ id: 1, title: '1일차' }, { id: 2, title: '2일차' }] },
  { id: 2, title: '가자 제주도', list: [{ id: 1, title: '1일차' }, { id: 2, title: '2일차' }, { id: 3, title: '3일차' }, { id: 4, title: '4일차' }] },
];

const dataFeed = {
  id: 1,
  writer: { username: '닉네임', profileImg: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png' },
  date: '2022.01.18',
  feedImg: ['/images/mock/1.jpg', '/images/mock/2.jpg', '/images/mock/3.jpg'],
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  comments: [
    {
      id: 1,
      username: '닉네임',
      profileImg: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      id: 2,
      username: '닉네임',
      profileImg: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      id: 3,
      username: '닉네임',
      profileImg: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      id: 4,
      username: '닉네임',
      profileImg: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
    {
      id: 5,
      username: '닉네임',
      profileImg: 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    },
  ],
};

export {
  dataMap, dataPhoto, dataTriplan, dataFeed,
};
