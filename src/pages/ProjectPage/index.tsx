import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes, useTheme } from '@emotion/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import projectItemsData from 'pages/ProjectPage/projectData';
import MoreModal from 'components/common/MoreModal';

interface ProjectPageRefProps {
  projectRef: React.RefObject<HTMLDivElement>;
}

const ProjectPage = ({ projectRef }: ProjectPageRefProps) => {
  const {
    colors: { white50, black },
  } = useTheme();
  const [isPageCnt, setIsPageCnt] = useState<number>(0);
  const [isMoreBtn, setIsMoreBtn] = useState<number>(-1);

  /**
   * 페이징 함수
   * @param btnType - 좌,우 화살표 체킹
   */
  const handlePageCnt = (btnType: string) => {
    if (isPageCnt > -1 && btnType === 'left') {
      setIsPageCnt((prevCount): number => prevCount - 1);
    }
    if (isPageCnt < projectItemsData.length && btnType === 'right') {
      setIsPageCnt((prevCount): number => prevCount + 1);
    }
  };

  /**
   * 더보기 버튼
   * @param itemKey - 더보기 선택한 프로젝트 item key
   */
  const handleMoreBtn = (itemKey: number) => {
    setIsMoreBtn(itemKey);
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
                      <MoreModal
                        onClose={() => {
                          setIsMoreBtn(-1);
                        }}
                        modalTitleText={
                          <MoreText>
                            <MoreTitle>-기술스택-</MoreTitle>
                            <br />
                            {items.itemSkills}
                            <br />
                            <br />
                            <MoreTitle>-형상관리-</MoreTitle>
                            <br />
                            {items.itemVerSkills}
                          </MoreText>
                        }
                      />
                    ) : (
                      <ProjectMoreBtn
                        onClick={() => {
                          handleMoreBtn(items.itemKey);
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
      <MoProjectCarouselContain>
        {isPageCnt !== 0 ? (
          <ArrowBtn
            arrowTypeProps="left"
            onClick={() => {
              handlePageCnt('left');
            }}
          >
            <AiOutlineLeft size={32} color={white50} />
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
                  <ProjectImgTitle>{items.itemTitle}</ProjectImgTitle>
                  <ProjectText>{items.itemText}</ProjectText>
                  {isMoreBtn === items.itemKey ? (
                    <MoreModal
                      onClose={() => {
                        setIsMoreBtn(-1);
                      }}
                      modalTitleText={
                        <MoreText>
                          <MoreTitle>-기술스택-</MoreTitle>
                          <br />
                          {items.itemSkills}
                          <br />
                          <br />
                          <MoreTitle>-형상관리-</MoreTitle>
                          <br />
                          {items.itemVerSkills}
                        </MoreText>
                      }
                    />
                  ) : (
                    <ProjectMoreBtn
                      onClick={() => {
                        setIsMoreBtn(items.itemKey);
                      }}
                    >
                      <ProjectMoreBtnText>더보기</ProjectMoreBtnText>
                    </ProjectMoreBtn>
                  )}
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
            <AiOutlineRight size={32} color={white50} />
          </ArrowBtn>
        ) : (
          <ArrowContain />
        )}
      </MoProjectCarouselContain>
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
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 400px;
  }
`;

const ProjectPageTitle = styled.p`
  display: flex;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
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
  @media screen and (max-width: 500px) {
    display: none;
  }
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
  @media screen and (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`;

const ProjectCarouseItemsContain = styled.div`
  width: 750px;
  height: 440px;
  position: relative;
  display: flex;
  @media screen and (max-width: 500px) {
    width: 400px;
    height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const GridContain = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: flex;
    grid-template-columns: none;
    flex-direction: column;
  }
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
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const ProjectText = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.gray900};
  white-space: pre-wrap;
  animation: ${fadeInY} 0.5s ease-in-out;
  @media screen and (max-width: 500px) {
    margin-bottom: 80px;
    letter-spacing: -2px;
  }
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
  @media screen and (max-width: 500px) {
    width: 80px;
    height: 40px;
    bottom: 0;
  }
`;

const ProjectMoreBtnText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white50};
`;

const MoreTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const MoreText = styled.span`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.black};
  @media screen and (max-width: 500px) {
    font-size: 12px;
    letter-spacing: -1px;
  }
`;

const MoProjectCarouselContain = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
