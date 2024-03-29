import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
import PlanDeleted from '../components/container/PlanDeleted';
import PlanEditOneTab from '../components/container/PlanEditOneTab';
import PlanPast from '../components/container/PlanPast';
import PlanPresent from '../components/container/PlanPresent';
import Button from '../components/elements/button/Button';
import { getTokenFromSession } from '../shared/utils';
import _plan from '../state/redux/plan/planSelector';
import {
  deletePlanPermanentlyAxios, getPlans, togglePlanDeleteState,
} from '../state/redux/plan/planThunk';
import { _userInfo } from '../state/redux/user/userSelector';

function Plan() {
  const plan = useSelector(_plan);
  const userInfo = useSelector(_userInfo);
  const [presentList, setPresentList] = useState([]);
  const [pastList, setPastList] = useState([]);
  const [deletedList, setDeletedList] = useState([]);
  const [isEditMenu, setIsEditMenu] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isEditPage, setIsEditPage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isTokenInSession = getTokenFromSession('accessToken');

  useEffect(() => {
    if (!isTokenInSession) {
      alert('로그인 후 이용해주세요');
      navigate('/');
      return;
    }
    dispatch(getPlans());
  }, []);

  useEffect(() => {
    const now = new Date().toISOString();
    const present = [];
    const past = [];
    const deleted = [];
    plan.length > 0 && plan.forEach((onePlan) => {
      if (!onePlan.delTc) {
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

  const togglePlanDelete = (planId) => {
    dispatch(togglePlanDeleteState(planId));
  };

  const deletePlanPermanently = (planId) => {
    dispatch(deletePlanPermanentlyAxios(planId));
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
  const goToPlanDetailPage = (planInfo) => {
    !isEditPage && navigate(`/plan/detail/${planInfo.planId}`, { state: planInfo });
  };

  return (
    <>
      <Navbar title="계획">
        {isEditPage
          ? <button type="button" onClick={goToPlanPage}>완료</button>
          : <button type="button" onClick={goToEditPage}>편집</button>}
      </Navbar>

      <section className="mt-[30px] mx-[20px]">
        <ul className="flex flex-col gap-y-[14px] mb-[14px]">
          {presentList.map((onePlan) => (
            <PlanPresent
              key={onePlan.planId}
              userInfo={userInfo}
              plan={onePlan}
              openEditMenu={openEditMenu}
              isEditPage={isEditPage}
              deletePlan={togglePlanDelete}
              goToPlanDetailPage={goToPlanDetailPage}
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

      {isEditPage && (
      <PlanDeleted
        deletedPlan={deletedList}
        restorePlan={togglePlanDelete}
        deletePlanPermanently={deletePlanPermanently}
      />
      )}

      <section className="mx-[20px] mt-[100px]">
        <span className="text-[12px] leading-[14px] text-[#A0A0A0] mb-[10px]">지난 트리플랜</span>
        <ul className="flex flex-wrap gap-x-[16px] gap-y-[14px] mb-5">
          {pastList.map((onePlan) => (
            <PlanPast
              key={onePlan.planId}
              userInfo={userInfo}
              plan={onePlan}
              openEditMenu={openEditMenu}
              isEditPage={isEditPage}
              deletePlan={togglePlanDelete}
              goToPlanDetailPage={goToPlanDetailPage}
            />
          ))}
        </ul>
      </section>

      {isEditMenu
      && (
      <PlanEditOneTab
        selectedPlan={selectedPlan}
        setIsEditMenu={setIsEditMenu}
        deletePlan={togglePlanDelete}
      />
      )}
    </>
  );
}

export default Plan;
