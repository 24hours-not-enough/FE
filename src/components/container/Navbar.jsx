/* eslint-disable no-shadow */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../presentation/Header';

import MenuTab from '../presentation/MenuTab';

function Navbar() {
  const navigate = useNavigate();

  const [isTab, setIsTab] = useState(false);

  const goToLogin = () => {
    navigate('/login');
  };

  const toggleTab = () => {
    setIsTab((isTab) => !isTab);
  };

  return (
    <>
      <Header openTab={toggleTab} />
      <MenuTab
        isTab={isTab}
        goToLogin={goToLogin}
        closeTab={toggleTab}
      />
    </>
  );
}

export default Navbar;
