/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes, useTheme } from '@emotion/react';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import projectItemsData from 'pages/ProjectPage/projectData';

interface ProjectPageRefProps {
  projectRef: React.RefObject<HTMLDivElement>;
}

const ProjectPage = ({ projectRef }: ProjectPageRefProps) => {
  const {
    colors: { white50, black },
  } = useTheme();
  const [isPageCnt, setIsPageCnt] = useState(0);
  const [isMoreBtn, setIsMoreBtn] = useState(-1);

  const handlePageCnt = (btnType: string) => {
    if (isPageCnt > -1 && btnType === 'left') {
      setIsPageCnt((prevCount): number => prevCount - 1);
    }
    if (isPageCnt < projectItemsData.length && btnType === 'right') {
      setIsPageCnt((prevCount): number => prevCount + 1);
    }
  };

  return (
    <ProjectPageContain ref={projectRef}>
      <ProjectPageTitle>PROJECT</ProjectPageTitle>
      <ProjectCarouselContain>
        <TopToggleBar>
          <TopIndicatorContain>
            {projectItemsData.map(item => (
              <IndicatorBall key={item.itemKey} bgColorProps={item.itemKey === isPageCnt ? black : white50} />
            ))}
          </TopIndicatorContain>
        </TopToggleBar>
        {isPageCnt !== 0 ? (
          <ArrowBtn
            arrowTypeProps="left"
            onClick={() => {
              handlePageCnt('left');
            }}
          >
            <AiOutlineLeft size={64} color={white50} />
          </ArrowBtn>
        ) : (
          <ArrowContain />
        )}
        {projectItemsData.map(
          items =>
            // eslint-disable-next-line implicit-arrow-linebreak
            isPageCnt === items.itemKey && (
              <ProjectCarouseItemsContain key={items.itemKey}>
                <GridContain>
                  <GridItems isWhiteBg={false}>
                    <ProjectImg src={items.itemImg} alt={items.itemAlt} />
                    <ProjectImgTitle>{items.itemTitle}</ProjectImgTitle>
                  </GridItems>
                </GridContain>
                <GridContain>
                  <GridItems isWhiteBg>
                    <ProjectText>{items.itemText}</ProjectText>
                    {isMoreBtn === items.itemKey ? (
                      <ProjectSkillTextContain>
                        <CloseBtn
                          onClick={() => {
                            setIsMoreBtn(-1);
                          }}
                        >
                          <AiOutlineClose size={32} />
                        </CloseBtn>
                        <MoreText>
                          기술스택: {items.itemSkills}
                          <br />
                          <br />
                          형상관리: {items.itemVerSkills}
                        </MoreText>
                      </ProjectSkillTextContain>
                    ) : (
                      <ProjectMoreBtn
                        onClick={() => {
                          setIsMoreBtn(items.itemKey);
                        }}
                      >
                        <ProjectMoreBtnText>더보기</ProjectMoreBtnText>
                      </ProjectMoreBtn>
                    )}
                  </GridItems>
                </GridContain>
              </ProjectCarouseItemsContain>
            ),
        )}
        {isPageCnt < projectItemsData.length - 1 ? (
          <ArrowBtn
            arrowTypeProps="right"
            onClick={() => {
              handlePageCnt('right');
            }}
          >
            <AiOutlineRight size={64} color={white50} />
          </ArrowBtn>
        ) : (
          <ArrowContain />
        )}
      </ProjectCarouselContain>
    </ProjectPageContain>
  );
};

export default ProjectPage;

const leftSlice = keyframes`
  0%{
    transform: translateX(20%);
  }
  100%{
    transform: translateX(0%);
  }
`;

const rightSlice = keyframes`
  0%{
    transform: translateX(-20%);
  }
  100%{
    transform: translateX(0%);
  }
`;

const fadeInX = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInY = keyframes`
  0% {
    opacity: 0;
    transform: translateY(6%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

const TopToggleBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 14px 16px;
  gap: 87.5px;
  width: 700px;
  height: 60px;
  top: 0px;
  background-color: transparent;
`;

const TopIndicatorContain = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 168px;
  height: 24px;
`;

const IndicatorBall = styled.span<{ bgColorProps: string }>`
  display: flex;
  padding: 0px;
  gap: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ bgColorProps }) => bgColorProps};
`;

const ProjectCarouselContain = styled.div`
  width: 100%;
  height: 570px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
`;

const ArrowContain = styled.div`
  position: relative;
  display: flex;
  width: 64px;
  height: 64px;
  background-color: transparent;
  border: 0;
`;

const ArrowBtn = styled.button<{ arrowTypeProps: string }>`
  position: relative;
  display: flex;
  width: 64px;
  height: 64px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  :hover {
    animation: ${({ arrowTypeProps }) => (arrowTypeProps === 'left' ? leftSlice : rightSlice)} 1s;
  }
`;

const ProjectCarouseItemsContain = styled.div`
  width: 750px;
  height: 440px;
  position: relative;
  display: flex;
`;

const GridContain = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
`;

const GridItems = styled.div<{ isWhiteBg: boolean }>`
  width: 370px;
  height: 422px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: ${({ isWhiteBg, theme }) => (isWhiteBg ? theme.colors.white : theme.colors.orange)};
`;

const ProjectImg = styled.img`
  width: 370px;
  height: 370px;
  position: relative;
  display: flex;
  animation: ${fadeInX} 0.5s ease-in-out;
`;

const ProjectImgTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  animation: ${fadeInY} 0.5s ease-in-out;
`;

const ProjectText = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.gray900};
  white-space: pre-wrap;
  animation: ${fadeInY} 0.5s ease-in-out;
`;

const ProjectMoreBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 100px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.orange};
  animation: ${fadeInY} 0.5s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const ProjectMoreBtnText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white50};
`;

const ProjectSkillTextContain = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0px;
  width: 370px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.gray};
  animation: ${fadeInY} 1s ease-in-out;
`;

const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  right: 0px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const MoreText = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.black};
`;
