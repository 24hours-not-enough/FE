import { memo, useState } from 'react';

function MyPagePlan() {
  const [title, setTitle] = useState(); // 기본값으로 정해진 제목들

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <span>계획에서 일정 불러오기</span>
        <div>Date Picker</div>
      </div>
      <input
        onChange={handleChangeTitle}
        placeholder="제목을 입력하세요"
        className="bg-white w-full my-4 pl-4 h-12 rounded-xl"
      />
      <div className="bg-white h-full p-4 my-4 rounded-xl">
        <h1>1일차</h1>
      </div>
      <div className="grid place-items-center h-12 bg-white rounded-xl">
        <img className="" alt="+" />
      </div>
    </div>
  );
}

export default memo(MyPagePlan);
