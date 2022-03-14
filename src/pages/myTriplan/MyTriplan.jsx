import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyTriplanList from '../../components/container/MyTriplanList';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';
import { getMyTriplanList } from '../../state/redux/plan/plan';

function MyTriplan() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyTriplanList());
  }, []);

  return (
    <LayoutWrapper>
      <Navbar />
      <MyTriplanList />
    </LayoutWrapper>
  );
}

export default MyTriplan;
