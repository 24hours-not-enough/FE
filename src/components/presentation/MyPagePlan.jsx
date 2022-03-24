import { memo } from 'react';

import AddPlanForm from './AddPlanForm';

function MyPagePlan({
  handleChangeTitle, handleGetFeedId, myFeed, myFeedId,
}) {
  const feed = myFeed.filter((v) => v.feedId === myFeedId);
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
      <AddPlanForm feed={feed[0]} />
      <div className="grid place-items-center h-12 bg-white rounded-xl">
        <img className="" alt="+" />
      </div>
    </div>
  );
}

export default memo(MyPagePlan);
