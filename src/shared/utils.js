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

export {
  checkNickname, setTokenToSession, getTokenFromSession, changeDate,
};
