import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _place from '../state/redux/place/placeSelector';

function Main() {
  const place = useSelector(_place);
  const mapRef = useRef();

  const mapOptions = {
    center: new window.kakao.maps.LatLng(37.566, 126.9786),
    level: 3,
  };

  useEffect(() => {
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

  return (
    <LayoutWrapper>
      <Navbar title="로고" />
      <form className="flex mt-[12px] mx-[20px] px-[20px] py-[11px] mb-[8px] bg-[#E7E6FE] rounded-[14px]">
        <input type="text" placeholder="가고싶은 곳을 검색해보세요!" className="flex-1 bg-[#E7E6FE] text-black text-[14px] leading-[17px]" />
        <button type="button">검색</button>
      </form>
      <div ref={mapRef} className="w-full h-full" />
    </LayoutWrapper>
  );
}

export default Main;
