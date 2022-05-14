import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MobileView from './components/presentation/MobileView';
import InviteHandler from './components/container/InviteHandler';
import LoginHandler from './components/container/LoginHandler';
import MyPageSettings from './components/presentation/MyPageSettings';

import { getTokenFromSession } from './shared/utils';
import { _userInfo } from './state/redux/user/userSelector';
import { getUser } from './state/redux/user/userThunk';
import ErrorBoundary from './shared/ErrorBoundary';
import Loading from './components/presentation/Loading';

const Main = lazy(() => import('./pages/Main'));
const Login = lazy(() => import('./pages/Login'));
const LoginProfile = lazy(() => import('./pages/LoginProfile'));
const Feed = lazy(() => import('./pages/Feed'));
const MyPage = lazy(() => import('./pages/MyPage'));
const Plan = lazy(() => import('./pages/Plan'));
const PlanCreate = lazy(() => import('./pages/PlanCreate'));
const PlanDetailNew = lazy(() => import('./pages/PlanDetailNew'));

function App() {
  const userInfo = useSelector(_userInfo);
  const isTokenInSession = getTokenFromSession('accessToken');

  const dispatch = useDispatch();

  useEffect(() => {
    if (isTokenInSession && !userInfo.userName) {
      dispatch(getUser());
    }
  }, []);

  useEffect(() => {
    if (isTokenInSession && !userInfo.userName) {
      dispatch(getUser());
    }
  }, [isTokenInSession, userInfo]);

  return (
    <ErrorBoundary fallback={<Loading />}>
      <Suspense fallback={<Loading />}>
        <MobileView>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/profile" element={<LoginProfile />} />
            <Route path="/mypage/*" element={<MyPage />} />
            <Route path="/mypage/settings" element={<MyPageSettings />} />
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
        </MobileView>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
