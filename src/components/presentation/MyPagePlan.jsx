import { memo } from 'react';

import AddPlanForm from './AddPlanForm';

function MyPagePlan({ handleChangeTitle, myFeed }) {
  const feed = myFeed[0];
  return (
    <div className="p-5 mx-auto">
      <div className="flex justify-between">
        <span>계획에서 일정 불러오기</span>
        <div>Date Picker</div>
      </div>
      <input
        onChange={handleChangeTitle}
        placeholder="제목을 입력하세요"
        className="bg-white w-full my-4 pl-4 h-12 rounded-xl"
      />
      <AddPlanForm feed={feed} />
      <div className="grid place-items-center h-12 bg-white rounded-xl">
        <img className="" alt="+" />
      </div>
    </div>
  );
}

export default memo(MyPagePlan);
