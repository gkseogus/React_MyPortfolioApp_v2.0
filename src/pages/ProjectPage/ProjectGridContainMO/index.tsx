import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface ProjectDataFace {
  itemImg: string[];
  itemAlt: string;
  itemGithubLink: string;
  itemFunction: string;
  itemUrlTitle: string;
  itemUrl: string;
}

const ProjectGridContainMO = ({
  itemImg,
  itemAlt,
  itemGithubLink,
  itemFunction,
  itemUrlTitle,
  itemUrl,
}: ProjectDataFace) => {
  const {
    colors: { orange },
  } = useTheme();
  const [pageCnt, setPageCnt] = useState<number>(0);

  /**
   * 페이징 함수
   * @param btnType - 좌,우 화살표 체킹
   */
  const handleImgPageNation = (btnType: string): void => {
    if (pageCnt > -1 && btnType === 'left') {
      setPageCnt((prevCount): number => prevCount - 1);
    }
    if (pageCnt < itemImg.length && btnType === 'right') {
      setPageCnt((prevCount): number => prevCount + 1);
    }
  };

  const handleToGoGitLink = (): void => {
    window.open(itemGithubLink);
  };

  return (
    <GridContainer>
      <GridItems>
        {itemImg.map((imgItem, idx) => idx === pageCnt && <ImgBox key={imgItem} src={imgItem} alt={itemAlt} />)}
        <ImgPageNationContainer>
          <ImgPageNationButton
            role="button"
            aria-label="좌측 페이지네이션"
            disabled={pageCnt === 0}
            onClick={(): void => {
              handleImgPageNation('left');
            }}
          >
            <AiOutlineLeft size={40} color={orange} />
          </ImgPageNationButton>
          <ImgPageNationText>{`${pageCnt + 1} / ${itemImg.length}`}</ImgPageNationText>
          <ImgPageNationButton
            role="button"
            aria-label="우측 페이지네이션"
            disabled={pageCnt === itemImg.length - 1}
            onClick={(): void => {
              handleImgPageNation('right');
            }}
          >
            <AiOutlineRight size={40} color={orange} />
          </ImgPageNationButton>
        </ImgPageNationContainer>
      </GridItems>
      {itemFunction !== '' && itemFunction !== '' && (
        <GridItems>
          {itemGithubLink !== '' && (
            <GridSubItem isBottomBorder>
              <ToGoGitProjectButton onClick={handleToGoGitLink}>
                <ToGoGitBtnText>Git Hub</ToGoGitBtnText>
              </ToGoGitProjectButton>
            </GridSubItem>
          )}
          <GridSubItem isBottomBorder={false}>
            <SubItemListTextBox>
              {itemFunction !== '' && (
                <div>
                  <SubItemListTitle>주요 기능</SubItemListTitle> <br />
                  <SubItemListText>{itemFunction}</SubItemListText>
                </div>
              )}
              <br />
              <br />
              <div>
                {itemUrl !== '' && (
                  <div>
                    <SubItemListTitle>URL</SubItemListTitle> <br />
                    <SubItemUrlText>
                      <a href={itemUrl} target="_blank" rel="noreferrer">
                        {itemUrlTitle}
                      </a>
                    </SubItemUrlText>
                  </div>
                )}
              </div>
            </SubItemListTextBox>
          </GridSubItem>
        </GridItems>
      )}
    </GridContainer>
  );
};

export default ProjectGridContainMO;

const GridContainer = styled.section`
  position: relative;
  display: none;
  grid-template-columns: repeat(1, 2fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 20px;
  @media screen and (max-width: 1000px) {
    display: grid;
  }
`;

const GridItems = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 20px;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 60%;
  }
`;

const GridSubItem = styled.section<{ isBottomBorder: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  border-bottom: ${({ isBottomBorder, theme }) => isBottomBorder && `2px solid  ${theme.colors.gray200}`};
`;

const ImgBox = styled.img`
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  @media screen and (max-width: 500px) {
    height: 200px;
  }
`;

const ImgPageNationContainer = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;

const ImgPageNationButton = styled.button`
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

const ImgPageNationText = styled.p`
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

const ToGoGitProjectButton = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.orange};
  bottom: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.orange50};
  }
`;

const ToGoGitBtnText = styled.p`
  font-weight: 900;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const SubItemListTextBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SubItemListTitle = styled.span`
  width: 150px;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.orange};
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const SubItemListText = styled.p`
  width: 100%;
  font-size: 14px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const SubItemUrlText = styled.p`
  font-size: 14px;
  :hover {
    color: ${({ theme }) => theme.colors.orange50};
  }
`;
