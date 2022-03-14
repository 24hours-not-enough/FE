/* eslint-disable camelcase */
import Button from '../elements/button';

function MyDeletedCard({ plan }) {
  const { title, plan_id } = plan;
  const restorePlan = () => {
    console.log(`삭제된 plan 복구: ${plan_id}`);
  };

  return (
    <li className="flex justify-between align-baseline">
      <span>{title}</span>
      <Button type="text" onClick={restorePlan}>복구</Button>
    </li>
  );
}

export default MyDeletedCard;
