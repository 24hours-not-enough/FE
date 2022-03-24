import LoginProfileForm from '../components/container/LoginProfileForm';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';

function LoginProfile() {
  return (
    <LayoutWrapper>
      <Navbar />
      <LoginProfileForm />
    </LayoutWrapper>
  );
}

export default LoginProfile;
