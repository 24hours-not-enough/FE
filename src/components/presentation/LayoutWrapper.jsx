import { memo } from 'react';

import useLayout from '../../shared/useLayout';

function LayoutWrapper({ children }) {
  const { pc } = useLayout();

  if (!pc) {
    return (
      <div>
        {children}
      </div>
    );
  }
  return children;
}

export default memo(LayoutWrapper);
