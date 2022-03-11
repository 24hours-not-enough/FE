import { memo } from 'react';

function Header({ openTab }) {
  return (
    <nav className="flex justify-center items-center sticky h-10">
      <div className="absolute left-0 top-0">
        <svg onClick={openTab} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <h1 className="font-bold">트리플랜(로고)</h1>
    </nav>
  );
}

export default memo(Header);
