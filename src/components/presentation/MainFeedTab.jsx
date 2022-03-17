/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { dataPhoto } from '../../mock/main';

function MainFeedTab({ locationInfo, openPutLocationTab }) {
  const { title, latitude, longitude } = locationInfo;
  const [addressName, setAddressName] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const photoTabStyle = isOpen
    ? 'absolute transition-all duration-300 ease-out overflow-y-hidden w-full h-[calc(100vh_-_10px)] left-0 bottom-0 z-10 bg-white rounded-t-[30px] p-[30px]'
    : 'absolute transition-all duration-300 ease-out overflow-y-hidden w-full h-[290px] left-0 bottom-0 z-10 bg-white rounded-t-[30px] p-[30px]';

  useEffect(() => {
    const geocoder = new window.kakao.maps.services.Geocoder();

    const callback = (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddressName(result[0].address_name);
      }
    };

    geocoder.coord2RegionCode(longitude, latitude, callback);
  }, []);

  const togglePhotoTab = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const handleClickMenu = () => {
    setIsOpen(false);
    openPutLocationTab();
  };

  return (
    <section className={photoTabStyle}>
      <h5 className="text-[18px] font-[600] leading-[22px]">{title}</h5>
      <span className="text-[12px] text-gray-400 leading-[14px]">{addressName}</span>
      <ul className="mt-[27px] flex flex-wrap">
        {dataPhoto.map((photo) => (
          <li key={photo.id} className="flex w-1/3 p-[2px]">
            <img
              className="rounded-[10px]"
              src={photo.url}
              alt={title}
            />
          </li>
        ))}
      </ul>
      <div className="absolute top-[26px] right-[24px]">
        <button className="ml-[22px]" type="button">북마크</button>
        <button className="ml-[22px]" type="button" onClick={handleClickMenu}>메뉴탭</button>
      </div>
      <button onClick={togglePhotoTab} className="absolute top-[8px] left-1/2 -translate-x-1/2" type="button">스크롤아이콘</button>
    </section>
  );
}

export default MainFeedTab;
