import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import InviteHandler from './components/container/InviteHandler';
import LoginHandler from './components/container/LoginHandler';
import Feed from './pages/Feed';
import Login from './pages/Login';
import LoginProfile from './pages/LoginProfile';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Plan from './pages/Plan';
import PlanCreate from './pages/PlanCreate';
import PlanDetail from './pages/PlanDetail';
import PlanDetailNew from './pages/PlanDetailNew';
import { getTokenFromSession } from './shared/utils';
import _plan from './state/redux/plan/planSelector';
import { getPlans } from './state/redux/plan/planThunk';
import { _userInfo } from './state/redux/user/userSelector';
import { getUser } from './state/redux/user/userThunk';

function App() {
  const userInfo = useSelector(_userInfo);
  const plan = useSelector(_plan);
  const isTokenInSession = getTokenFromSession('accessToken');

  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenInSession && !userInfo) {
      dispatch(getUser());
      dispatch(getPlans());
    }
  }, [isTokenInSession, userInfo]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/profile" element={<LoginProfile />} />
      <Route path="/mypage/*" element={<MyPage />} />
      <Route path="/feed/:placeId/:feedId" element={<Feed />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/plan/create" element={<PlanCreate />} />
      <Route path="/plan/update/:planId" element={<PlanCreate />} />
      <Route path="/plan/edit" element={<Plan />} />
      <Route path="/plan/detail/:planId" element={<PlanDetailNew />} />

      <Route path="/api/kakaologin" element={<LoginHandler />} />
      <Route path="/api/googlelogin" element={<LoginHandler />} />
      <Route path="/plan/invitation/:roomId" element={<InviteHandler />} />
    </Routes>
  );
}

export default App;
