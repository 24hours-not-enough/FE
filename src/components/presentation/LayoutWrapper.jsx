import { memo } from 'react';

// import useLayout from '../../shared/useLayout';

function LayoutWrapper({ children }) {
  // const { pc } = useLayout();

  // if (!pc) {
  return (
    <div className="bg-main-background w-screen h-screen min-w-[320px] max-w-[430px] overflow-y-auto scrollbar-hide">
      {children}
    </div>
  );
  // }
  // return children;
}

export default memo(LayoutWrapper);
