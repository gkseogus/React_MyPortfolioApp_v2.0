import React from 'react';
import styled from '@emotion/styled';
import Navbar from 'components/common/Navbar';
import AboutPage from './AboutPage';

const MainPage = () => {
  console.log('Test');
  return (
    <>
      <Navbar />
      <MainPageContain>
        <AboutPage />
      </MainPageContain>
    </>
  );
};

export default MainPage;

const MainPageContain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
`;
