const checkNickname = (nickname) => {
  const nicknameRegExp = /^[a-zA-Z0-9가-힣]{2,8}$/;
  return nicknameRegExp.test(nickname);
};

const setTokenToSession = (token) => {
  sessionStorage.setItem('token', token);
};

export { checkNickname, setTokenToSession };
