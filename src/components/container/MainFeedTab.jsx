/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import iconSet from '../../shared/imageUrl';
import { addBookmark, addPlace } from '../../state/redux/place/placeThunk';
import { _bookmark } from '../../state/redux/user/userSelector';

function MainFeedTab({ userInfo, feedTabData, openTriplanTab }) {
  const bookmark = useSelector(_bookmark);

  const [address, setAddress] = useState(null);
  const [isSpread, setIsSpread] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    placeId, locationName, latitude, longitude, feedPerLocations,
  } = feedTabData[0];

  const tabStyle = isSpread ? 'h-[calc(100vh_-_10px)] overflow-y-auto scrollbar-hide' : 'max-h-[calc(50vh)]';

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

  // isSpread false
  useEffect(() => {
    setIsSpread(false);
  }, []);

  const toggleIsSpread = () => {
    isSpread ? setIsSpread(false) : setIsSpread(true);
  };

  const putPlaceToBookmark = () => {
    if (!userInfo) {
      alert('로그인 후 이용해주세요');
      return;
    }
    if (bookmark.length > 0
      && bookmark.filter((oneBookmark) => oneBookmark.placeId === placeId).length >= 1) {
      alert('이미 북마크 된 장소입니다.');
      return;
    }

    if (feedPerLocations.length <= 0) {
      const placeData = {
        name: locationName,
        latitude,
        longitude,
        placeAddress: address,
      };

      dispatch(addPlace({ placeData }));
    } else {
      dispatch(addBookmark(placeId));
    }
  };

  const handleOpenTriplanTab = (data) => {
    if (!userInfo) {
      alert('로그인 후 이용해주세요');
      return;
    }
    openTriplanTab(data);
  };

  // const goToFeedPage = (feed) => {
  //   navigate(`/feed/${placeId}/${feed.feedId}`, { state: { feed, locationName } });
  // };

  return (
    <section className={`absolute transition-all duration-300 ease-out bottom-0 left-0 z-10 bg-white w-full rounded-t-[30px] ${tabStyle}`}>
      <h5 className="text-[18px] font-[600] leading-[22px] px-[30px] pt-[30px]">{locationName}</h5>
      <span className="text-[12px] text-gray-400 leading-[14px] px-[30px]">{address}</span>
      <section className="flex w-full h-72 flex-wrap gap-x-1 gap-y-1 mt-[26px] mx-1 overflow-y-auto scrollbar-hide">
        {feedPerLocations.map((feed) => (
          <div className="relative w-[calc((100%_-_16px)_/_3)] pb-[calc((100%_-_16px)_/_3)] h-0 rounded-lg" key={feed.feedId}>
            <img
              src={feed.images[0].imgUrl}
              alt={feed.memo}
              className="absolute w-full h-full rounded-lg"
              // onClick={() => goToFeedPage(feed)}
            />
          </div>
        ))}
      </section>
      <div className="absolute top-[26px] right-[24px] flex items-center">
        <button
          type="button"
          className="w-[40px] h-[40px] bg-main-background rounded-full"
          onClick={putPlaceToBookmark}
        >
          <img
            src={iconSet.mainFeedTab.bookmarkIcon}
            alt="bookmark"
            className="w-[18px] h-[18px] mx-auto"
          />
        </button>
        <button
          type="button"
          onClick={() => handleOpenTriplanTab(feedTabData)}
          className="ml-[22px] w-[40px] h-[40px]"
        >
          <img
            src={iconSet.mainFeedTab.menuIcon}
            alt="menu"
            className="inline-block h-[18px] m-auto"
          />
        </button>
      </div>
      <button
        type="button"
        onClick={toggleIsSpread}
        className="absolute top-[8px] left-1/2 -translate-x-1/2 p-2"
      >
        <img src={iconSet.mainFeedTab.spreadIcon} alt="spread button" />
      </button>
    </section>
  );
}

export default MainFeedTab;
