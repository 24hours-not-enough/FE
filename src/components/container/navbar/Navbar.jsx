import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';

import MenuTab from '../menuTab/MenuTab';

function Navbar() {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => setIsTab(false), []);

  const openTab = () => {
    setIsTab(true);
  };

  const closeTab = () => {
    setIsTab(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuButton}>
        <svg onClick={openTab} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <span className={styles.logo}>트리플랜(로고)</span>
      {isTab && <MenuTab closeTab={closeTab} />}
    </nav>
  );
}

export default Navbar;
