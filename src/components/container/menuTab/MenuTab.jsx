/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { useNavigate } from 'react-router-dom';

function MenuTab({ closeTab }) {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <button onClick={() => closeTab()} type="button">닫기버튼</button>
      <div>알림</div>
      <div onClick={goToLogin}>로그인</div>
      <div>탐색, 내 여행 계획, 마이페이지 메뉴</div>
      <div>설정</div>
    </>
  );
}

export default MenuTab;
