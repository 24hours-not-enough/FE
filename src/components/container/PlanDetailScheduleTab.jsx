import { useEffect, useRef } from 'react';
import iconSet from '../../shared/imageUrl';
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

  useEffect(() => {
    if (tabState.mode === UPDATE) {
      memoRef.current.value = tabState.calendar.locationMemo;
    }
  }, []);

  // 일정 추가하기 완료
  const handleAddClick = () => {
    let calendarDetailsData;
    const memo = memoRef.current.value;

    if (memo === '' && !tabState.added) {
      alert('장소 또는 메모를 입력해주세요');
      return;
    }

    if (tabState.added) {
      const { locationName, latitude, longitude } = tabState.added;
      calendarDetailsData = {
        calendarDetailsId: new Date().getTime().toString(),
        locationName,
        locationMemo: memo,
        latitude,
        longitude,
        sort: calendar.calendarDetails.length,
      };
    } else {
      calendarDetailsData = {
        calendarDetailsId: new Date().getTime().toString(),
        location: null,
        locationName: null,
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

    handleUpdateSchedule({ mode: ADD, updated: updatedCalendarData });
  };

  // 일정 수정하기 완료
  const handleUpdateClick = () => {
    let calendarDetailsData;
    const memo = memoRef.current.value;

    if (memo === '' && (!tabState.added && !calendar.locationName)) {
      return;
    }

    if (tabState.added) {
      const { locationName, latitude, longitude } = tabState.added;
      calendarDetailsData = {
        ...calendar,
        locationName,
        locationMemo: memo,
        latitude,
        longitude,
      };
    } else {
      calendarDetailsData = {
        ...calendar,
        locationMemo: memo,
      };
    }

    handleUpdateSchedule({
      mode: UPDATE,
      calendarId: calendar.calendarId,
      updated: calendarDetailsData,
    });
  };

  const searchPlace = () => {
    setOnSearchMap(true);
  };

  return (
    <BottomTab closeTab={() => setTabState(null)}>
      <div className="flex flex-col items-start">
        <div className=" flex mb-[30px]">
          {mode === ADD
          && (
          <span className="mr-[12px]">
            {(mode === ADD && tabState.added) ? tabState.added.locationName : '장소 추가하기'}
          </span>
          )}
          {mode === UPDATE
          && (
          <span className="mr-[12px] font-bold">
            {(mode === UPDATE && tabState.calendar.locationName) ? tabState.calendar.locationName : '장소 추가하기'}
          </span>
          )}
          <button type="button" onClick={searchPlace}>
            <img src={iconSet.plan.chooseIcon} alt="장소 선택" />
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
        onClick={tabState.mode === ADD ? handleAddClick : handleUpdateClick}
      >
        완료
      </button>
    </BottomTab>
  );
}

export default PlanDetailScheduleTab;
