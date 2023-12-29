import { useState, useEffect } from 'react';

const useScrollProgress = (): number => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    /**
     * 스크롤 진행도 함수
     */
    const handleScrollProgress = (): void => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const windowHeight: number = scrollHeight - clientHeight;
      const currentPercent: number = scrollTop / windowHeight;

      if (scrollTop === 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(currentPercent * 100);
    };
    window.addEventListener('scroll', handleScrollProgress);
    return () => {
      window.removeEventListener('scroll', handleScrollProgress);
    };
  }, []);
  return scrollProgress;
};

export default useScrollProgress;
