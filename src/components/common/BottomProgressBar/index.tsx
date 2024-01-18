import React from 'react';
import styled from '@emotion/styled';
import useScrollProgress from 'hook/useScrollProgress';

const BottomProgressBar = () => {
  const scrollProgressWidth = useScrollProgress();

  return (
    <ProgressContainer isVisible={scrollProgressWidth < 98}>
      <ProgressBar>
        <ProgressFill width={scrollProgressWidth} />
      </ProgressBar>
    </ProgressContainer>
  );
};

export default BottomProgressBar;

const ProgressContainer = styled.section<{ isVisible: boolean }>`
  display: none;
  @media screen and (max-width: 1000px) {
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    position: fixed;
    width: 100%;
    height: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    transition: 1s;
    z-index: 10;
  }
`;

const ProgressBar = styled.section`
  display: flex;
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const ProgressFill = styled.section<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.orange100};
`;
