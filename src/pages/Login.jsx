import Navbar from '../components/container/Navbar';
import Button from '../components/elements/button/Button';
import { googleCodeUri, kakaoCodeUri } from '../shared/loginVar';

const buttonShape = 'w-[350px] h-[58px]';

function Login() {
  return (
    <>
      <Navbar back title="로그인/회원가입" />
      <div className="w-full h-full flex flex-col justify-center items-center gap-y-60">
        <img src="/images/logoLogin.png" alt="로고" className="w-36 h-auto py-3" />
        <div className="flex flex-col gap-y-4">
          <Button
            type="kakao"
            propsClassName={buttonShape}
            onClick={() => window.location.replace(kakaoCodeUri)}
          >
            카카오톡으로 로그인
          </Button>
          <Button
            type="google"
            propsClassName={buttonShape}
            onClick={() => window.location.replace(googleCodeUri)}
          >
            구글로 로그인
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
