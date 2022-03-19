/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-new */
import { useRef, useEffect, useState } from 'react';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';
import MainFeedTab from '../../components/presentation/MainFeedTab';
import MainPutLocationTab from '../../components/presentation/MainPutLocationTab';
import { dataMap, dataTriplan } from '../../mock/main';

export default function Main() {
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const [isFeedTab, setIsFeedTab] = useState(false);
  const [isPutLocationTab, setIsPutLocationTab] = useState(false);
  const [locationInfo, setLocationInfo] = useState(null);

  const mapOptions = {
    center: new window.kakao.maps.LatLng(37.566, 126.9786), // 처음 뜨는 주소 어떻게 할지
    level: 3,
  };

  useEffect(() => {
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    const position = map.getCenter();
    console.log(position);

    dataMap.forEach((data) => {
      const imageSrc = data.imageUrl;
      const imageSize = new window.kakao.maps.Size(64, 69);
      const imageOption = {
        alt: `${data.locationName}_${data.latitude}_${data.longitude}`,
        offset: new window.kakao.maps.Point(27, 69),
      };

      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(data.latitude, data.longitude),
        title: data.locationName,
        image: markerImage,
        clickable: true,
      });

      marker.setMap(map);
    });
    return () => {};
  }, []);

  const openLocationTab = (e) => {
    if (e.target.nodeName === 'IMG') {
      setIsFeedTab(true);
      console.log(e.target.alt.split('_'));
      const [title, latitude, longitude] = e.target.alt.split('_');
      setLocationInfo({
        title,
        latitude: Number(latitude),
        longitude: Number(longitude),
      });
    } else {
      setIsFeedTab(false);
    }
    setIsPutLocationTab(false);
  };

  const openPutLocationTab = () => {
    setIsPutLocationTab(true);
  };

  const places = new kakao.maps.services.Places();

  const searchCallback = (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      console.log(result);
    }
  };

  const searchPlace = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-useless-return
    if (searchRef.current.value === '') return;

    places.keywordSearch(searchRef.current.value, searchCallback);
  };

  return (
    <LayoutWrapper>
      <div className="w-screen h-screen">
        <Navbar />
        <form onSubmit={searchPlace} className="flex mt-[12px] mx-[20px] px-[20px] py-[11px] mb-[8px] bg-[#E7E6FE] rounded-[14px]">
          <input ref={searchRef} type="text" placeholder="가고싶은 곳을 검색해보세요!" className="flex-1 bg-[#E7E6FE] text-black text-[14px] leading-[17px]" />
          <button type="submit">검색</button>
        </form>
        <div
          ref={mapRef}
          className="w-full h-full"
          onClick={openLocationTab}
        />
        {isFeedTab && (
        <MainFeedTab
          locationInfo={locationInfo}
          openPutLocationTab={openPutLocationTab}
        />
        )}
        {
          isPutLocationTab && <MainPutLocationTab myTriplan={dataTriplan} />
        }
      </div>
      {isPutLocationTab && <div onClick={openLocationTab} className="absolute top-0 left-0 w-screen h-screen z-10 bg-gray-400 opacity-50" />}
    </LayoutWrapper>
  );
}
