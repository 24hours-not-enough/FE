/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';

function PlanDetailSearch({
  tabState,
  setTabState,
  setOnSearchMap,
}) {
  const mapRef = useRef();
  const searchRef = useRef();
  const searchFormRef = useRef();

  const [coordinates, setCoordinates] = useState({ latitude: 37.566, longitude: 126.9786 });
  const [searchedList, setSearchedList] = useState([]);
  const [searchedPlace, setSearchedPlace] = useState(null);

  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(coordinates.latitude, coordinates.longitude),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);

    if (searchedPlace) {
      const markerPosition = new kakao.maps.LatLng(searchedPlace.latitude, searchedPlace.longitude);
      // eslint-disable-next-line no-unused-vars
      const marker = new kakao.maps.Marker({ map, position: markerPosition, clickable: true });
    }
  }, [coordinates]);

  // 검색
  const places = new kakao.maps.services.Places();
  const searchOptions = {
    x: coordinates.longitude,
    y: coordinates.latitude,
  };

  const searchCallback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
      setSearchedList(result);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  // 장소 검색
  const searchPlace = (e) => {
    e.preventDefault();
    if (searchRef.current.value === '') return;
    places.keywordSearch(searchRef.current.value, searchCallback, searchOptions);

    searchFormRef.current.reset();
  };

  // 장소 선택
  const handleShowInMap = ({
    x, y, locationName,
  }) => {
    setSearchedList([]);
    setCoordinates({ latitude: y, longitude: x });
    setSearchedPlace({ locationName, latitude: y, longitude: x });
  };

  // 마커 클릭 시 장소 등록
  const handleClick = (e) => {
    if (e.target.nodeName === 'AREA') {
      if (tabState.mode === 'add') {
        const newCalendarDetail = {
          locationName: searchedPlace.locationName,
          latitude: Number(searchedPlace.latitude),
          longitude: Number(searchedPlace.longitude),
        };
        console.log(newCalendarDetail);
        setTabState({ ...tabState, added: newCalendarDetail });
        setOnSearchMap(false);
      }
    }
  };

  return (
    <section className="absolute top-[55px] left-0 bg-white h-4/5 w-screen overflow-hidden flex justify-center">
      <div className="absolute top-[55px] left-0 bg-white h-4/5 w-4/5 overflow-hidden z-50 rounded-[20px] p-[10px]">
        <form
          ref={searchFormRef}
          onSubmit={searchPlace}
          className="px-[20px] py-[11px] flex bg-main-background rounded-[14px] mx-[20px] mb-[8px] z-20"
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="가고싶은 곳을 검색해보세요!"
            className="flex-1 bg-main-background text-black text-[14px] leading-[17px] z-10"
          />
          <button type="submit">
            <img src="/images/searchIcon_purple.png" alt="search" className="w-[24px] h-[24px]" />
          </button>
        </form>
        <ul className="w-full bg-white z-50 overflow-y-auto scrollbar-hide">
          {searchedList.length > 0
        && searchedList.map((searched) => (
          <li
            key={searched.id}
            className="flex justify-between"
          >
            <div onClick={() =>
              handleShowInMap({
                x: searched.x,
                y: searched.y,
                locationName: searched.place_name,
                placeId: `k${searched.id}`,
              })}
            >
              <h6 className="text-[1rem]">{searched.place_name}</h6>
              <span className="text-[0.7rem]">{searched.road_address_name}</span>
            </div>
            <a href={searched.place_url} className="border-solid border-[1px] border-gray-400 w-fit h-fit">카카오맵에서 보기</a>
          </li>
        ))}
        </ul>
        <div ref={mapRef} className="absolute w-screen h-full z-10" onClick={handleClick} />
      </div>
    </section>

  );
}

export default PlanDetailSearch;
