/* eslint-disable react/no-array-index-key */
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FeedContent from '../components/container/FeedContent';
import Navbar from '../components/container/Navbar';
import LayoutWrapper from '../components/presentation/LayoutWrapper';
import { _userInfo } from '../state/redux/user/userSelector';

function Feed() {
  const userInfo = useSelector(_userInfo);
  const location = useLocation();
  console.log(userInfo);

  const { feed, placeName } = location.state;
  const {
    images, like,
  } = feed;
  console.log(feed, placeName);

  const isLike = like.filter((user) => user.userId === Number(userInfo.userId)).length >= 1;
  console.log(like);
  console.log(userInfo.userId);
  console.log(isLike);
  const likeStyle = isLike ? 'text-red-600' : '';

  return (
    <LayoutWrapper>
      <Navbar title={placeName} back />
      <div className="flex w-fit overflow-x-hidden">
        {images.map((image, idx) => (
          <div key={idx} className="relative w-screen h-[calc(100vw)] bg-[#A0A0A0]">
            <img
              src={image}
              alt={placeName}
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
