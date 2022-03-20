/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
import { useState, useCallback, Children } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../presentation/Header';

import MobileMenuTab from '../presentation/MobileMenuTab';

function Navbar({ title, children, back }) {
  const navigate = useNavigate();
  const [isTab, setIsTab] = useState(false);

  const handleRouter = useCallback((path) => () => {
    navigate(path);
  }, [navigate]);

  const toggleTab = useCallback(() => {
    setIsTab((isTab) => !isTab);
  }, [setIsTab]);

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
        closeTab={toggleTab}
        handleRouter={handleRouter}
      />
    </div>
  );
}

export default Navbar;
