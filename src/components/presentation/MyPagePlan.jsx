/* eslint-disable react/jsx-key */
import { memo } from 'react';

import FeedDetailList from './FeedDetailList';

function MyPagePlan({
  myFeed,
  feedInfo,
  handleAddFeedDetailLoc,
  handleFocusFeedDetailNumber,
  handleFocusFeedNumber,
  handleChangeFeedTitle,
  handleChangePlace,
  handleChangeComment,
  handleAddFeedDetail,
  handleChangeTitle,
  handleGetFeedId,
}) {
  return (
    <div className="p-5 mx-auto">
      <div className="flex justify-between">
        <ul>
          {myFeed.map(({ title, feedId }) => (
            <li
              role="presentation"
              onClick={handleGetFeedId({ feedId })}
              key={feedId}
            >
              {title}
            </li>
          ))}
        </ul>
        <div>Date Picker</div>
      </div>
      <input
        onChange={handleChangeTitle}
        placeholder={feedInfo.title}
        className="bg-white w-full my-4 pl-4 h-12 rounded-xl"
      />
      {feedInfo.map(({ feedDetailLoc, title }, index) => (
        <div
          role="button"
          tabIndex={0}
          onClick={handleFocusFeedNumber({ key: index })}
          className="bg-white h-full p-5 pb-5 my-4 rounded-xl"
        >
          <div className="border-b pb-3 mb-5">
            <input onChange={handleChangeFeedTitle} className="text-black" placeholder={title} type="text" />
          </div>
          {feedDetailLoc.map((item, num) => (
            <FeedDetailList
              onChangePlace={handleChangePlace}
              onChangeComment={handleChangeComment}
              onClick={handleFocusFeedDetailNumber}
              index={num}
            />
          ))}
          <button onClick={handleAddFeedDetailLoc({ index })} type="button" className="relative -top-3 left-5 text-main">
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
        <img className="" alt="+" />
      </div>
    </div>
  );
}

export default memo(MyPagePlan);
