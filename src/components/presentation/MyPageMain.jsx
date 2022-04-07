import { memo } from 'react';
import iconSet from '../../shared/imageUrl';

function MyPageMain({ handleRouter, userInfo, myFeed }) {
  const { userName, userProfileImage } = userInfo;
  if (!myFeed) return null;
  return (
    <>
      <div className="flex flex-row justify-between mt-6">
        <div
          role="button"
          tabIndex={0}
          onClick={handleRouter('/mypage/profile')}
          className="flex justify-center items-center ml-5"
        >
          <img alt="유저이미지" src={userProfileImage} className="w-16 h-16 rounded-full bg-main" />
          <h1 className="text-xl ml-4">
            {userName}
          </h1>
        </div>
        <div className="flex justify-center items-center mr-5">
          <div
            style={{ backgroundColor: '#E7E6FE' }}
            className="grid place-items-center w-10 h-10 rounded-full mr-5"
          >
            <img className="w-5 h-5" alt="아이콘1" src={iconSet.myPage.rectangleIcon} />
          </div>
          <div
            style={{ backgroundColor: '#E7E6FE' }}
            className="grid place-items-center w-10 h-10 rounded-full"
            role="button"
            tabIndex={0}
            onClick={handleRouter('/mypage/mylike-feeds')}
          >
            <img
              className="w-6 h-6"
              src={iconSet.myPage.heartIcon}
              alt="아이콘2"
            />
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: '#E7E6FE' }}
        className="w-10 h-10 ml-5 mt-10 rounded-full text-center text-2xl text-main leading-10"
        role="button"
        tabIndex={0}
        onClick={handleRouter('/mypage/plan')}
      >
        +
      </div>
      {myFeed.map(({
        title, travelStart, travelEnd, feedId,
      }) => (
        <div key={feedId} className="flex flex-col justify-center my-5 mx-3 bg-white rounded-lg">
          <div className="w-88 mx-auto">
            <div className="flex justify-between my-2">
              <span>{title}</span>
              <span>{`${travelStart.split('T')[0]} ~ ${travelEnd.split('T')[0]}`}</span>
            </div>
            <div className="my-3">
              {/* <FeedImage /> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(MyPageMain);
