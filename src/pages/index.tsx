import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
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
      <Footer />
    </>
  );
};

export default MainPage;

const MainPageContain = styled.div`
  width: 100%;
  height: 4800px;
  position: relative;
  display: flex;
  margin-top: 80px;
  gap: 300px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 500px;
    height: 3200px;
    gap: 200px;
  }
`;
