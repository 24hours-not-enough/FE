/* eslint-disable react/no-array-index-key */
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
            role="button"
            tabIndex={0}
            onClick={handleRouter('/mypage/mybookmarks')}
          >
            <img className="w-5 h-5" alt="아이콘1" src={iconSet.myPage.rectangleIcon} />
          </div>
          {/* <div
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
          </div> */}
        </div>
      </div>
      <div
        style={{ backgroundColor: '#E7E6FE' }}
        className="w-10 h-10 ml-5 mt-10 rounded-full flex justify-center items-center"
        role="button"
        tabIndex={0}
        onClick={handleRouter('/mypage/plan')}
      >
        <img src={iconSet.myPage.plusIcon} alt="피드 추가하기" className="w-[14px] h-[14px]" />
      </div>
      {myFeed.map((feed) => {
        const {
          title, travelStart, travelEnd, feedId,
        } = feed;
        return (
          <div key={feedId} className="flex flex-col justify-center my-5 mx-3 bg-white rounded-lg">
            <div className="w-88 mx-auto">
              <div className="flex justify-between my-2">
                <span className="text-[12px] leading-[16px] text-white font-[550] bg-main px-[8px] py-[5px] rounded-[8px]">{title}</span>
                <span className="flex justify-center items-center text-[12px] leading-[16px] font-[550]">
                  <img src="/images/calendarIcon.png" alt="icon" className="w-[12px] h-[12px] mr-[7px]" />
                  {`${travelStart.split('T')[0]} - ${travelEnd.split('T')[0]}`}
                </span>
              </div>
              <div className="my-3 flex flex-wrap justify-start gap-[4px]">
                {feed.images.map((image, idx) =>
                  <img key={idx} src={image} alt="피드사진" className="w-[80px] h-[80px] rounded-[10px]" />)}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default memo(MyPageMain);
