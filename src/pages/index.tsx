import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Navbar from 'components/common/Navbar';
import AboutPage from 'pages/AboutPage';
import SkillsPage from 'pages/SkillsPage';
import CareerPage from 'pages/CareerPage';
import ProjectPage from 'pages/ProjectPage';
import ScrollToTopButton from 'components/common/ScrollToTopButton';

const MainPage = () => {
  const pageRefs = {
    aboutRef: useRef<HTMLDivElement>(null),
    skillsRef: useRef<HTMLDivElement>(null),
    careerRef: useRef<HTMLDivElement>(null),
    projectRef: useRef<HTMLDivElement>(null),
  };

  return (
    <>
      <Navbar
        aboutRef={pageRefs.aboutRef}
        skillsRef={pageRefs.skillsRef}
        careerRef={pageRefs.careerRef}
        projectRef={pageRefs.projectRef}
      />
      <MainPageContain>
        <AboutPage aboutRef={pageRefs.aboutRef} />
        <SkillsPage skillsRef={pageRefs.skillsRef} />
        <CareerPage careerRef={pageRefs.careerRef} />
        <ProjectPage projectRef={pageRefs.projectRef} />
      </MainPageContain>
      <ScrollToTopButton />
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
