import { Route, Routes } from 'react-router-dom';
import LoginHandler from './components/container/LoginHandler';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Main from './pages/Main';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage/*" element={<MyPage />} />
      <Route path="/feed/:feedId" element={<Feed />} />

      <Route path="/api/kakaologin" element={<LoginHandler />} />
      <Route path="/api/googlelogin" element={<LoginHandler />} />
    </Routes>
  );
}

export default App;
