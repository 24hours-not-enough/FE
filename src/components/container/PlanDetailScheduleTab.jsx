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
    let calendarDetailsData;
    const memo = memoRef.current.value;

    if (memo === '' && !tabState.added) {
      return;
    }

    if (tabState.added) {
      const { locationName, latitude, longitude } = tabState.added;
      calendarDetailsData = {
        calendarDetailsId: new Date().getTime().toString(),
        location: locationName,
        // locationName,
        locationMemo: memo,
        latitude,
        longitude,
        sort: calendar.calendarDetails.length,
      };
    } else {
      calendarDetailsData = {
        calendarDetailsId: new Date().getTime().toString(),
        location: null,
        // locationName: null,
        locationMemo: memo,
        latitude: null,
        longitude: null,
        sort: calendar.calendarDetails.length,
      };
    }

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
            {(mode === ADD && tabState.added) ? tabState.added.locationName : '장소 추가하기'}
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
