import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface ProjectDataFace {
  itemImg: string[];
  itemAlt: string;
  itemText: string;
  itemGithubLink: string;
  itemFunction: string;
  itemUrlTitle: string;
  itemUrl: string;
  itemFrontSkills: string;
  itemBackSkills: string;
  itemOtherSkills: string;
}

const ProjectGridContainPC = ({
  itemImg,
  itemAlt,
  itemText,
  itemGithubLink,
  itemFunction,
  itemUrlTitle,
  itemUrl,
  itemFrontSkills,
  itemBackSkills,
  itemOtherSkills,
}: ProjectDataFace) => {
  const {
    colors: { orange },
  } = useTheme();
  const [pageCnt, setPageCnt] = useState(0);

  /**
   * 페이징 함수
   * @param btnType - 좌,우 화살표 체킹
   */
  const handleImgPageNation = (btnType: string) => {
    if (pageCnt > -1 && btnType === 'left') {
      setPageCnt((prevCount): number => prevCount - 1);
    }
    if (pageCnt < itemImg.length && btnType === 'right') {
      setPageCnt((prevCount): number => prevCount + 1);
    }
  };

  const handleToGoGitLink = () => {
    window.open(itemGithubLink);
  };

  return (
    <GridContain>
      <GridItems>
        {itemImg.map((imgItem, idx) => idx === pageCnt && <ImgBox key={imgItem} src={imgItem} alt={itemAlt} />)}
        <ImgPageNationContain>
          <ImgPageNationBtn
            disabled={pageCnt === 0}
            onClick={() => {
              handleImgPageNation('left');
            }}
          >
            <AiOutlineLeft size={40} color={orange} />
          </ImgPageNationBtn>
          <ImgPageNationText>{`${pageCnt + 1} / ${itemImg.length}`}</ImgPageNationText>
          <ImgPageNationBtn
            disabled={pageCnt === itemImg.length - 1}
            onClick={() => {
              handleImgPageNation('right');
            }}
          >
            <AiOutlineRight size={40} color={orange} />
          </ImgPageNationBtn>
        </ImgPageNationContain>
      </GridItems>
      <GridItems>
        <GridSubItem isBottomBorder>
          <ProjectText>{itemText}</ProjectText>
          {itemGithubLink !== '' && (
            <ToGoGitProjectBtn onClick={handleToGoGitLink}>
              <ToGoGitBtnText>Git Hub</ToGoGitBtnText>
            </ToGoGitProjectBtn>
          )}
        </GridSubItem>
        <GridSubItem isBottomBorder={false}>
          {itemFunction !== '' && (
            <SubItemListTextBox>
              <SubItemListTitle>주요 기능</SubItemListTitle>
              <SubItemListText>{itemFunction}</SubItemListText>
            </SubItemListTextBox>
          )}
          {itemFrontSkills !== '' && (
            <SubItemListTextBox>
              <SubItemListTitle>Frontend</SubItemListTitle>
              <SubItemListText>{itemFrontSkills}</SubItemListText>
            </SubItemListTextBox>
          )}
          {itemBackSkills !== '' && (
            <SubItemListTextBox>
              <SubItemListTitle>Backend</SubItemListTitle>
              <SubItemListText>{itemBackSkills}</SubItemListText>
            </SubItemListTextBox>
          )}
          {itemOtherSkills !== '' && (
            <SubItemListTextBox>
              <SubItemListTitle>Other</SubItemListTitle>
              <SubItemListText>{itemOtherSkills}</SubItemListText>
            </SubItemListTextBox>
          )}
          {itemUrl !== '' && (
            <SubItemListTextBox>
              <SubItemListTitle>URL</SubItemListTitle>
              <SubItemUrlText>
                <a href={itemUrl} target="_blank" rel="noreferrer">
                  {itemUrlTitle}
                </a>
              </SubItemUrlText>
            </SubItemListTextBox>
          )}
        </GridSubItem>
      </GridItems>
    </GridContain>
  );
};

export default ProjectGridContainPC;

const GridContain = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const GridItems = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 650px;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
`;

const GridSubItem = styled.div<{ isBottomBorder: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 315px;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  border-bottom: ${({ isBottomBorder, theme }) => isBottomBorder && `2px solid  ${theme.colors.gray200}`};
`;

const ImgBox = styled.img`
  display: flex;
  position: relative;
  width: 100%;
  height: 450px;
`;

const ImgPageNationContain = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px;
`;

const ImgPageNationBtn = styled.button`
  display: flex;
  position: relative;
  width: 40px;
  height: 40px;
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const ImgPageNationText = styled.span`
  width: 60px;
  font-size: 16px;
  font-weight: 700;
`;

const ProjectText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
`;

const ToGoGitProjectBtn = styled.button`
  display: flex;
  position: absolute;
  width: 120px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.orange};
  bottom: 20px;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.orange50};
  }
`;

const ToGoGitBtnText = styled.span`
  font-weight: 900;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const SubItemListTextBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

const SubItemListTitle = styled.span`
  width: 150px;
  font-weight: 900;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.orange};
`;

const SubItemListText = styled.span`
  width: 100%;
  font-size: 14px;
`;

const SubItemUrlText = styled.span`
  font-size: 14px;
  :hover {
    color: ${({ theme }) => theme.colors.orange50};
  }
`;
