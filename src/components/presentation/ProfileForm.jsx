/* eslint-disable jsx-a11y/click-events-have-key-events */

import styles from './profileForm.module.css';

function ProfileForm(props) {
  const {
    handleSelectFile, preview, fileRef, selectProfile, handleSubmit, nicknameRef, checkDuplication,
  } = props;

  return (
    <>
      <div onClick={handleSelectFile}>
        <img className="block w-24 rounded-full mb-8 ml-auto mr-auto" src={preview} alt="user profile" />
      </div>
      <input ref={fileRef} onChange={selectProfile} type="file" accept="image/*" style={{ display: 'none' }} />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="fontSize-xs" htmlFor="닉네임">닉네임</label>
        <div className="flex borderRadius-sm">
          <input ref={nicknameRef} type="text" placeholder="숫자, 영어, 한글을 조합하여 2~8글자로 입력해주세요!" />
          <button type="button" onClick={checkDuplication}>중복 확인</button>
        </div>
        <span className={styles.description}>숫자, 영어, 한글을 조합하여 2-8글자로 입력해주세요!</span>
        <button className={styles.submitBtn} type="submit">완료</button>
      </form>
    </>
  );
}

export default ProfileForm;
