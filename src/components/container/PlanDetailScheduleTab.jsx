import { useRef } from 'react';
import BottomTab from '../elements/bottomTab';

const ADD = 'add';
const UPDATE = 'update';

function PlanDetailScheduleTab({
  handleUpdateSchedule,
  tabState,
  setTabState,
  setOnSearchMap,
}) {
  const memoRef = useRef(null);

  const { mode, calendar } = tabState;

  // 일정 추가하기 완료
  const handleUpdateClick = () => {
    const memo = memoRef.current.value;

    if (memo === '') {
      return;
    }

    const calendarDetailsData = {
      calendarDetailsId: new Date().getTime().toString(),
      locationName: null,
      locationMemo: memo,
      latitude: null,
      longitude: null,
      sort: calendar.calendarDetails.length,
    };

    const updatedCalendarData = {
      ...calendar,
      calendarDetails: [...calendar.calendarDetails, calendarDetailsData],
    };

    handleUpdateSchedule(updatedCalendarData);
  };

  const searchPlace = () => {
    setOnSearchMap(true);
  };

  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <div className="flex flex-col items-start">
        <div className=" flex mb-[30px]">
          <span className="mr-[12px]">
            {mode === ADD ? '장소 추가하기' : 'tabState.calendarDetails.locationName'}
          </span>
          <button type="button" onClick={searchPlace}>
            <img src="/images/chooseIcon.png" alt="select place" />
          </button>
        </div>
        <input
          type="text"
          placeholder="메모쓰기"
          className="w-full"
          ref={memoRef}
        />
      </div>
      <button
        type="button"
        className="absolute right-[30px] top-[30px]"
        onClick={handleUpdateClick}
      >
        완료
      </button>
    </BottomTab>
  );
}

export default PlanDetailScheduleTab;
