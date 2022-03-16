import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMyTriplan } from '../../state/redux/plan/plan';
import { _myPresent } from '../../state/redux/plan/planSelectors';
import Button from '../elements/button';
import MyPresentCard from '../presentation/MyPresentCard';

function MyPresent() {
  const planList = useSelector(_myPresent);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageState = document.location.href.split('/plan')[1];

  const openCardMenu = (plan) => {
    console.log(`카드 메뉴 열기: ${plan.plan_id}`);
  };

  const deleteCard = (plan) => {
    console.log(`카드 삭제: ${plan.plan_id}`);
    dispatch(deleteMyTriplan(plan.plan_id));
  };

  const buttonSet = pageState === '/my_triplan'
    ? { buttonTitle: '더보기', handleClick: openCardMenu }
    : { buttonTitle: '삭제', handleClick: deleteCard };

  const goToCreate = () => {
    navigate('/plan/create');
  };

  const goToUpdate = (plan) => {
    pageState === '/my_triplan' && navigate(`/plan/update/${plan.plan_id}`);
  };

  return (
    <>
      <ul>
        {planList.map((plan) => (
          <MyPresentCard
            key={plan.plan_id}
            plan={plan}
            buttonSet={buttonSet}
            goToUpdate={goToUpdate}
          />
        ))}
      </ul>
      <Button type="decline" propsClassName="px-4 mx-2" onClick={goToCreate}>+ 새로운 트리플랜</Button>
    </>
  );
}

export default MyPresent;
