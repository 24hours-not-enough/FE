/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import UserApi from '../../state/data/userApi';
import { pushUserInfo } from '../../state/redux/user/user';
import ProfileForm from '../presentation/ProfileForm';
import { checkNickname } from '../../shared/utils';

function AddUserInfo() {
  const nicknameRef = useRef();
  const fileRef = useRef();
  const [preview, setPreview] = useState('/images/profile_default.jpg');
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

    const userInfo = { username: nickname };
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
    const profileImage = fileRef.current.files.length > 0 ? fileRef.current.files[0] : '';

    if (!duplicationChecked) {
      setNicknameDescription({ color: 'red', value: '닉네임 중복 체크를 완료해주세요' });
      return;
    }

    const userFormData = new FormData();
    userFormData.append('file', profileImage);
    userFormData.append('username', nickname);

    dispatch(pushUserInfo({ tokens: location.state, userInfo: userFormData, navigate }));
  };

  return (
    <ProfileForm
      fileRef={fileRef}
      nicknameRef={nicknameRef}
      preview={preview}
      handleSelectFile={handleSelectFile}
      selectProfile={selectProfile}
      handleSubmit={handleSubmit}
      checkDuplication={checkDuplication}
      nicknameDescription={nicknameDescription}
    />
  );
}

export default AddUserInfo;
