/* eslint-disable camelcase */
import Button from '../elements/button';

function MyDeletedCard({ plan, handleClick }) {
  const { title } = plan;

  return (
    <li className="flex justify-between align-baseline">
      <span>{title}</span>
      <Button type="text" onClick={() => handleClick(plan)}>복구</Button>
    </li>
  );
}

export default MyDeletedCard;
