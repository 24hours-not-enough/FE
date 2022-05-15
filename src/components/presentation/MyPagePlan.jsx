/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import { memo } from 'react';

import FeedDetailList from './FeedDetailList';
import Calendar from '../elements/calendar/Calendar';
import iconSet from '../../shared/imageUrl';
import MyPagePlanSearch from '../container/MyPagePlanSearch';

function MyPagePlan({
  myFeed,
  feedInfo,
  startDateRef,
  endDateRef,
  placeSearchTab,
  setPlaceSearchTab,
  handleFocusFeedDetailNumber,
  handleFocusFeedNumber,
  handleChangeFeedTitle,
  handleChangePlace,
  handleChangeComment,
  handleChangeImageFile,
  handleAddFeedDetail,
  handleAddFeedDetailLoc,
  handleChangeTitle,
  handleGetFeedId,
}) {
  return (
    <div className="p-5 mx-auto">
      <div className="flex justify-between">
        <select>
          {myFeed.map(({ title, feedId }) => (
            <option
              onClick={handleGetFeedId({ feedId })}
              key={feedId}
            >
              {title}
            </option>
          ))}
        </select>
        <Calendar
          travelStartRef={startDateRef}
          travelEndRef={endDateRef}
        />
      </div>
      <input
        onChange={handleChangeTitle}
        placeholder={feedInfo.day ? feedInfo.day : '제목을 입력하세요'}
        className="bg-white w-full my-4 pl-4 h-12 rounded-xl"
      />
      {feedInfo.map(({ feedDetailLoc, day }, index) => (
        <div
          role="button"
          tabIndex={0}
          onClick={handleFocusFeedNumber({ key: index })}
          className="bg-white h-full p-5 pb-5 my-4 rounded-xl"
        >
          <div className="border-b pb-3 mb-5">
            <input onChange={handleChangeFeedTitle} className="text-black" placeholder={day} type="text" />
          </div>
          {feedDetailLoc.length > 0 && feedDetailLoc.map(({ feedDetailLocImg }, num) => (
            <FeedDetailList
              key={num}
              onChangePlace={handleChangePlace}
              feedDetailLocImg={feedDetailLocImg}
              handleChangeImageFile={handleChangeImageFile}
              onChangeComment={handleChangeComment}
              onClick={handleFocusFeedDetailNumber}
              index={num}
            />
          ))}
          <button onClick={() => setPlaceSearchTab(index)} type="button" className="relative -top-3 left-5 text-main">
            장소 추가하기
          </button>
        </div>
      ))}
      <div
        role="button"
        onClick={handleAddFeedDetail}
        tabIndex={0}
        className="grid place-items-center h-12 bg-white rounded-xl"
      >
        <img src={iconSet.myPage.plusIcon} alt="+" />
      </div>
      {
        placeSearchTab != null
        && (
        <MyPagePlanSearch
          placeSearchTab={placeSearchTab}
          handleAddFeedDetailLoc={handleAddFeedDetailLoc}
        />
        )
      }
    </div>
  );
}

export default memo(MyPagePlan);
