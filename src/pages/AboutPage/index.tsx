import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';
import ABOUT_LOGO_DATA from 'pages/AboutPage/aboutData';

const AboutPage = () => {
  /**
   * 이메일 클립보드 복사
   */
  const handleCopyClipBoard = (): void => {
    const copyText = 'fbzbffldj998@naver.com';
    try {
      navigator.clipboard.writeText(copyText);
      showSuccessAlert('클립보드에 복사되었습니다.');
    } catch (error) {
      showErrorAlert('클립보드 복사에 실패하였습니다.');
    }
  };

  const showSuccessAlert = (message: string): void => {
    Swal.fire({
      width: '400px',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const showErrorAlert = (message: string): void => {
    Swal.fire({
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <AboutPageContainer>
      <GridContainer>
        <GridItems>
          <AboutPageTitle marginTopProps="0px">
            <AboutPageTitleRoller>
              <AboutPageTitleRollerText>
                경험
                <br />
                소통
                <br />
                설계
                <br />
                구축
              </AboutPageTitleRollerText>
            </AboutPageTitleRoller>
            을 좋아하는
          </AboutPageTitle>
          <AboutPageTitle marginTopProps="50px">개발자 한대현 입니다.</AboutPageTitle>
          <InfoContainer>
            <AboutPageInfoText isHover={false}>Call: 010-2246-6787</AboutPageInfoText>
            <AboutPageEmailButton role="button" onClick={handleCopyClipBoard}>
              <AboutPageInfoText role="button" aria-label="G-mail: fbzbffldj998@naver.com" isHover>
                G-mail: fbzbffldj998@naver.com
              </AboutPageInfoText>
            </AboutPageEmailButton>
          </InfoContainer>
          <SocialMenu>
            <SocialMenuListUl>
              {ABOUT_LOGO_DATA.map(items => (
                <SocialMenuListLi key={items.iconKey}>
                  <SocialMenuLink href={items.iconLink} target="_blank" rel="noopener noreferrer">
                    <SocialMenuIcon src={items.iconImg} alt={items.iconAlt} />
                  </SocialMenuLink>
                </SocialMenuListLi>
              ))}
            </SocialMenuListUl>
          </SocialMenu>
        </GridItems>
        <GridItems>
          <BulbImg src={`${process.env.PUBLIC_URL}/images/AboutPageImgs/bulb.gif`} alt="bulbImg" />
        </GridItems>
      </GridContainer>
      <MoContainer>
        <AboutPageTitle marginTopProps="0px">
          <AboutPageTitleRoller>
            <AboutPageTitleRollerText>
              경험
              <br />
              소통
              <br />
              설계
              <br />
              구축
            </AboutPageTitleRollerText>
          </AboutPageTitleRoller>
          을 좋아하는
        </AboutPageTitle>
        <AboutPageTitle marginTopProps="50px">개발자 한대현 입니다.</AboutPageTitle>
        <InfoContainer>
          <AboutPageInfoText isHover={false}>Call: 010-2246-6787</AboutPageInfoText>
          <AboutPageEmailButton onClick={handleCopyClipBoard}>
            <AboutPageInfoText isHover>G-mail: fbzbffldj998@naver.com</AboutPageInfoText>
          </AboutPageEmailButton>
        </InfoContainer>
        <SocialMenu>
          <SocialMenuListUl>
            {ABOUT_LOGO_DATA.map(items => (
              <SocialMenuListLi key={items.iconKey}>
                <SocialMenuLink href={items.iconLink} target="_blank" rel="noopener noreferrer">
                  <SocialMenuIcon src={items.iconImg} alt={items.iconAlt} />
                </SocialMenuLink>
              </SocialMenuListLi>
            ))}
          </SocialMenuListUl>
        </SocialMenu>
      </MoContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;

const Roller = keyframes`
  0%{
    top:0;
  }
  25%{
    top: -4rem;    
  }
  50%{
    top: -8rem;
  }
  72.5%{
    top: -12.25rem;
  }
`;

const AboutPageContainer = styled.section`
  display: flex;
  position: relative;
  width: 1000px;
  height: 880px;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const GridContainer = styled.section`
  display: grid;
  position: relative;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 80px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const GridItems = styled.section`
  display: flex;
  position: relative;
  width: 495px;
  height: 600px;
  justify-items: center;
  align-items: center;
`;

const AboutPageTitleRoller = styled.section`
  display: inline;
  position: relative;
  width: 100px;
  height: 4.125rem;
  padding-left: 20px;
  line-height: 4rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const AboutPageTitleRollerText = styled.p`
  display: inline;
  position: relative;
  font-size: 36px;
  font-weight: 700;
  top: 0;
  color: ${({ theme }) => theme.colors.gray900};
  animation: ${Roller} 5s infinite;
`;

const AboutPageTitle = styled.section<{ marginTopProps: string }>`
  display: flex;
  position: absolute;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  top: 100px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: -2px;
  margin-top: ${({ marginTopProps }) => marginTopProps};
  @media screen and (max-width: 500px) {
    height: 0px;
  }
`;

const InfoContainer = styled.section`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 500px) {
    margin-top: 100px;
  }
`;

const AboutPageEmailButton = styled.button`
  display: flex;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  cursor: pointer;
`;

const AboutPageInfoText = styled.span<{ isHover: boolean }>`
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  display: inline;
  color: ${({ theme }) => theme.colors.black};
  :hover {
    color: ${({ isHover, theme }) => isHover && theme.colors.gray900};
  }
`;

const SocialMenu = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 60px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 200px;
  @media screen and (max-width: 500px) {
    margin-top: 250px;
  }
`;

const SocialMenuListUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 40px;
`;

const SocialMenuListLi = styled.li`
  list-style: none;
  margin: 0 15px;
`;

const SocialMenuLink = styled.a`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  transition: 0.6s;
  box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors.shadow};
  &:hover {
    transform: translate(0, -10%);
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const SocialMenuIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const BulbImg = styled.img`
  width: 512px;
  height: 490px;
`;

const MoContainer = styled.section`
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    position: relative;
    width: 100vw;
    height: 400px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: 180px;
  }
`;
