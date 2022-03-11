import { memo } from 'react';

function LayoutWrapper({ children }) {
  return (
    <div className="bg-gray-400">
      <div className="w-mobile bg-white h-screen mx-auto ">
        {children}
      </div>
    </div>
  );
}

export default memo(LayoutWrapper);
