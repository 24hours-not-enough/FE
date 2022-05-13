/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FeedContent from '../components/container/FeedContent';
import Navbar from '../components/container/Navbar';
import { likeFeed, unlikeFeed } from '../state/redux/feed/feedThunk';
import _place from '../state/redux/place/placeSelector';
import { _userInfo } from '../state/redux/user/userSelector';

function Feed() {
  const userInfo = useSelector(_userInfo);
  const place = useSelector(_place);
  const param = useParams();
  const dispatch = useDispatch();

  const [isLike, setIsLike] = useState(false);

  const { feedPerLocations, locationName } = place
    .filter((onePlace) => onePlace.placeId === Number(param.placeId))[0];
  const feed = feedPerLocations.filter((oneFeed) => oneFeed.feedId === Number(param.feedId))[0];

  const {
    images, likedUsers,
  } = feed;

  useEffect(() => {
    if (!userInfo) {
      setIsLike(false);
    } else {
      likedUsers.filter((user) => user.userId === Number(userInfo.userId)).length >= 1
      && setIsLike(true);
    }
  }, []);

  const toggleLike = () => {
    if (isLike) {
      setIsLike(false);
      dispatch(unlikeFeed({ feedDetailLocId: feed.feedId }));
    } else {
      setIsLike(true);
      dispatch(likeFeed({ feedDetailLocId: feed.feedId }));
    }
  };

  return (
    <>
      <Navbar title={locationName} back />
      <div className="flex w-fit overflow-x-hidden">
        {images.map((image, idx) => (
          <div key={idx} className="relative w-fit h-fit bg-[#A0A0A0]">
            <img
              src={image.imgUrl}
              alt={locationName}
              className="w-[390px] h-[390px]"
            />
            <button
              type="button"
              onClick={toggleLike}
              className="absolute right-[35px] bottom-[35px] w-[34px] h-[34px] bg-white/20 rounded-full flex justify-center items-center"
            >
              {isLike ? <img src="/images/likedIcon.png" alt="좋아요 취소" className="w-[24px] h-[24px]" /> : <img src="/images/likeIcon.png" alt="좋아요" className="w-[24px] h-[24px]" />}
            </button>
          </div>
        ))}
      </div>
      <FeedContent feed={feed} userInfo={userInfo} />
    </>
  );
}

export default Feed;
