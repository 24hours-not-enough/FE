import { memo } from 'react';

import AddPlanForm from './AddPlanForm';

function MyPagePlan({
  myFeed,
  feedInfo,
  handleAddFeedDetailLoc,
  handleFocusFeedNumber,
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
        placeholder="제목을 입력하세요"
        className="bg-white w-full my-4 pl-4 h-12 rounded-xl"
      />
      <AddPlanForm
        handleFocusFeedNumber={handleFocusFeedNumber}
        feedInfo={feedInfo}
        handleAddFeedDetailLoc={handleAddFeedDetailLoc}
      />
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
