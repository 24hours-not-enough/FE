/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';

function PlanDetailMap({ calendars, toggleStatePlan }) {
  console.log(calendars);
  const mapRef = useRef(null);

  useEffect(() => {
    let mapOptions;
    if (calendars.length > 0) {
      mapOptions = {
        center: new window.kakao.maps.LatLng(
          calendars[0].calendarDetails[0].latitude,
          calendars[0].calendarDetails[0].longitude,
        ),
        level: 5,
      };
    } else {
      mapOptions = {
        center: new window.kakao.maps.LatLng(37.566, 126.9786),
        level: 5,
      };
    }
    const map = new window.kakao.maps.Map(mapRef.current, mapOptions);
    const forLineList = {};

    calendars.forEach((calendar) => {
      const { calendarId, calendarDetails } = calendar;

      calendarDetails.forEach((onePlace) => {
        const { latitude, longitude, sort } = onePlace;
        let content;
        if (sort === 1) {
          content = `<span class="inline-block text-center w-[22px] h-[22px] rounded-full bg-main text-white">${calendarId}</span>`;
          forLineList[`${calendarId}`] = [new kakao.maps.LatLng(latitude, longitude)];
        } else {
          content = `<span class="inline-block text-center w-[22px] h-[22px] rounded-full bg-black text-white">${sort}</span>`;
          forLineList[`${calendarId}`].push(new kakao.maps.LatLng(latitude, longitude));
        }
        const position = new kakao.maps.LatLng(latitude, longitude);
        const customOverlay = new kakao.maps.CustomOverlay({
          position,
          content,
        });

        const polyline = new kakao.maps.Polyline({
          path: forLineList[`${calendarId}`],
          strokeWeight: 2,
          strokeColor: '#000',
          strokeStyle: 'dashed',
        });

        customOverlay.setMap(map);
        polyline.setMap(map);
      });
    });
    return () => {};
  }, []);

  return (
    <section className="relative w-full h-full rounded-t-[20px] px-[20px] pt-[20px] -translate-y-[20px]">
      <div ref={mapRef} className="w-full h-full absolute left-0 top-0" />
      <button
        type="button"
        onClick={toggleStatePlan}
        className="absolute left-[20px] top-[20px] z-10 bg-[#E7E6FE] text-main rounded-[14px]"
      >
        지도
      </button>
    </section>
  );
}

export default PlanDetailMap;
