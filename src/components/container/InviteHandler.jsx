import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { linkByInviteURL } from '../../state/redux/plan/planThunk';
import Loading from '../presentation/Loading';
import { getTokenFromSession } from '../../shared/utils';

function InviteHandler() {
  const isLogin = getTokenFromSession('accessToken');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const { roomId } = param;

  useEffect(() => {
    if (isLogin) {
      dispatch(linkByInviteURL({ roomId, navigate }));
    } else {
      alert('로그인 후 링크를 입력해주세요');
      navigate('/login');
    }
  }, []);

  return <Loading />;
}

export default InviteHandler;
