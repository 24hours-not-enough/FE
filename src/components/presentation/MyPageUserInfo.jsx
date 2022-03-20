import { memo } from 'react';

function MyPageUserInfo({ handleRouter }) {
  return (
    <div className="flex flex-row justify-between mt-6">
      <div
        role="button"
        tabIndex={0}
        onClick={handleRouter('/mypage/profile')}
        className="flex justify-center items-center ml-5"
      >
        <div className="w-16 h-16 rounded-full bg-black" />
        <h1 className="ml-4">닉네임</h1>
      </div>
      <div className="flex justify-center items-center mr-5">
        <img alt="아이콘1" />
        <img alt="아이콘2" />
      </div>
    </div>
  );
}

export default memo(MyPageUserInfo);
