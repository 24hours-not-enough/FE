import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../presentation/Loading';
import { kakaoLogin } from '../../state/redux/user/user';

function LoginHandler(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    dispatch(kakaoLogin({ code, navigate }));
  });

  return <Loading />;
}

export default LoginHandler;
