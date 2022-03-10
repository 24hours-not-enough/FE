import React, { useRef } from 'react';
import Navbar from '../../../components/container/navbar/Navbar';
import styles from './login.module.css';

function Login() {
  const kakaoClientId = '090db84601698ec1838ac04fd493ef89';
  const kakaoRedirectUri = 'http://localhost:3000/oauth/callback/kakao';
  const googleCliendId = '907858032063-rlttpr7cjsapanf02cvks3am68sqhjgi.apps.googleusercontent.com';

  return (
    <>
      <Navbar />
      <div className={styles.buttons}>
        <a className={styles.kakao} href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code`}>
          <img src="/images/kakao_login.png" alt="kakao login" />
        </a>
        <button className={styles.google} type="button">구글로 로그인</button>
      </div>
    </>
  );
}

export default Login;
