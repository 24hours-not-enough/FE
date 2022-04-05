import { memo } from 'react';
import Button from '../elements/button/Button';

function MyPageProfile({
  userInfo,
  onChange,
  checkDuplication,
  profileImgPreview,
  profileImgRef,
  handleCheckDuplication,
  handleProfileImgUpload,
  handleSubmitProfile,
}) {
  const { userName, userProfileImage } = userInfo;
  const handleSelectFile = () => {
    profileImgRef.current.click();
  };
  return (
    <div>
      <div className="grid place-content-center h-60">
        <img
          role="presentation"
          onClick={handleSelectFile}
          className="w-24 h-24 bg-slate-500 rounded-full"
          alt="프로필이미지"
          src={profileImgPreview || userProfileImage}
        />
        <input ref={profileImgRef} onChange={handleProfileImgUpload} id="profileImg" type="file" accept="image/*" style={{ display: 'none' }} />
      </div>
      <div className="mx-5">
        <span>닉네임</span>
        <div className="flex justify-between items-center h-12 rounded-xl bg-white">
          <input className="pl-5 border-none" placeholder={userName} onChange={onChange} />
          <button className="mr-5 text-main" onClick={handleCheckDuplication} type="button">중복 확인</button>
        </div>
        <span className={checkDuplication.color === 'blue'
          ? 'text-xs text-blue-500 mb-8 block h-[17px]'
          : 'text-xs text-red-500 mb-8 block h-[17px]'}
        >
          {checkDuplication.value}
        </span>
        <Button onClick={handleSubmitProfile} type={checkDuplication.checked ? 'main' : 'none'} propsClassName="w-full mt-5">수정 적용하기</Button>
      </div>
    </div>
  );
}

export default memo(MyPageProfile);
