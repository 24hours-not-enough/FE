/* eslint-disable no-undef */
import { debounce } from 'lodash';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainFeedTab from '../components/container/MainFeedTab';
import MainTriplanTab from '../components/container/MainTriplanTab';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _place from '../state/redux/place/placeSelector';
import { getPlace } from '../state/redux/place/placeThunk';
import { _userInfo } from '../state/redux/user/userSelector';

function Main() {
  const place = useSelector(_place);
  const userInfo = useSelector(_userInfo);

  const mapRef = useRef();
  const searchRef = useRef();
  const searchFormRef = useRef();

  const [isFeedTab, setIsFeedTab] = useState(false);
  const [isTriplanTab, setIsTriplanTab] = useState(false);
  const [feedTabData, setFeedTabData] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [coordinates, setCoordinates] = useState({ latitude: 37.566, longitude: 126.9786 });
  const [onSearch, setOnSearch] = useState(false);
  const [searchedList, setSearchedList] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const dispatch = useDispatch();

  let bounds;
  let map;

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 300);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showMap = useCallback((mapX, mapY) => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(mapX, mapY),
      level: 3,
    };
    map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    bounds = map.getBounds();
    const {
      qa, pa, ha, oa,
    } = bounds;

    dispatch(getPlace({
      x1: qa, x2: pa, y1: ha, y2: oa,
    }));

    place.forEach((onePlace) => {
      const {
        placeId, latitude, longitude, locationName, feedPerLocations,
      } = onePlace;

      if (feedPerLocations.length > 0) {
        const imageSrc = feedPerLocations[0].images[0].imgUrl;
        const imageSize = new window.kakao.maps.Size(64, 69);
        const imageOption = {
          alt: `${locationName}_${placeId}`,
          offset: new window.kakao.maps.Point(27, 69),
        };

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(latitude, longitude),
          title: locationName,
          image: markerImage,
          clickable: true,
        });

        marker.setMap(map);
      }

      // const content = `<img src=${feedPerLocations[0].images[0].imgUrl}
      // alt="${locationName}_${placeId}" className="w-[12px] h-[12px] rounded-full" />`;
      // const position = new kakao.maps.LatLng(latitude, longitude);
      // const customOverlay = new kakao.maps.CustomOverlay({
      //   position,
      //   content,
      //   clickable: true,
      // });

      // customOverlay.setMap(map);
    });
  });

  // 지도, 지도 위 마커 표시
  useEffect(() => {
    showMap(coordinates.latitude, coordinates.longitude);
  }, [windowSize, coordinates]);

  useEffect(() => {
    place.forEach((onePlace) => {
      const {
        placeId, latitude, longitude, locationName, feedPerLocations,
      } = onePlace;

      if (feedPerLocations.length > 0) {
        const imageSrc = feedPerLocations[0].images[0].imgUrl;
        const imageSize = new window.kakao.maps.Size(64, 69);
        const imageOption = {
          alt: `${locationName}_${placeId}`,
          offset: new window.kakao.maps.Point(27, 69),
        };

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(latitude, longitude),
          title: locationName,
          image: markerImage,
          clickable: true,
        });

        marker.setMap(map);
      }

      // const content = `<img src=${feedPerLocations[0].images[0].imgUrl}
      // alt="${locationName}_${placeId}" className="w-[12px] h-[12px] rounded-full" />`;
      // const position = new kakao.maps.LatLng(latitude, longitude);
      // const customOverlay = new kakao.maps.CustomOverlay({
      //   position,
      //   content,
      //   clickable: true,
      // });

      // customOverlay.setMap(map);
    });
  }, [dispatch, place]);

  // 검색 - 검색 결과 설정 필요, 결과 표시하는 거 필요
  const places = new kakao.maps.services.Places();
  const searchOptions = {
    x: coordinates.longitude,
    y: coordinates.latitude,
  };

  const searchCallback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
      setOnSearch(true);
      setSearchedList(result);
    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
      alert('검색 결과가 존재하지 않습니다.');
    } else if (status === kakao.maps.services.Status.ERROR) {
      alert('검색 결과 중 오류가 발생했습니다.');
    }
  };

  const searchPlace = (e) => {
    e.preventDefault();
    if (searchRef.current.value === '') return;
    places.keywordSearch(searchRef.current.value, searchCallback, searchOptions);

    searchFormRef.current.reset();
  };

  // 검색 후 장소 클릭
  const handleShowInMap = ({
    x, y, locationName, placeId,
  }) => {
    setCoordinates({ latitude: Number(y), longitude: Number(x) });
    setOnSearch(false);

    const placeData = place
      .filter((onePlace) =>
        onePlace.latitude === coordinates.latitude && onePlace.longitude === coordinates.longitude)
      .lenght;
    setFeedTabData(placeData > 0
      ? placeData
      : [{
        placeId, latitude: y, longitude: x, locationName, feedPerLocations: [],
      }]);
    setIsFeedTab(true);
  };

  // 마커 클릭 시 피드탭 open
  const openFeedTab = (e) => {
    if (e.target.nodeName === 'IMG') {
      setIsFeedTab(true);
      const pId = Number(e.target.alt.split('_')[1]);
      const placeData = place.filter((data) => data.placeId === pId);
      setFeedTabData(placeData);
    } else {
      setIsFeedTab(false);
      setIsTriplanTab(false);
    }
  };

  // 내 트리플랜에 담기 탭 open
  const openTriplanTab = (feedData) => {
    if (!userInfo) {
      alert('로그인 후 이용해주세요');
      return;
    }
    setIsFeedTab(false);
    setIsTriplanTab(true);
    setSelectedPlace(feedData);
  };

  return (
    <LayoutWrapper>
      <div className="sticky z-10 bg-white">
        <Navbar title="로고" />
        <form
          ref={searchFormRef}
          onSubmit={searchPlace}
          className="flex mx-[20px] px-[20px] py-[11px] mb-[8px] bg-[#E7E6FE] rounded-[14px] z-10"
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="가고싶은 곳을 검색해보세요!"
            className="flex-1 bg-[#E7E6FE] text-black text-[14px] leading-[17px]"
          />
          <button type="submit">검색</button>
        </form>
        <ul className="flex flex-col gap-y-[8px] px-[15px] mt-[30px]">
          {onSearch
        && searchedList.map((searched) => (
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
      </div>
      <div
        ref={mapRef}
        className="w-full h-full absolute left-0 top-0"
        onClick={openFeedTab}
      />
      {isFeedTab && (
      <MainFeedTab
        userInfo={userInfo}
        feedTabData={feedTabData}
        openTriplanTab={openTriplanTab}
      />
      )}
      {isTriplanTab && (
      <MainTriplanTab
        selectedPlace={selectedPlace}
        setIsTriplanTab={setIsTriplanTab}
      />
      )}
    </LayoutWrapper>
  );
}

export default Main;
