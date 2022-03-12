const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
const kakaoRedirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const googleCliendId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

const kakaoCodeUri = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code`;
const googleCodeUri = `https://accounts.google.com/o/oauth2/v2/auth?scope=email&redirect_uri=${googleRedirectUri}&response_type=code&client_id=${googleCliendId}`;

export { kakaoCodeUri, googleCodeUri };
