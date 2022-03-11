import { Route, Routes } from 'react-router-dom';
import KakaoHandler from './pages/kakaoHandler/KakaoHandler';
import GetUserInfo from './pages/login/GetUserInfo/GetUserInfo';
import Login from './pages/login/Login/Login';
import Main from './pages/main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/profile" element={<GetUserInfo />} />

      <Route path="/oauth/callback/kakao" element={<KakaoHandler />} />
    </Routes>
  );
}

export default App;
