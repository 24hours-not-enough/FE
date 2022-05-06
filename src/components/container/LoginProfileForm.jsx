import {
  useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import iconSet from '../../shared/imageUrl';
import { checkNickname } from '../../shared/utils';
import UserApi from '../../state/data/userApi';
import { loginUserInfo } from '../../state/redux/user/userThunk';

function LoginProfileForm() {
  const nicknameRef = useRef();
  const fileRef = useRef();
  const [preview, setPreview] = useState(`${iconSet.navBar.myPageIcon}`);
  const [duplicationChecked, setDuplicationChecked] = useState(null);
  const [nicknameDescription, setNicknameDescription] = useState({ color: 'red', value: '' });
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const userApi = new UserApi();

  const handleSelectFile = () => {
    fileRef.current.click();
  };

  const selectProfile = () => {
    const fileReader = new FileReader();
    const file = fileRef.current.files[0];
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
    };
  };

  const checkDuplication = () => {
    const nickname = nicknameRef.current.value;

    if (nickname === '' || !checkNickname(nickname)) {
      setNicknameDescription({ color: 'red', value: '숫자, 영어, 한글을 조합하여 2-8글자로 입력해주세요!' });
      return;
    }

    const userInfo = { userName: nickname };
    userApi.checkDuplication({ tokens: location.state, userInfo })
      .then(() => {
        setNicknameDescription({ color: 'blue', value: '사용 가능한 닉네임입니다.' });
        setDuplicationChecked(true);
      })
      .catch(() => {
        setNicknameDescription({ color: 'red', value: '다른 사용자가 이미 사용중입니다.' });
        setDuplicationChecked(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nickname = nicknameRef.current.value;
    const profileImage = fileRef.current.files[0];

    if (!duplicationChecked) {
      setNicknameDescription({ color: 'red', value: '닉네임 중복 체크를 완료해주세요' });
      return;
    }

    if (!profileImage) {
      alert('프로필 이미지를 등록해주세요');
      return;
    }

    const userFormData = new FormData();
    userFormData.append('file', profileImage);
    userFormData.append('username', nickname);

    dispatch(loginUserInfo({ tokens: location.state, userInfo: userFormData, navigate }));
  };

  const nicknameDescriptionColor = nicknameDescription.color === 'blue'
    ? 'text-xs text-blue-500 mb-8'
    : 'text-xs text-red-500 mb-8';

  return (
    <>
      <div className="grid place-content-center h-60" onClick={handleSelectFile}>
        <img className="w-24 h-24 bg-slate-500 rounded-full" src={preview} alt="user profile" />
      </div>
      <input ref={fileRef} onChange={selectProfile} type="file" accept="image/*" style={{ display: 'none' }} />
      <form className="mx-5" onSubmit={handleSubmit}>
        <label className="fontSize-xs" htmlFor="닉네임">닉네임</label>
        <div className="flex justify-between items-center h-12 rounded-xl bg-white">
          <input
            ref={nicknameRef}
            className="pl-5 w-full text-[14px]"
            type="text"
            placeholder="숫자, 영어, 한글을 조합하여 2~8글자로 입력해주세요!"
          />
          <button type="button" onClick={checkDuplication}>중복 확인</button>
        </div>
        <span className={`${nicknameDescriptionColor} block h-[17px]`}>{nicknameDescription.value}</span>
        {duplicationChecked
          ? <button className="rounded-[16px] text-white h-[58px] w-full bg-main" type="submit">완료</button>
          : <button className="rounded-[16px] text-white h-[58px] w-full bg-[#DEDDE5]" disabled type="submit">완료</button>}
      </form>
    </>
  );
}

export default LoginProfileForm;
