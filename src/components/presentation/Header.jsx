import { memo } from 'react';

import useLayout from '../../shared/useLayout';
import Button from '../elements/button';

function Header({
  openTab, buttonSet,
}) {
  let title;
  let buttonType;
  let handleClick;
  buttonSet && ({ title, buttonType, handleClick } = buttonSet);
  const { pc } = useLayout();

  if (!pc) {
    return (
      <nav className="flex justify-center items-center sticky h-10">
        <div className="absolute left-2 top-2">
          <svg onClick={openTab} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="font-bold">트리플랜(로고)</h1>
        {buttonSet && <Button type={buttonType} onClick={handleClick}>{title}</Button>}
      </nav>
    );
  }
  return (
    <div className="absolute flex flex-col w-24 h-full bg-gray-400 rounded-r-2xl">
      <div className="my-2 mx-auto text-white">
        Logo
      </div>
      {/* 아이콘 이미지들 */}
      <div className="mx-auto my-2 w-10 h-10 bg-white" />
      <div className="mx-auto my-2 w-10 h-10 bg-white" />
      <div className="mx-auto my-2 w-10 h-10 bg-white" />
      <div className="mx-auto my-2 w-10 h-10 bg-white" />
    </div>
  );
}

export default memo(Header);
