import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useState } from 'react';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import PlanDetailCalendarCard from '../components/container/PlanDetailCalendarCard';
import Button from '../components/elements/button/Button';

const PLAN = 'plan';
const CHAT = 'chat';

function PlanDetail() {
  const location = useLocation();
  const [viewState, setViewState] = useState(PLAN);

  const {
    title, travelDestination, travelStart, travelEnd, members, calendars, checkList,
  } = location.state;
  const toggleOnBtnStyle = 'bg-white rounded-[14px] px-[40px] py-[6px] text-[14px] leading-[17px] text-[#393FDC] font-[600]';
  const toggleOffBtnStyle = 'rounded-[14px] px-[40px] py-[6px] text-[14px] leading-[17px] text-white font-[600]';

  const toggleState = () => {
    viewState === PLAN ? setViewState(CHAT) : setViewState(PLAN);
  };

  return (
    <LayoutWrapper>
      <Navbar title={title}>
        <button type="button">메뉴</button>
      </Navbar>
      <div className="bg-main px-[30px] pt-[20px] pb-[10px] flex flex-col">
        <div className="flex mb-[20px]">
          {members.map((member) => (
            <img
              key={member.userId}
              src={member.userProfileImage}
              alt={member.userName}
              className="w-[22px] h-[22px] rounded-full"
            />
          ))}
        </div>
        <span className="text-[12px] leading-[14px] font-[600] mb-[35px]">
          {`${travelDestination}, ${moment(travelStart).format('MMM YY')} - ${moment(travelEnd).format('MMM YY')}`}
        </span>
        <button
          type="button"
          onClick={toggleState}
          className="bg-[#393FDC] p-[3px] w-fit h-fit rounded-[12px] mb-[30px]"
        >
          <span className={viewState === PLAN ? toggleOnBtnStyle : toggleOffBtnStyle}>계획</span>
          <span className={viewState === CHAT ? toggleOnBtnStyle : toggleOffBtnStyle}>채팅</span>
        </button>
      </div>

      <section className="bg-[#F7F6FF] w-screen rounded-t-[20px] px-[20px] pt-[20px] -translate-y-[20px]">
        <div className="flex justify-between mb-[20px]">
          <button type="button">지도</button>
          <button type="button">편집</button>
        </div>

        <section className="flex flex-col gap-y-[16px]">
          {calendars.map((calendar) =>
            <PlanDetailCalendarCard key={calendar.calendarId} calendar={calendar} />)}
          <Button type="decline" propsClassName="w-full">+</Button>
        </section>

        <section className="mt-[110px] relative">
          <h5 className="text-[14px] leading-[17px] font-[600] mb-[31px]">체크리스트</h5>
          <div className="flex flex-col gap-y-[26px]">
            {checkList.map((list) => (
              <div key={list.checkListId} className="flex items-center">
                <input type="checkbox" className="w-[22px] h-[22px] mr-[12px]" />
                <span className="text-[14px] leading-[17px]">{list.checkItem}</span>
              </div>
            ))}
          </div>
          <button type="button" className="text-main text-[14px] leading-[17px] mt-[28px]">+ 추가하기</button>
          <button type="button" className="absolute top-0 right-0">수정</button>
        </section>
      </section>
    </LayoutWrapper>
  );
}

export default PlanDetail;
