import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
import PlanDeleted from '../components/container/PlanDeleted';
import PlanEditOneTab from '../components/container/PlanEditOneTab';
import PlanPast from '../components/container/PlanPast';
import PlanPresent from '../components/container/PlanPresent';
import Button from '../components/elements/button/Button';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _plan from '../state/redux/plan/planSelector';

function Plan() {
  const plan = useSelector(_plan);
  const [presentList, setPresentList] = useState([]);
  const [pastList, setPastList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const [isEditMenu, setIsEditMenu] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isEditPage, setIsEditPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date().toISOString();
    const present = [];
    const past = [];
    const deleted = [];
    plan.forEach((onePlan) => {
      if (onePlan.isDeleted) {
        deleted.push(onePlan);
      } else if (onePlan.travelEnd < now) {
        past.push(onePlan);
      } else {
        present.push(onePlan);
      }
    });
    setPresentList(present);
    setPastList(past);
    setDeletedList(deleted);
  }, [plan]);

  useEffect(() => {
    new URL(window.location.href).pathname === '/plan'
      ? setIsEditPage(false)
      : setIsEditPage(true);
  }, [isEditPage]);

  const openEditMenu = (planInfo) => {
    setSelectedPlan(planInfo);
    setIsEditMenu(true);
  };

  const deletePlan = (planId) => {
    console.log(`계획 삭제 : ${planId}`);
  };

  const goToPlanPage = () => {
    setIsEditPage(false);
    navigate('/plan');
  };
  const goToEditPage = () => {
    setIsEditPage(true);
    navigate('/plan/edit', { replace: true });
  };
  const goToCreatePage = () => {
    navigate('/plan/create');
  };

  return (
    <LayoutWrapper>
      <Navbar title="계획">
        {isEditPage
          ? <button type="button" onClick={goToPlanPage}>완료</button>
          : <button type="button" onClick={goToEditPage}>편집</button>}
      </Navbar>

      <section className="mt-[30px] mx-[20px]">
        <ul className="flex flex-col gap-y-[14px] mb-[14px]">
          {presentList.map((onePlan) => (
            <PlanPresent
              key={plan.planId}
              plan={onePlan}
              openEditMenu={openEditMenu}
              isEditPage={isEditPage}
              deletePlan={deletePlan}
            />
          ))}
        </ul>
        <Button
          type="decline"
          propsClassName="w-full"
          onClick={goToCreatePage}
        >
          + 새로운 트리플랜
        </Button>
      </section>

      {isEditPage && <PlanDeleted deletedPlan={deletedList} />}

      <section className="mx-[20px] mt-[100px]">
        <span className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[10px]">지난 트리플랜</span>
        <ul className="flex flex-wrap gap-x-[16px] gap-y-[14px]">
          {pastList.map((onePlan) => (
            <PlanPast
              key={plan.planId}
              plan={onePlan}
              openEditMenu={openEditMenu}
              isEditPage={isEditPage}
              deletePlan={deletePlan}
            />
          ))}
        </ul>
      </section>

      {isEditMenu
      && (
      <PlanEditOneTab
        selectedPlan={selectedPlan}
        setIsEditMenu={setIsEditMenu}
        deletePlan={deletePlan}
      />
      )}
    </LayoutWrapper>
  );
}

export default Plan;
