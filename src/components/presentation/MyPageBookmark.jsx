import {
  useEffect, useRef, useState,
} from 'react';
import iconSet from '../../shared/imageUrl';

import MainTriplanTab from '../container/MainTriplanTab';

function MyPageBookmark({
  bookmarkInfo,
}) {
  const mapRef = useRef();
  const [isTriplanTab, setIsTriplanTab] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const checkPlace = (e) => {
    if (e.target.nodeName === 'IMG') {
      const placeIdx = Number(e.target.alt.split('_')[2]);
      const bookmarkData = bookmarkInfo[placeIdx];
      setSelectedPlace([bookmarkData]);
      setIsTriplanTab(true);
    } else {
      setIsTriplanTab(false);
    }
  };

  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566, 126.9786),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);

    if (bookmarkInfo && bookmarkInfo.length > 0) {
      const forBoundList = [];

      bookmarkInfo.forEach((bookmark, idx) => {
        let marker;
        const {
          placeId, latitude, longitude, placeName, feedDetailLoc,
        } = bookmark;

        if (feedDetailLoc.length > 0) {
          const imageSrc = feedDetailLoc[0].images[0].imgUrl;

          const content = `
        <div class="w-10 h-12 bg-main relative customMarker">
          <img src="${imageSrc}" alt="${placeName}_${placeId}_${idx}" title="${placeName}" class="absolute top-1 left-0.5 w-9 h-9 rounded-2xl"/>
        </div>
        `;

          marker = new window.kakao.maps.CustomOverlay({
            position: new window.kakao.maps.LatLng(latitude, longitude),
            content,
          });
        } else {
          marker = new window.kakao.maps.CustomOverlay({
            position: new window.kakao.maps.LatLng(latitude, longitude),
            content: `
          <div class="w-10 h-12 bg-main relative customMarker">
            <img src="${iconSet.logo}" alt="${placeName}_${placeId}_${idx}" title="${placeName}" class="absolute top-1 left-0.5 w-9 h-9 rounded-2xl"/>
        </div>
          `,
          });
        }

        forBoundList.push(new window.kakao.maps.LatLng(latitude, longitude));
        marker.setMap(map);
      });

      const bounds = new window.kakao.maps.LatLngBounds();
      forBoundList.forEach((place) => bounds.extend(place));
      map.setBounds(bounds);
    }
  }, []);

  return (
    <>
      <div
        ref={mapRef}
        className="w-full h-full absolute left-0 top-0"
        onClick={checkPlace}
      />
      {isTriplanTab && (
      <MainTriplanTab
        selectedPlace={selectedPlace}
        setIsTriplanTab={setIsTriplanTab}
      />
      )}
    </>
  );
}

export default MyPageBookmark;
