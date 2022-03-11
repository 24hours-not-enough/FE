import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/container/loading/Loading';

function KakaoHandler(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    navigate('/login/profile', { state: code });
  });

  return <Loading />;
}

export default KakaoHandler;
