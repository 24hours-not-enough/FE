/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import MainFeedTab from '../components/container/MainFeedTab';
import MainTriplanTab from '../components/container/MainTriplanTab';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import PlaceApi from '../state/data/placeApi';
import _place from '../state/redux/place/placeSelector';

const placeApi = new PlaceApi();

function Main() {
  const place = useSelector(_place);
  const mapRef = useRef();
  const searchRef = useRef();
  const searchFormRef = useRef();
  const [isFeedTab, setIsFeedTab] = useState(false);
  const [isTriplanTab, setIsTriplanTab] = useState(false);
  const [feedTabData, setFeedTabData] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  let bounds;

  // 지도, 지도 위 마커 표시
  useEffect(async () => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566, 126.9786),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    bounds = map.getBounds();
    const {
      qa, pa, ha, oa,
    } = bounds;

    await placeApi.getPlaceAxios({
      x1: qa, x2: pa, y1: ha, y2: oa,
    });

    place.forEach((onePlace) => {
      const {
        placeId, latitude, longitude, placeName, feeds,
      } = onePlace;
      const imageSrc = feeds[0].images[0];
      const imageSize = new window.kakao.maps.Size(64, 69);
      const imageOption = {
        alt: `${placeName}_${placeId}`,
        offset: new window.kakao.maps.Point(27, 69),
      };

      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(latitude, longitude),
        title: placeName,
        image: markerImage,
        clickable: true,
      });

      marker.setMap(map);
    });

    return () => {};
  }, []);

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
      console.log(placeData);
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
