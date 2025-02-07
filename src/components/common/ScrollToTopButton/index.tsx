import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FiChevronsUp } from 'react-icons/fi';
import { keyframes } from '@emotion/react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  /** 해당 컴포넌트의 노출 여부 핸들러  */
  const handleToggleVisible = (): void => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  /** 스크롤 이동 핸들러 */
  const handleScrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleToggleVisible);

    return () => {
      window.removeEventListener('scroll', handleToggleVisible);
    };
  }, []);

  return (
    <ScrollToTop>
      <FiChevronsUp onClick={handleScrollToTop} style={{ display: visible ? 'inline' : 'none' }}></FiChevronsUp>
    </ScrollToTop>
  );
};

export default React.memo(ScrollToTopButton);

const topSlice = keyframes`
  0%{
    bottom: 70px;
  }
  100%{
    bottom: 100px;
  }
`;

const ScrollToTop = styled.section`
  position: fixed;
  width: 70%;
  left: 83%;
  bottom: 70px;
  height: 20px;
  font-size: 3rem;
  z-index: 9;
  cursor: pointer;
  background-color: none;
  color: ${({ theme }) => theme.colors.black};
  transition: bottom 0.5s ease;
  :hover {
    animation: ${topSlice} 1s;
    animation-fill-mode: forwards;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
