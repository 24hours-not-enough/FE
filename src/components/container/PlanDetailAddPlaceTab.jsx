import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';

const ADD = 'add';
const UPDATE = 'update';

function PlanDetailAddPlaceTab({ onUpdateTab, setOnUpdateTab, handleUpdateSchedule }) {
  const memoRef = useRef();
  const mapRef = useRef();
  const [onSearch, setOnSearch] = useState(false);
  let map;

  const title = (onUpdateTab.type === ADD || !onUpdateTab.place.locationName) ? '장소 추가하기' : onUpdateTab.place.locationName;

  useEffect(() => {
    if (onUpdateTab.type === UPDATE) {
      memoRef.current.value = onUpdateTab.place.locationMemo;
    }
  }, []);

  const handleAddPlan = () => {
    if (memoRef.current.value === '') {
      return;
    }

    const updated = {
      location: null,
      latitude: null,
      longitude: null,
      locationMemo: memoRef.current.value,
    };
    handleUpdateSchedule({ updated, calendarId: onUpdateTab.calendarId });
    // 추가하기 통신
    setOnUpdateTab(false);
  };

  const showMap = useCallback((mapX, mapY) => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(mapX, mapY),
      level: 3,
    };
    map = new window.kakao.maps.Map(mapRef.current, mapOptions);
  });

  const searchPlace = () => {
    setOnSearch(true);
    showMap(37.566, 126.9786);
  };

  return (
    <>
      <div className="flex flex-col items-start">
        <div className=" flex mb-[30px]">
          <span className="mr-[12px]">{title}</span>
          <button type="button" onClick={searchPlace}>
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
      {onSearch && (
      <div
        ref={mapRef}
        className="w-full h-full absolute left-0 top-0"
      />
      )}
    </>
  );
}

export default PlanDetailAddPlaceTab;
