/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './profileForm.module.css';
import { kakaoSignIn } from '../../../state/redux/user/user';

function ProfileForm(prop) {
  const nicknameRef = useRef();
  const fileRef = useRef();
  const [preview, setPreview] = useState('/images/profile_default.jpg');
  const dispatch = useDispatch();
  const { code } = prop;

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

    const userInfo = { nickname };

    dispatch(checkDuplication({ userInfo }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nickname = nicknameRef.current.value;
    const profileImage = fileRef.current.files.length > 0 ? fileRef.current.files[0] : '';

    if (nickname === '') {
      alert('닉네임을 입력해주세요');
      return;
    }

    const userInfo = { nickname, file: profileImage };

    dispatch(kakaoSignIn({ userInfo, code }));
  };

  return (
    <>
      <div onClick={handleSelectFile}>
        <img className={styles.userImg} src={preview} alt="user profile" />
      </div>
      <input ref={fileRef} onChange={selectProfile} type="file" accept="image/*" style={{ display: 'none' }} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="닉네임">닉네임</label>
        <div className={styles.input}>
          <input ref={nicknameRef} type="text" placeholder="숫자, 영어, 한글을 조합하여 2~8글자로 입력해주세요!" />
          <button type="button" onClick={checkDuplication}>중복 확인</button>
        </div>
        <span className={styles.description}>숫자, 영어, 한글을 조합하여 2-8글자로 입력해주세요!</span>
        <button className={styles.submitBtn} type="submit">완료</button>
      </form>
    </>
  );
}

ProfileForm.PropTyles = {
  code: PropTypes.string,
};

export default ProfileForm;
