import { useState, useEffect } from 'react';

const useScrollDown = (): boolean => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  /**
   * 스크롤 다운 이벤트 함수
   */
  const handleScrollDown = () => {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScrollDown();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        handleScrollDown();
      });
    };
  }, []);

  return isScroll;
};

export default useScrollDown;
