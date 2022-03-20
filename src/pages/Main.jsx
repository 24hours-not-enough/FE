/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import MainFeedTab from '../components/container/MainFeedTab';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _place from '../state/redux/place/placeSelector';

function Main() {
  const place = useSelector(_place);
  const mapRef = useRef();
  const searchRef = useRef();
  const searchFormRef = useRef();
  const [isFeedTab, setIsFeedTab] = useState(false);
  const [feedTabData, setFeedTabData] = useState(null);

  // 지도, 지도 위 마커 표시
  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566, 126.9786),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);

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
    }
  };

  return (
    <LayoutWrapper>
      <Navbar title="로고" />
      <form
        ref={searchFormRef}
        onSubmit={searchPlace}
        className="flex mt-[12px] mx-[20px] px-[20px] py-[11px] mb-[8px] bg-[#E7E6FE] rounded-[14px]"
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
        className="w-full h-full"
        onClick={openFeedTab}
      />
      {isFeedTab && <MainFeedTab feedTabData={feedTabData} />}
    </LayoutWrapper>
  );
}

export default Main;
