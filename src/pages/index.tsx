import React from 'react';
import styled from '@emotion/styled';
import Navbar from 'components/common/Navbar';
import AboutPage from 'pages/AboutPage';
import SkillsPage from 'pages/SkillsPage';
import CareerPage from 'pages/CareerPage';

const MainPage = () => {
  console.log('Test');
  return (
    <>
      <Navbar />
      <MainPageContain>
        <AboutPage />
        <SkillsPage />
        <CareerPage />
      </MainPageContain>
    </>
  );
};

export default MainPage;

const MainPageContain = styled.div`
  width: 100%;
  height: 5000px;
  position: relative;
  display: flex;
  margin-top: 80px;
  gap: 300px;
  flex-direction: column;
  align-items: center;
`;
