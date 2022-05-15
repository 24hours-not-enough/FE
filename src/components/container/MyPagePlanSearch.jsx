/* eslint-disable no-undef */
import {
  useEffect, useRef, useState,
} from 'react';
import iconSet from '../../shared/imageUrl';

function MyPagePlanSearch({ handleAddFeedDetailLoc, placeSearchTab }) {
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
  }, [searchedPlace, coordinates]);

  // 검색
  const places = new kakao.maps.services.Places();
  const searchOptions = {
    x: coordinates.longitude,
    y: coordinates.latitude,
  };

  const searchCallback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
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
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setSearchedPlace({
          locationName, latitude: y, longitude: x, name: result[0].address_name,
        });
      }
    };
    geocoder.coord2RegionCode(x, y, callback);
  };

  // 마커 클릭 시 장소 등록
  const handleClick = (e) => {
    if (e.target.nodeName === 'AREA') {
      const newCalendarDetail = {
        locationName: searchedPlace.locationName,
        latitude: Number(searchedPlace.latitude),
        longitude: Number(searchedPlace.longitude),
        placeAddress: searchedPlace.name,
      };
      handleAddFeedDetailLoc({ placeInfo: newCalendarDetail, index: placeSearchTab });
    }
  };

  return (
    <section className="absolute top-0 left-0 bg-white h-[calc(100%_-_20px)] w-full flex justify-center">
      <div className="h-full w-[90%] pt-14">
        <form
          ref={searchFormRef}
          onSubmit={searchPlace}
          className="px-7 py-[11px] flex bg-main-background rounded-[14px] z-20"
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="가고싶은 곳을 검색해보세요!"
            className="flex-1 bg-main-background text-black text-[14px] leading-[17px] z-10"
          />
          <button type="submit">
            <img src={iconSet.plan.searchIcon} alt="search" className="w-[24px] h-[24px]" />
          </button>
        </form>
        {searchedList.length > 0
        && (
        <ul className="flex flex-col gap-y-[8px] px-4 py-2 absolute top-14 left-0 z-20 w-full h-full max-h-[calc(850px_-_64px_-_32px)] overflow-y-auto scrollbar-hide bg-main-background/75">
          {searchedList.map((searched) => (
            <li
              key={searched.id}
              className="flex justify-between px-[15px] py-[5px] bg-main-background rounded-[8px]"
            >
              <div onClick={() =>
                handleShowInMap({
                  x: searched.x,
                  y: searched.y,
                  locationName: searched.place_name,
                  placeId: `k${searched.id}`,
                })}
              >
                <h6 className="text-[1rem] font-[600]">{searched.place_name}</h6>
                <span className="text-[0.7rem]">{searched.road_address_name}</span>
              </div>
              <a href={searched.place_url} className="bg-kakao px-[8px] py-[3px] rounded-[8px] w-fit h-fit text-[12px] font-[500]">카카오맵에서 보기</a>
            </li>
          ))}
        </ul>
        )}
        <div ref={mapRef} className="w-full h-[90%] z-10" onClick={handleClick} />
      </div>
    </section>
  );
}

export default MyPagePlanSearch;
