import { memo } from 'react';

import iconSet from '../../shared/imageUrl';

function Header({
  openTab,
  children,
  back,
  exit,
  goBack,
  title,
}) {
  const headerLeft = () => {
    if (back === true) {
      return (
        <div
          role="button"
          tabIndex={0}
          onClick={goBack}
          className="p-4"
        >
          <img className="w-6 h-6" alt="back" src={iconSet.header.backIcon} />
        </div>
      );
    }

    if (exit === true) {
      return (
        <div className="p-5">
          <img className="w-3 h-3" alt="exit" src={iconSet.header.exitIcon} />
        </div>
      );
    }
    return (
      <div className="p-5">
        <svg onClick={openTab} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
    );
  };

  return (
    <nav className="absolute top-0 left-0 h-14 w-full z-10 bg-white">
      {headerLeft()}
      <h1
        className="absolute left-1/2 top-4 trans font-bold"
        style={{ transform: 'translateX(-50%)' }}
      >
        {title}
      </h1>
      <div className="absolute right-0 top-4 pr-4">
        {children}
      </div>
    </nav>
  );
}

export default memo(Header);
