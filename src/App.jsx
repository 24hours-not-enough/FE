import { Route, Routes } from 'react-router-dom';
import LoginHandler from './components/container/LoginHandler';
import AddTriplan from './pages/addTriplan/AddTriplan';
import GetUserInfo from './pages/getUserInfo/GetUserInfo';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import MyTriplan from './pages/myTriplan/MyTriplan';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/profile" element={<GetUserInfo />} />
      <Route path="/plan/create" element={<AddTriplan />} />
      <Route path="/plan/my_triplan" element={<MyTriplan />} />

      <Route path="/api/kakaologin" element={<LoginHandler />} />
      <Route path="/api/googlelogin" element={<LoginHandler />} />
    </Routes>
  );
}

export default App;
