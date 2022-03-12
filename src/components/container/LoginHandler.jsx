import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../presentation/Loading';
import { kakaoLogin, googleLogin } from '../../state/redux/user/user';

function LoginHandler(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const { pathname } = new URL(window.location.href);

    pathname === '/api/kakaologin'
      ? dispatch(kakaoLogin({ code, navigate }))
      : dispatch(googleLogin({ code, navigate }));
  });

  return <Loading />;
}

export default LoginHandler;
