import { useCallback } from 'react';
import {
  useNavigate, useLocation, Route, Routes,
} from 'react-router-dom';

import MyPagePlan from '../components/container/MyPagePlan';
import MyPageMain from '../components/container/MyPageMain';
import MyPageProfile from '../components/container/MyPageProfile';

import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';

function MyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRouter = useCallback((query) => () => {
    navigate(query);
  }, [navigate]);

  const title = () => {
    let props = {
      title: '마이페이지',
      back: false,
    };
    if (location.pathname === '/mypage/profile') {
      props = {
        title: '프로필 수정',
        back: true,
      };
    }
    if (location.pathname === '/mypage/plan') {
      props = {
        title: '새로운 게시물',
        back: true,
      };
    }
    return props;
  };

  return (
    <LayoutWrapper>
      <Navbar title={title().title} back={title().back}>
        <div>ㅎㅇㅎㅇ</div>
      </Navbar>
      <Routes>
        <Route path="" element={<MyPageMain handleRouter={handleRouter} />} />
        <Route path="/profile" element={<MyPageProfile />} />
        <Route path="/plan" element={<MyPagePlan />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default MyPage;
