import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMyTriplan } from '../../state/redux/plan/plan';
import { _myPast } from '../../state/redux/plan/planSelectors';
import MyPastCard from '../presentation/MyPastCard';

function MyPast() {
  const planList = useSelector(_myPast);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageState = document.location.href.split('/plan')[1];
  const isEdit = pageState !== '/my_triplan';

  const goToUpdate = (plan) => {
    pageState === '/my_triplan' && navigate(`/plan/update/${plan.plan_id}`);
  };

  const handleDelete = (plan) => {
    dispatch(deleteMyTriplan(plan.plan_id));
  };

  return (
    <ul className="flex flex-wrap">
      {planList.map((plan) => (
        <MyPastCard
          key={plan.plan_id}
          plan={plan}
          goToUpdate={goToUpdate}
          handleDelete={handleDelete}
          isEdit={isEdit}
        />
      ))}
    </ul>
  );
}

export default MyPast;
