import LoginProfileForm from '../components/container/LoginProfileForm';
import Navbar from '../components/container/Navbar';

function LoginProfile() {
  return (
    <>
      <Navbar title="프로필 설정" back />
      <LoginProfileForm />
    </>
  );
}

export default LoginProfile;
