import { useRef } from 'react';
import Navbar from '../../../components/container/navbar/Navbar';
import styles from './login.module.css';

function Login() {
  const kakaoClientId = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const kakaoRedirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const googleCliendId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const googleRedirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  console.log(kakaoClientId);
  console.log(kakaoRedirectUri);
  console.log(googleCliendId);
  console.log(googleRedirectUri);

  return (
    <>
      <Navbar />
      <div className={styles.buttons}>
        <a className={styles.kakao} href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code`}>
          <img src="/images/kakao_login.png" alt="kakao login" />
        </a>
        <a className={styles.kakao} href={`https://accounts.google.com/o/oauth2/v2/auth?scope=email&redirect_uri=${googleRedirectUri}}&response_type=code&client_id=${googleCliendId}`}>
          google login
        </a>
      </div>
    </>
  );
}

export default Login;
