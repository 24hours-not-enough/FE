/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';
import iconSet from '../../shared/imageUrl';

function PlanDetailMap2({ toggleMapViewState, calendars }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: new window.kakao.maps.LatLng(37.566, 126.9786),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    const forLineList = {};
    const forBoundList = [];

    calendars.forEach((calendar, calendarIdx) => {
      const { calendarId, calendarDetails } = calendar;

      calendarDetails.forEach((onePlace) => {
        const { latitude, longitude, sort } = onePlace;
        let content;

        if (!latitude || !longitude) {
          return;
        }

        if (!forLineList[`${calendarId}`]) {
          content = `<span class="inline-block text-center w-[22px] h-[22px] rounded-full bg-main text-white">${calendarIdx + 1}</span>`;
          forLineList[`${calendarId}`] = [new kakao.maps.LatLng(latitude, longitude)];
          forBoundList.push(new kakao.maps.LatLng(latitude, longitude));
        } else {
          content = `<span class="inline-block text-center w-[22px] h-[22px] rounded-full bg-black text-white">${sort + 1}</span>`;
          forLineList[`${calendarId}`].push(new kakao.maps.LatLng(latitude, longitude));
          forBoundList.push(new kakao.maps.LatLng(latitude, longitude));
        }

        const position = new kakao.maps.LatLng(latitude, longitude);
        const customOverlay = new kakao.maps.CustomOverlay({
          position,
          content,
        });

        customOverlay.setMap(map);
      });

      const polyline = new kakao.maps.Polyline({
        path: forLineList[`${calendarId}`],
        strokeWeight: 2,
        strokeColor: '#000',
        strokeStyle: 'dashed',
      });

      polyline.setMap(map);
    });

    const bounds = new kakao.maps.LatLngBounds();
    forBoundList.forEach((place) => bounds.extend(place));
    map.setBounds(bounds);
  }, []);

  return (
    <>
      <div className="flex">
        <button type="button" onClick={toggleMapViewState} className="w-10 h-10 bg-[#E7E6FE] rounded-3.5 z-50">
          <img src={iconSet.plan.mapIcon} alt="글" className="w-4.5 h-4.5 mx-auto" />
        </button>
      </div>
      <div ref={mapRef} className="absolute bottom-0 left-0 w-full h-full rounded-t-[20px]" />
    </>
  );
}

export default PlanDetailMap2;
