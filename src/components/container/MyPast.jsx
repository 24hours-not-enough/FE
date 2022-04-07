import { useSelector } from 'react-redux';
import { _myPast } from '../../state/redux/plan/planSelectors';
import MyPastCard from '../presentation/MyPastCard';

function MyPast() {
  const planList = useSelector(_myPast);

  return (
    <ul className="flex flex-wrap">
      {planList.map((plan) =>
        <MyPastCard key={plan.plan_id} plan={plan} />)}
    </ul>
  );
}

export default MyPast;
