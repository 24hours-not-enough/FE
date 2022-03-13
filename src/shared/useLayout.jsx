import { useLayoutEffect, useState } from 'react';

export default function useLayout() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.matchMedia('screen and (max-width: 768px)').matches);

  useLayoutEffect(() => {
    function onResize() {
      setIsMobile(typeof window !== 'undefined' && window.matchMedia('screen and (max-width: 768px)').matches);
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    mobile: isMobile,
    pc: !isMobile,
  };
}
