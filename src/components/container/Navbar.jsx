/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../presentation/Header';

import MobileMenuTab from '../presentation/MobileMenuTab';

function Navbar() {
  const navigate = useNavigate();
  const [isTab, setIsTab] = useState(false);

  const handleRouter = useCallback((path) => () => {
    navigate(path);
  }, [navigate]);

  const toggleTab = useCallback(() => {
    setIsTab((isTab) => !isTab);
  }, [setIsTab]);

  return (
    <div>
      <Header openTab={toggleTab} />
      <MobileMenuTab
        isTab={isTab}
        closeTab={toggleTab}
        handleRouter={handleRouter}
      />
    </div>
  );
}

export default Navbar;
