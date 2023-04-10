import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FiChevronsUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState<boolean>(false);

  /** 해당 컴포넌트의 노출 여부 핸들러  */
  const handleToggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  /** 스크롤 이동 핸들러 */
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleToggleVisible);

  return (
    <ScrollToTop>
      <FiChevronsUp onClick={handleScrollToTop} style={{ display: visible ? 'inline' : 'none' }}></FiChevronsUp>
    </ScrollToTop>
  );
};

export default React.memo(ScrollToTopButton);

const ScrollToTop = styled.div`
  position: fixed;
  width: 70%;
  left: 83%;
  bottom: 70px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  background-color: none;
  color: ${({ theme }) => theme.colors.orange};
`;