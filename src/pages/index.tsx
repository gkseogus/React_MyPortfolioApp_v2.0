import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import AboutPage from 'pages/AboutPage';
import SkillsPage from 'pages/SkillsPage';
import CareerPage from 'pages/CareerPage';
import ProjectPage from 'pages/ProjectPage';
import ScrollToTopButton from 'components/common/ScrollToTopButton';
import BottomProgressBar from 'components/common/BottomProgressBar';

// eslint-disable-next-line no-console
console.log(
  ` 
 %c██╗  ██╗██████╗ ██╗  ██╗    ██████╗ ██╗      ██████╗  ██████╗ 
 %c██║  ██║██╔══██╗██║  ██║    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
 %c███████║██║  ██║███████║    ██████╔╝██║     ██║   ██║██║  ███╗
 %c██╔══██║██║  ██║██╔══██║    ██╔══██╗██║     ██║   ██║██║   ██║
 %c██║  ██║██████╔╝██║  ██║    ██████╔╝███████╗╚██████╔╝╚██████╔╝
 %c╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
 %c                                                              
`,
  'color:#FF8F51',
  'color:#FFD29B',
  'color:#FF8F51',
  'color:#FFD29B',
  'color:#FF8F51',
  'color:#FFD29B',
  'color:#FF8F51',
);

const MainPage = () => {
  const pageRefs = {
    skillsRef: useRef<HTMLDivElement>(null),
    careerRef: useRef<HTMLDivElement>(null),
    projectRef: useRef<HTMLDivElement>(null),
  };

  return (
    <>
      <Navbar skillsRef={pageRefs.skillsRef} careerRef={pageRefs.careerRef} projectRef={pageRefs.projectRef} />
      <MainPageContainer>
        <AboutPage />
        <SkillsPage skillsRef={pageRefs.skillsRef} />
        <CareerPage careerRef={pageRefs.careerRef} />
        <ProjectPage projectRef={pageRefs.projectRef} />
      </MainPageContainer>
      <ScrollToTopButton />
      <BottomProgressBar />
      <Footer />
    </>
  );
};

export default MainPage;

const MainPageContainer = styled.section`
  display: flex;
  position: relative;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.black};

  @media screen and (max-width: 500px) {
    gap: 200px;
  }
`;
