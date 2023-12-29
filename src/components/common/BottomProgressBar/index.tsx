import React from 'react';
import styled from '@emotion/styled';
import useScrollProgress from 'hook/useScrollProgress';

const BottomProgressBar = () => {
  const scrollProgressWidth = useScrollProgress();

  return (
    <BottomProgressContain isExposureProps={scrollProgressWidth}>
      <ScrollProgressBar>
        <ScrollProgress widthProps={scrollProgressWidth} />
      </ScrollProgressBar>
    </BottomProgressContain>
  );
};

export default BottomProgressBar;

const BottomProgressContain = styled.div<{ isExposureProps: number }>`
  display: none;
  @media screen and (max-width: 500px) {
    display: ${({ isExposureProps }) => (isExposureProps < 98 ? 'flex' : 'none')};
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

const ScrollProgressBar = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const ScrollProgress = styled.div<{ widthProps: number }>`
  width: ${({ widthProps }) => widthProps}%;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.orange100};
`;
