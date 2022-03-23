import Button from '../elements/button/Button';

function MyPageProfile({ userInfo, onChange, onClick }) {
  const { userName, userProfileImage } = userInfo;
  return (
    <div>
      <div className="grid place-content-center h-60">
        <img
          className="w-24 h-24 bg-slate-500 rounded-full"
          alt="프로필이미지"
          src={userProfileImage}
        />
      </div>
      <div className="mx-5">
        <span>닉네임</span>
        <div className="flex justify-between items-center h-12 rounded-xl bg-white">
          <input className="pl-5" placeholder={userName} onChange={onChange} />
          <button type="button">중복확인</button>
        </div>
        <span className="text-green-300">사용 가능</span>
        <Button onClick={onClick} propsClassName="w-full mt-5">수정 적용하기</Button>
      </div>
    </div>
  );
}

export default MyPageProfile;
