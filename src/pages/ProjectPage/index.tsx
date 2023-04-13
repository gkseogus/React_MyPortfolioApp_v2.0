/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Carousel } from 'antd';

interface ProjectPageRefProps {
  projectRef: React.RefObject<HTMLDivElement>;
}

/** 이미지는 600 by 400 */
const ProjectPage = ({ projectRef }: ProjectPageRefProps) => {
  const [isHovering, setIsHovering] = useState(0);

  return (
    <ProjectPageContain ref={projectRef}>
      <ProjectPageTitle>PROJECT</ProjectPageTitle>
      <ProjectCarouselContain>
        <ProjectCarouseItemsContain>
          <Carousel autoplay>
            {[0, 1, 2, 3].map(() => (
              <div
                onMouseOver={() => {
                  setIsHovering(1);
                }}
                onMouseOut={() => {
                  setIsHovering(0);
                }}
                onFocus={() => {
                  console.log('Test');
                }}
                onBlur={() => {
                  console.log('Test');
                }}
              >
                <ProjectImg src={`${process.env.PUBLIC_URL}/images/ProjectPageImgs/projectCarouseImg1.png`} />
                {isHovering === 1 && <ProjectImgText>hihih</ProjectImgText>}
              </div>
            ))}
          </Carousel>
        </ProjectCarouseItemsContain>
      </ProjectCarouselContain>
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
  gap: 20px;
`;

const ProjectPageTitle = styled.p`
  display: flex;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
`;

const ProjectCarouselContain = styled.div`
  width: 100%;
  height: 570px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange};
`;

const ProjectCarouseItemsContain = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  display: block;
`;

const ProjectImg = styled.img`
  width: 600px;
  height: 400px;
  position: relative;
  display: inline-block;
  margin-bottom: 60px;
  :hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`;

const ProjectImgText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  transition: 0.5s;
`;
