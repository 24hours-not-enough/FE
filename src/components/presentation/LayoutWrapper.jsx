import { memo } from 'react';

import useLayout from '../../shared/useLayout';

function LayoutWrapper({ children, overflow }) {
  const { pc } = useLayout();

  const overflowType = () => {
    switch (overflow) {
      case 'auto':
        return 'overflow-auto scrollbar-hide';
      case 'hide':
        return 'overflow-hidden';
      default:
        return 'overflow-auto scrollbar-hide';
    }
  };

  if (!pc) {
    return (
      <div className={`bg-main-background w-screen h-full ${overflowType}`}>
        {children}
      </div>
    );
  }
  return children;
}

export default memo(LayoutWrapper);
