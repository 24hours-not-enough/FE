import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restoreMyTriplan } from '../../state/redux/plan/plan';
import { _myDeleted } from '../../state/redux/plan/planSelectors';
import Button from '../elements/button';
import MyDeletedCard from '../presentation/MyDeletedCard';

function MyDeleted() {
  const myDeleted = useSelector(_myDeleted);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const showDeletedCard = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const restorePlan = (plan) => {
    console.log(`삭제된 plan 복구: ${plan.plan_id}`);
    dispatch(restoreMyTriplan(plan.plan_id));
  };

  return (
    <>
      <Button type="decline" onClick={showDeletedCard}>
        <span>최근 삭제된 계획</span>
        <span>▿</span>
      </Button>
      <ul>
        {isOpen && myDeleted.map((plan) =>
          <MyDeletedCard key={plan.plan_id} plan={plan} handleClick={restorePlan} />)}
      </ul>
    </>
  );
}

export default MyDeleted;
