import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogin, kakaoLogin } from '../../state/redux/user/userThunk';
import Loading from '../presentation/Loading';

function LoginHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const { pathname } = new URL(window.location.href);

    pathname === '/api/kakaologin'
      ? dispatch(kakaoLogin({ code, navigate }))
      : dispatch(googleLogin({ code, navigate }));
  }, []);

  return <Loading />;
}

export default LoginHandler;
