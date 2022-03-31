/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FeedContent from '../components/container/FeedContent';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import _place from '../state/redux/place/placeSelector';
import { _userInfo } from '../state/redux/user/userSelector';

function Feed() {
  const userInfo = useSelector(_userInfo);
  const place = useSelector(_place);
  const param = useParams();

  let isLike;

  const { feedPerLocations, locationName } = place
    .filter((onePlace) => onePlace.placeId === Number(param.placeId))[0];
  const feed = feedPerLocations.filter((oneFeed) => oneFeed.feedId === Number(param.feedId))[0];

  const {
    images, likedUsers,
  } = feed;

  if (!userInfo) {
    isLike = false;
  } else {
    isLike = likedUsers.filter((user) => user.userId === Number(userInfo.userId)).length >= 1;
  }
  const likeStyle = isLike ? 'text-red-600' : '';

  return (
    <LayoutWrapper overflow="hide">
      <Navbar title={locationName} back />
      <div className="flex w-fit overflow-x-hidden">
        {images.map((image, idx) => (
          <div key={idx} className="relative w-screen h-[calc(100vw)] bg-[#A0A0A0]">
            <img
              src={image.imgUrl}
              alt={locationName}
              className="inline-block w-screen h-auto absolute top-1/2 left-0 -translate-y-1/2"
            />
            <button
              type="button"
              className={`absolute right-[35px] bottom-[35px] ${likeStyle}`}
            >
              하트
            </button>
          </div>
        ))}
      </div>
      <FeedContent feed={feed} userInfo={userInfo} />
    </LayoutWrapper>
  );
}

export default Feed;
