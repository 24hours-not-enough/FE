import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { linkByInviteURL } from '../../state/redux/plan/planThunk';
import Loading from '../presentation/Loading';

function InviteHandler() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();

  const { roomId } = param;

  useEffect(() => {
    dispatch(linkByInviteURL({ roomId, navigate }));
  }, []);

  return <Loading />;
}

export default InviteHandler;
