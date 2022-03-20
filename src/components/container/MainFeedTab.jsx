/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

function MainFeedTab({ feedTabData }) {
  const [address, setAddress] = useState(null);

  const {
    placeId, placeName, latitude, longitude, feeds,
  } = feedTabData[0];
  console.log(placeId, placeName, latitude, longitude, feeds);

  // 해당 장소의 주소 구하기
  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address_name);
      }
    };
    geocoder.coord2RegionCode(longitude, latitude, callback);
  }, []);

  return (
    <section className="absolute bottom-0 left-0 z-10 bg-white w-screen rounded-t-[30px] max-h-[calc(50vh)]">
      <h5 className="text-[18px] font-[600] leading-[22px] px-[30px] pt-[30px]">{placeName}</h5>
      <span className="text-[12px] text-gray-400 leading-[14px] px-[30px]">{address}</span>
      <div className="mt-[26px] flex flex-wrap px-[4px]">
        {feeds.map((feed) => (
          <img
            key={feed.feedId}
            src={feed.images[0]}
            alt={feed.content}
            className="flex w-1/3 h-[calc((100vw_-_12px)_/_3)] p-[2px] rounded-[10px]"
          />
        ))}
      </div>
      <div className="absolute top-[26px] right-[24px]">
        <button type="button">북마크</button>
        <button type="button" className="ml-[22px]">메뉴탭</button>
      </div>
      <button type="button" className="absolute top-[8px] left-1/2 -translate-x-1/2">spread</button>
    </section>
  );
}

export default MainFeedTab;
