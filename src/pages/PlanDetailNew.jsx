import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import _plan from '../state/redux/plan/planSelector';
import { addDaysAxios, updatePlanDetailAxios } from '../state/redux/plan/planThunk';

import LayoutWrapper from '../components/presentation/LayoutWrapper';
import Navbar from '../components/container/Navbar';
import PlanDetailPlan from '../components/container/PlanDetailPlan';
import PlanDetailMap2 from '../components/container/PlanDetailMap2';
import PlanDetailChat from '../components/container/PlanDetailChat';
import PlanDetailScheduleTab from '../components/container/PlanDetailScheduleTab';
import PlanDetailMenuTab2 from '../components/container/PlanDetailMenuTab2';
import PlanDetailSearch from '../components/container/PlanDetailSearch';

const PLAN = 'plan';
const CHAT = 'chat';
const MAP = 'map';
const EDIT = 'edit';
const MENU = 'menu';
const SCHEDULE = 'schedule';

const toggleOnBtnStyle = 'bg-white rounded-[14px] px-[40px] py-[6px] text-[14px] leading-[17px] text-[#393FDC] font-[600]';
const toggleOffBtnStyle = 'rounded-[14px] px-[40px] py-[6px] text-[14px] leading-[17px] text-white font-[600]';

function PlanDetailNew() {
  const plan = useSelector(_plan);
  const param = useParams();
  const dispatch = useDispatch();

  const [viewState, setViewState] = useState(PLAN);
  const [planDetails, setPlanDetails] = useState(null);
  const [tabState, setTabState] = useState(null);
  const [onSearchMap, setOnSearchMap] = useState(false);

  const planId = Number(param.planId);

  useEffect(() => {
    const planDetailInfo = plan.filter((onePlan) => onePlan.planId === planId)[0];
    setPlanDetails(planDetailInfo);
  }, [plan]);

  // 계획, 채팅 view toggle
  const toggleViewState = () => {
    (viewState === PLAN || viewState === MAP || viewState === EDIT)
      ? setViewState(CHAT)
      : setViewState(PLAN);
  };

  // 계획 글, 지도 view toggle
  const toggleMapViewState = () => {
    (viewState === PLAN || viewState === EDIT) ? setViewState(MAP) : setViewState(PLAN);
  };

  // 계획 편집 상태 toggle
  const toggleEditState = () => {
    if (viewState === EDIT) {
      dispatch(updatePlanDetailAxios({ planId, planDetailData: planDetails }));
      setViewState(PLAN);
    } else {
      setViewState(EDIT);
    }
  };

  // tab 상태
  const toggleTabState = (state) => {
    setTabState(state);
  };

  // 일차 추가하기
  const handleAddCalendar = () => {
    dispatch(addDaysAxios(planId));
  };

  // 일정 추가하기
  const handleUpdateSchedule = (data) => {
    console.log(data);
    const updatedPlanDetailsCalendars = planDetails.calendars.map((calendar) => {
      if (calendar.calendarId === data.calendarId) {
        return { ...data };
      }
      return calendar;
    });
    setPlanDetails({ ...planDetails, calendars: updatedPlanDetailsCalendars });
    setTabState(null);
  };

  console.log(planDetails);

  if (planDetails) {
    return (
      <div className="overflow-auto scrollbar-hide">
        <LayoutWrapper>
          <Navbar title={planDetails.title}>
            <button type="button" onClick={() => setTabState({ state: MENU })}>
              <img src="/images/menuIcon_black.png" alt="menu" className="w-[24px] h-[24px]" />
            </button>
          </Navbar>

          <div className="bg-main px-[30px] pt-[20px] pb-[10px] flex flex-col">
            <div className="flex mb-[20px]">
              {planDetails.members.map((member) => (
                <img
                  key={member.userId}
                  src={member.userProfileImage}
                  alt={member.userName}
                  className="w-[22px] h-[22px] rounded-full"
                />
              ))}
            </div>
            <span className="text-[12px] text-white leading-[14px] font-[600] mb-[35px]">
              {`${planDetails.travelDestination}, ${moment(planDetails.travelStart).format('MMM DD')} - ${moment(planDetails.travelEnd).format('MMM DD')}`}
            </span>
            <button
              type="button"
              className="bg-[#393FDC] px-[3px] py-[5px] w-fit h-fit rounded-[14px] mb-[30px] self-center"
              onClick={toggleViewState}
            >
              <span className={(viewState === PLAN || viewState === EDIT || viewState === MAP)
                ? toggleOnBtnStyle : toggleOffBtnStyle}
              >
                계획
              </span>
              <span className={viewState === CHAT
                ? toggleOnBtnStyle : toggleOffBtnStyle}
              >
                채팅
              </span>
            </button>
          </div>

          <section className="bg-main-background w-screen rounded-t-[20px] px-[20px] pt-[20px] -translate-y-[20px]">
            {(viewState === PLAN || viewState === EDIT) && (
            <PlanDetailPlan
              viewState={viewState}
              tabState={tabState}
              setTabState={setTabState}
              toggleMapViewState={toggleMapViewState}
              toggleEditState={toggleEditState}
              toggleTabState={toggleTabState}
              calendars={planDetails.calendars}
              handleAddCalendar={handleAddCalendar}
              handleUpdateSchedule={handleUpdateSchedule}
            />
            )}
            {viewState === MAP && (
            <PlanDetailMap2
              toggleMapViewState={toggleMapViewState}
              toggleEditState={toggleEditState}
              calendars={planDetails.calendars}
            />
            )}
            {viewState === CHAT && <PlanDetailChat />}
          </section>

          {(tabState && tabState.state === SCHEDULE)
            && (
            <PlanDetailScheduleTab
              handleUpdateSchedule={handleUpdateSchedule}
              tabState={tabState}
              setTabState={setTabState}
              setOnSearchMap={setOnSearchMap}
            />
            )}
          {(tabState && tabState.state === MENU)
          && (
          <PlanDetailMenuTab2
            setTabState={setTabState}
          />
          )}
          {onSearchMap
          && (
          <PlanDetailSearch
            tabState={tabState}
            setTabState={setTabState}
          />
          )}
        </LayoutWrapper>
      </div>
    );
  }
  return null;
}

export default PlanDetailNew;