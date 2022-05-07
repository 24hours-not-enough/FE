import {
  useEffect, useRef,
} from 'react';
import iconSet from '../../shared/imageUrl';

function MyPageBookmark({
  bookmarkInfo,
}) {
  const mapRef = useRef();

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

        const content = `
        <div class="w-20 h-22 bg-main relative customMarker">
          <img src="${imageSrc}" alt="${placeName}_${placeId}" class="absolute top-1 left-1 w-[72px] h-[72px] rounded-3xl"/>
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
          <div class="w-20 h-22 bg-main relative customMarker">
            <img src="${iconSet.logo}" alt="${placeName}_${placeId}" class="absolute top-1 left-1 w-[72px] h-[72px] rounded-3xl"/>
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
  });

  return (
    <div
      ref={mapRef}
      className="w-full h-full absolute left-0 top-0"
    />
  );
}

export default MyPageBookmark;
