/* eslint-disable no-undef */
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

function Main() {
  const place = useSelector(_place);
  const mapRef = useRef();
  const searchRef = useRef();
  const searchFormRef = useRef();
  const [isFeedTab, setIsFeedTab] = useState(false);
  const [isTriplanTab, setIsTriplanTab] = useState(false);
  const [feedTabData, setFeedTabData] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const dispatch = useDispatch();
  let bounds;
  let map;

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
    });
  });

  // 지도, 지도 위 마커 표시
  useEffect(async () => {
    showMap(37.566, 126.9786);
  }, []);

  useEffect(() => {
    place.forEach((onePlace) => {
      const {
        placeId, latitude, longitude, locationName, feedPerLocations,
      } = onePlace;

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
    });
  }, [dispatch, place]);

  // 검색 - 검색 결과 설정 필요, 결과 표시하는 거 필요
  const places = new kakao.maps.services.Places();
  const searchCallback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
    }
  };
  const searchPlace = (e) => {
    e.preventDefault();
    if (searchRef.current.value === '') return;
    places.keywordSearch(searchRef.current.value, searchCallback);

    searchFormRef.current.reset();
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
  const openTriplanTab = (pId) => {
    setIsFeedTab(false);
    setIsTriplanTab(true);
    setSelectedPlace(pId); // placeId
  };

  return (
    <LayoutWrapper overflow="hide">
      <Navbar title="로고" />
      <form
        ref={searchFormRef}
        onSubmit={searchPlace}
        className="flex mx-[20px] px-[20px] py-[11px] mb-[8px] bg-[#E7E6FE] rounded-[14px]"
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="가고싶은 곳을 검색해보세요!"
          className="flex-1 bg-[#E7E6FE] text-black text-[14px] leading-[17px]"
        />
        <button type="button">검색</button>
      </form>
      <div
        ref={mapRef}
        className="w-full h-full absolute left-0 top-0 z-0"
        onClick={openFeedTab}
      />
      {isFeedTab && (
      <MainFeedTab
        feedTabData={feedTabData}
        openTriplanTab={openTriplanTab}
      />
      )}
      {isTriplanTab && (
      <MainTriplanTab
        selectedPlaceId={selectedPlace}
        setIsTriplanTab={setIsTriplanTab}
      />
      )}
    </LayoutWrapper>
  );
}

export default Main;
