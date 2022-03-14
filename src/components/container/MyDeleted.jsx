import { useState } from 'react';
import { useSelector } from 'react-redux';
import { _myDeleted } from '../../state/redux/plan/planSelectors';
import Button from '../elements/button';
import MyDeletedCard from '../presentation/MyDeletedCard';

function MyDeleted() {
  const myDeleted = useSelector(_myDeleted);
  console.log(myDeleted);
  const [isOpen, setIsOpen] = useState(false);
  const showDeletedCard = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Button type="decline" onClick={showDeletedCard}>
        <span>최근 삭제된 계획</span>
        <span>▿</span>
      </Button>
      <ul>
        {isOpen
      && myDeleted.map((plan) => <MyDeletedCard key={plan.plan_id} plan={plan} />)}
      </ul>
    </>
  );
}

export default MyDeleted;
