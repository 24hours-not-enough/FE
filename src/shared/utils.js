const checkNickname = (nickname) => {
  const nicknameRegExp = /^[a-zA-Z0-9가-힣]{2,8}$/;
  return nicknameRegExp.test(nickname);
};

const setTokenToSession = (key, token) => {
  sessionStorage.setItem(key, token);
};

const getTokenFromSession = (key) => {
  const token = sessionStorage.getItem(key);
  return token || null;
};

const removeToken = () => {
  sessionStorage.clear();
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
  if (pathname === '/mypage/settings') {
    props = {
      title: '설정',
      back: true,
    };
  }
  return props;
};

export {
  checkNickname, setTokenToSession, getTokenFromSession, removeToken, headerTitle,
};
