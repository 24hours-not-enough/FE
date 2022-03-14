import { useSelector } from 'react-redux';
import { _myplans } from '../../state/redux/plan/planSelectors';
import Button from '../elements/button';
import MyPresentCard from '../presentation/MyPresentCard';

function MyPresent() {
  const planList = useSelector(_myplans);

  return (
    <>
      <ul>
        {planList.map((plan) =>
          <MyPresentCard key={plan.plan_id} plan={plan} />)}
      </ul>
      <Button type="decline" propsClassName="px-4 mx-2">+ 새로운 트리플랜</Button>
    </>
  );
}

export default MyPresent;
