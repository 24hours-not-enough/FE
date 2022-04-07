import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTokenFromSession } from '../../shared/utils';
import { logout, withdrawal } from '../../state/redux/user/userThunk';
import Navbar from '../container/Navbar';
import LayoutWrapper from './LayoutWrapper';

function MyPageSettings() {
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
      <section className="w-full h-full bg-main-background">
        <div>
          <ul className="flex flex-col ml-5">
            <section className="h-80">
              <li className="pt-[34px] text-[16px] font-bold">
                <a href="/">피드백 주기</a>
              </li>
            </section>
            <section
              style={{ borderTop: '1px solid #E8E8E8' }}
              className="border-t-1"
            >
              {isTokenInSession
        && (
        <div>
          <li>
            <button className="pt-[34px] text-[16px] font-bold" type="button" onClick={handleLogout}>로그아웃</button>
          </li>
          <li>
            <button className="pt-[34px] text-[16px] font-bold" type="button" onClick={handleWithdrawal}>회원탈퇴</button>
          </li>
        </div>
        )}
            </section>
          </ul>
        </div>
      </section>
    </LayoutWrapper>
  );
}

export default React.memo(MyPageSettings);
