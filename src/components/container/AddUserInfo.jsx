/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import UserApi from '../../state/data/userApi';
import { pushUserInfo } from '../../state/redux/user/user';
import ProfileForm from '../presentation/ProfileForm';

function AddUserInfo() {
  const nicknameRef = useRef();
  const fileRef = useRef();
  const [preview, setPreview] = useState('/images/profile_default.jpg');
  const dispatch = useDispatch();
  const location = useLocation();

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

    if (nickname === '') {
      alert('닉네임을 입력해주세요');
      return;
    }

    const userInfo = { username: nickname };

    userApi.checkDuplication({ userInfo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nickname = nicknameRef.current.value;
    const profileImage = fileRef.current.files.length > 0 ? fileRef.current.files[0] : '';

    if (nickname === '') {
      alert('닉네임을 입력해주세요');
      return;
    }

    const userFormData = new FormData();
    userFormData.append('file', profileImage);
    userFormData.append('username', nickname);

    dispatch(pushUserInfo({ email: location.state, userInfo: userFormData }));
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
    />
  );
}

export default AddUserInfo;
