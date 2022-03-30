import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import { getTokenFromSession } from '../shared/utils';
import { logout, withdrawal } from '../state/redux/user/userThunk';

function Setting() {
  const isTokenInSession = getTokenFromSession('accessToken');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout({ navigate }));
  };

  const handleWithdrawal = () => {
    dispatch(withdrawal({ navigate }));
  };

  return (
    <LayoutWrapper>
      <Navbar title="설정" back />
      {isTokenInSession
      && (
      <section className="flex flex-col items-start">
        <button type="button" onClick={handleLogout}>로그아웃</button>
        <button type="button" onClick={handleWithdrawal}>회원탈퇴</button>
      </section>
      )}
    </LayoutWrapper>
  );
}

export default Setting;
