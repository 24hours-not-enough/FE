import {
  useEffect, useRef, useState,
} from 'react';

function MyPageBookmark({
  bookmarkInfo,
}) {
  const mapRef = useRef();
  const [tabState, setTabState] = useState({ state: null });

  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566, 126.9786),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    const forBoundList = [];

    bookmarkInfo.length > 0
    && bookmarkInfo.forEach((bookmark) => {
      let marker;
      const {
        placeId, latitude, longitude, placeName, feedDetailLoc,
      } = bookmark;

      if (feedDetailLoc.length > 0) {
        const imageSrc = feedDetailLoc[0].images[0].imgUrl;
        const imageSize = new window.kakao.maps.Size(64, 69);
        const imageOption = {
          alt: `${placeName}_${placeId}`,
          offset: new window.kakao.maps.Point(27, 69),
        };

        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(latitude, longitude),
          title: placeName,
          image: markerImage,
          clickable: true,
        });
      } else {
        marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(latitude, longitude),
          title: placeName,
          clickable: true,
        });
      }

      forBoundList.push(new window.kakao.maps.LatLng(latitude, longitude));
      marker.setMap(map);
    });

    const bounds = new window.kakao.maps.LatLngBounds();
    forBoundList.forEach((place) => bounds.extend(place));
    map.setBounds(bounds);
  });

  const openMenuTab = () => {
    setTabState({ state: 'menu' });
  };

  return (
    <>
      <div
        ref={mapRef}
        className="w-full h-full absolute left-0 top-0"
        onClick={openMenuTab}
      />
      {/* {
      tabState.state === 'menu' && <div className="absolute top-0 left-0 z-50">메뉴탭</div>
    } */}
    </>
  );
}

export default MyPageBookmark;
