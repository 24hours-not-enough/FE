import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import Button from '../components/elements/button/Button';
import { googleCodeUri, kakaoCodeUri } from '../shared/loginVar';

function Login() {
  const buttonShape = 'w-[350px] h-[58px]';
  return (
    <LayoutWrapper>
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center">
          <a href={kakaoCodeUri}>
            <Button type="kakao" propsClassName={`${buttonShape} mb-[16px]`}>카카오톡으로 로그인</Button>
          </a>
          <a href={googleCodeUri}>
            <Button type="google" propsClassName={buttonShape}>구글로 로그인</Button>
          </a>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default Login;
