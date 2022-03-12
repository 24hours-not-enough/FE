// 닉네임 형식 체크
const checkNickname = (nickname) => {
  const nicknameRegExp = /^[a-zA-Z0-9가-힣]{2,8}$/;
  return nicknameRegExp.test(nickname);
};

export default checkNickname;
