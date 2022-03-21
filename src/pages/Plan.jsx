import { useSelector } from 'react-redux';
import Navbar from '../components/container/Navbar';
import PlanPast from '../components/container/PlanPast';
import PlanPresent from '../components/container/PlanPresent';
import Button from '../components/elements/button/Button';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _plan from '../state/redux/plan/planSelector';

function Plan() {
  const plan = useSelector(_plan);

  return (
    <LayoutWrapper>
      <Navbar title="계획">
        <button type="button">편집</button>
      </Navbar>

      <section className="mt-[30px] mx-[20px]">
        <ul className="flex flex-col gap-y-[14px] mb-[14px]">
          {plan.map((onePlan) => <PlanPresent key={plan.planId} plan={onePlan} />)}
        </ul>
        <Button
          type="decline"
          propsClassName="w-full mb-[100px]"
        >
          + 새로운 트리플랜
        </Button>
      </section>

      <section className="mx-[20px]">
        <span className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[10px]">지난 트리플랜</span>
        <ul className="flex flex-wrap gap-x-[16px] gap-y-[14px]">
          {plan.map((onePlan) => <PlanPast key={plan.planId} plan={onePlan} />)}
        </ul>
      </section>
    </LayoutWrapper>
  );
}

export default Plan;
