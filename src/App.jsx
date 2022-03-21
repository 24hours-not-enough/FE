import { Route, Routes } from 'react-router-dom';
import LoginHandler from './components/container/LoginHandler';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Plan from './pages/Plan';
import PlanCreate from './pages/PlanCreate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage/*" element={<MyPage />} />
      <Route path="/feed/:feedId" element={<Feed />} />
      <Route path="/plan" element={<Plan />} />
      <Route path="/plan/create" element={<PlanCreate />} />
      <Route path="/plan/edit" element={<Plan />} />

      <Route path="/api/kakaologin" element={<LoginHandler />} />
      <Route path="/api/googlelogin" element={<LoginHandler />} />
    </Routes>
  );
}

export default App;
