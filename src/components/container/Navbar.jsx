/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../presentation/Header';

import MenuTab from '../presentation/MenuTab';

function Navbar({ buttonSet }) {
  const navigate = useNavigate();

  const [isTab, setIsTab] = useState(false);

  const goToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const toggleTab = useCallback(() => {
    setIsTab((isTab) => !isTab);
  }, [setIsTab]);

  return (
    <div>
      <Header openTab={toggleTab} buttonSet={buttonSet} />
      <MenuTab
        isTab={isTab}
        goToLogin={goToLogin}
        closeTab={toggleTab}
      />
    </div>
  );
}

export default Navbar;
