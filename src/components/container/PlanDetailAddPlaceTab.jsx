import { useEffect, useRef } from 'react';

const ADD = 'add';
const UPDATE = 'update';

function PlanDetailAddPlaceTab({ onUpdateTab, setOnUpdateTab, handleAddSchedule }) {
  const memoRef = useRef();
  const title = onUpdateTab.type === ADD ? '장소 추가하기' : onUpdateTab.place.locationName;

  useEffect(() => {
    if (onUpdateTab.type === UPDATE) {
      memoRef.current.value = onUpdateTab.place.locationMemo;
    }
  }, []);

  const handleAddPlan = () => {
    if (memoRef.current.value === '') {
      return;
    }
    console.log(memoRef.current.value);
    console.log(onUpdateTab);
    const added = {
      locationMemo: memoRef.current.value,
    };
    handleAddSchedule({ added, calendarId: onUpdateTab.calendarId });
    // 추가하기 통신
    setOnUpdateTab(false);
  };

  return (
    <>
      <div className="flex flex-col items-start">
        <div className=" flex mb-[30px]">
          <span className="mr-[12px]">{title}</span>
          <button type="button">
            <img src="/images/chooseIcon.png" alt="select place" />
          </button>
        </div>
        <input
          ref={memoRef}
          type="text"
          placeholder="메모쓰기"
          className="w-full"
        />
      </div>
      <button
        type="button"
        className="absolute right-[30px] top-[30px]"
        onClick={handleAddPlan}
      >
        완료
      </button>
    </>
  );
}

export default PlanDetailAddPlaceTab;
