/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { _userInfo } from '../../state/redux/user/userSelector';
import Header from '../presentation/Header';

import MobileMenuTab from '../presentation/MobileMenuTab';

function Navbar({ title, children, back }) {
  const userInfo = useSelector(_userInfo);
  const navigate = useNavigate();
  const [isTab, setIsTab] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsUser(userInfo.userName
      ? {
        userName: userInfo.userName,
        userProfileImage: userInfo.userProfileImage,
      }
      : false);
  }, [userInfo]);

  const toggleTab = useCallback(() => {
    setIsTab((isTab) => !isTab);
  }, [setIsTab]);

  const handleRouter = useCallback((path) => () => {
    navigate(path);
    toggleTab();
  }, [navigate]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <Header
        back={back}
        title={title}
        handleRouter={handleRouter}
        openTab={toggleTab}
        goBack={goBack}
      >
        {children}
      </Header>
      <MobileMenuTab
        isTab={isTab}
        isUser={isUser}
        closeTab={toggleTab}
        handleRouter={handleRouter}
      />
    </div>
  );
}

export default Navbar;
