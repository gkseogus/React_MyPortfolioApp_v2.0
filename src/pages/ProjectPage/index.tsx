import React from 'react';
import styled from '@emotion/styled';

const ProjectPage = () => {
  console.log('te');
  return (
    <ProjectPageContain>
      <ProjectPageTitle>PROJECT</ProjectPageTitle>
    </ProjectPageContain>
  );
};

export default ProjectPage;

const ProjectPageContain = styled.div`
  width: 1000px;
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const ProjectPageTitle = styled.p`
  display: flex;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
`;
