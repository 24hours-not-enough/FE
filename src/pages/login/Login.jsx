import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';
import { googleCodeUri, kakaoCodeUri } from '../../shared/loginVar';
import styles from './login.module.css';

function Login() {
  return (
    <LayoutWrapper>
      <Navbar />
      <div className={styles.buttons}>
        <a className={styles.kakao} href={kakaoCodeUri}>
          <img src="/images/kakao_login.png" alt="kakao login" />
        </a>
        <a className={styles.kakao} href={googleCodeUri}>
          google login
        </a>
      </div>
    </LayoutWrapper>
  );
}

export default Login;
