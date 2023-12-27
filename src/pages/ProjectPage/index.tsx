import React from 'react';
import styled from '@emotion/styled';
import projectItemsData from 'pages/ProjectPage/projectData';
import ProjectGridContainPC from 'pages/ProjectPage/ProjectGridContainPC';
import ProjectGridContainMO from 'pages/ProjectPage/ProjectGridContainMO';

interface ProjectPageRefProps {
  projectRef: React.RefObject<HTMLDivElement>;
}

const ProjectPage = ({ projectRef }: ProjectPageRefProps) => (
  <ProjectPageContain ref={projectRef}>
    <ProjectPageTitle>PROJECT</ProjectPageTitle>
    {projectItemsData.map(item => (
      <ProjectBox key={item.itemKey}>
        <ProjectTitle>{item.itemTitle}</ProjectTitle>
        <ProjectGridContainPC {...item} />
        <ProjectGridContainMO {...item} />
      </ProjectBox>
    ))}
  </ProjectPageContain>
);

export default ProjectPage;

const ProjectPageContain = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 60px;
  gap: 60px;
  background-color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const ProjectPageTitle = styled.span`
  position: relative;
  display: flex;
  width: 100%;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 100px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

const ProjectBox = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  height: 800px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

const ProjectTitle = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
