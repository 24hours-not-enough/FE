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
        <div className="border-b pb-3">
          <h1 className="font-bold">1 일차</h1>
        </div>
        <div className="w-80 h-40 mt-5">
          <div
            style={{
              width: '10px', height: '10px', top: '-5px', left: '-5px',
            }}
            className="relative bg-main rounded-full"
          />
          <div
            // style={{ position: 'relative', top: '80px', left: '-80px' }}
            className="relative top-20 -left-20 border-2 border-dashed w-40 rotate-90"
          />
          <ul className="relative -top-7 left-4">
            <h1>장소 추가하기</h1>
            <div className="bg-main-background w-20 h-20 rounded-xl" />
            <input placeholder="자유롭게 기록해보세요" />
          </ul>
        </div>
        <div className="w-80 h-40 mt-5">
          <div
            style={{
              width: '10px', height: '10px', top: '-5px', left: '-5px',
            }}
            className="relative bg-main rounded-full"
          />
          <div
            // style={{ position: 'relative', top: '80px', left: '-80px' }}
            className="relative top-20 -left-20 border-2 border-dashed w-40 rotate-90"
          />
          <ul className="relative -top-7 left-4">
            <h1>장소 추가하기</h1>
            <div className="bg-main-background w-20 h-20 rounded-xl" />
            <input placeholder="자유롭게 기록해보세요" />
          </ul>
        </div>
      </div>
      <div className="grid place-items-center h-12 bg-white rounded-xl">
        <img className="" alt="+" />
      </div>
    </div>
  );
}

export default memo(MyPagePlan);
