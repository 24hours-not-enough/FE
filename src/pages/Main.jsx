/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import MainFeedTab from '../components/container/MainFeedTab';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _place from '../state/redux/place/placeSelector';

// 카카오맵 options : 중심 좌표, 확대레벨 초기설정값
const mapOptions = {
  center: new window.kakao.maps.LatLng(37.566, 126.9786),
  level: 3,
};

function Main() {
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const searchFormRef = useRef(null);
  const [isPlaceTab, setIsPlaceTab] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const [placeInfo, setPlaceInfo] = useState(null);

  const placeData = useSelector(_place);

  useEffect(() => {
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);

    const position = map.getCenter();
    console.log(position);

    placeData.forEach((place) => {
      const {
        latitude, longitude, placeName, feeds,
      } = place;

      const imageSrc = feeds[0].images[0];
      const imageSize = new window.kakao.maps.Size(64, 69);
      const imageOption = {
        alt: `${placeName}_${latitude}_${longitude}`,
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

  const places = new window.kakao.maps.services.Places();
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

  const openPlaceTab = (e) => {
    if (e.target.nodeName === 'IMG') {
      const [title, latitude, longitude] = e.target.alt.split('_');
      setIsPlaceTab(true);
      setPlaceInfo({
        title,
        latitude,
        longitude,
      });
    } else {
      setIsPlaceTab(false);
    }
  };

  return (
    <LayoutWrapper>
      <Navbar />
      <div className="bg-white pt-[12px] px-[20px] pb-[8px] w-screen z-10 absolute">
        <form
          ref={searchFormRef}
          onSubmit={searchPlace}
          className="flex px-[20px] py-[11px] bg-[#E7E6FE] rounded-[14px] z-10"
        >
          <input
            ref={searchRef}
            type="text"
            placeholder="가고싶은 곳을 검색해보세요!"
            className="flex-1 bg-[#E7E6FE] text-black text-[14px] leading-[17px]"
          />
          <button type="submit">검색</button>
        </form>
      </div>
      <div
        ref={mapRef}
        className="w-full h-full fixed top-0 left-0"
        onClick={openPlaceTab}
      />
      {isPlaceTab && <MainFeedTab />}
    </LayoutWrapper>
  );
}

export default Main;
