import { memo } from 'react';

import useLayout from '../../shared/useLayout';

function LayoutWrapper({ children }) {
  const { pc } = useLayout();

  if (!pc) {
    return (
      <div className="bg-main-background w-full h-full overflow-auto scrollbar-hide">
        {children}
      </div>
    );
  }
  return children;
}

export default memo(LayoutWrapper);
