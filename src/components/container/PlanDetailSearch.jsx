/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPlace } from '../../state/redux/place/placeThunk';

function PlanDetailSearch({
  tabState,
  setTabState,
}) {
  const mapRef = useRef();
  const searchRef = useRef();
  const searchFormRef = useRef();
  const dispatch = useDispatch();

  const [savedState, setSavedState] = useState();
  const [searchedList, setSearchedList] = useState([]);
  const [coordinates, setCoordinates] = useState({ latitude: 37.566, longitude: 126.9786 });

  useEffect(() => {
    setSavedState({ ...tabState });
    setTabState(null);
  }, []);

  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566, 126.9786),
      level: 5,
    };

    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    const bounds = map.getBounds();

    const {
      qa, pa, ha, oa,
    } = bounds;

    dispatch(getPlace({
      x1: qa, x2: pa, y1: ha, y2: oa,
    }));
  }, []);

  // 검색 - 검색 결과 설정 필요, 결과 표시하는 거 필요
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

  console.log(savedState);

  return (
    <section className="absolute top-[55px] left-0 bg-white h-full w-full">
      <form
        ref={searchFormRef}
        onSubmit={searchPlace}
        className="px-[20px] py-[11px] flex bg-main-background rounded-[14px] mx-[20px] mb-[8px]"
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="가고싶은 곳을 검색해보세요!"
          className="flex-1 bg-main-background text-black text-[14px] leading-[17px]"
        />
        <button type="submit">
          <img src="/images/searchIcon_purple.png" alt="search" className="w-[24px] h-[24px]" />
        </button>
      </form>
      <ul className="w-screen h-fit">
        {searchedList.lenght > 0
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
      <div ref={mapRef} className="absolute w-screen h-screen" />
    </section>

  );
}

export default PlanDetailSearch;
