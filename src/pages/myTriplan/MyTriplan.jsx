import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import MyTriplanList from '../../components/container/MyTriplanList';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';
import { getMyTriplanList } from '../../state/redux/plan/plan';

function MyTriplan() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageState = document.location.href.split('/plan')[1];

  useEffect(() => {
    dispatch(getMyTriplanList());
  }, []);

  const goToUpdatePage = () => {
    navigate('/plan/my_triplan/update');
  };

  const updateMyPlan = () => {
    console.log('수정된 걸로 업데이트하기');
  };

  const buttonSet = pageState === '/my_triplan'
    ? { title: '편집', buttonType: 'text', handleClick: goToUpdatePage }
    : { title: '완료', buttonType: 'text', handleClick: updateMyPlan };

  return (
    <LayoutWrapper>
      <Navbar buttonSet={buttonSet} />
      <MyTriplanList />
      <Outlet />
    </LayoutWrapper>
  );
}

export default MyTriplan;
