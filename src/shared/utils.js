const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const checkNickname = (nickname) => {
  const nicknameRegExp = /^[a-zA-Z0-9가-힣]{2,8}$/;
  return nicknameRegExp.test(nickname);
};

const setTokenToSession = (token) => {
  sessionStorage.setItem('token', token);
};

const getTokenFromSession = () => {
  const token = sessionStorage.getItem('token');
  return token || null;
};

const changeDate = (date) => {
  const changed = new Date(date);
  const _month = month[changed.getMonth()];
  const _date = changed.getDate();
  return `${_month} ${_date}`;
};

const headerTitle = (pathname) => {
  let props = {
    title: '마이페이지',
    back: false,
  };
  if (pathname === '/mypage/profile') {
    props = {
      title: '프로필 수정',
      back: true,
    };
  }
  if (pathname === '/mypage/plan') {
    props = {
      title: '새로운 게시물',
      back: true,
    };
  }
  if (pathname === '/mypage/mylike-feeds') {
    props = {
      title: '좋아요한 게시물',
      back: true,
    };
  }
  return props;
};

export {
  checkNickname, setTokenToSession, getTokenFromSession, changeDate, headerTitle,
};
