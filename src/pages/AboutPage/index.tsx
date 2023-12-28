import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Swal from 'sweetalert2';
import ABOUT_LOGO_DATA from 'pages/AboutPage/aboutData';

interface AboutPageRefProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const AboutPage = ({ aboutRef }: AboutPageRefProps) => {
  /**
   * 이메일 클립보드 복사
   */
  const handleCopyClipBoard = () => {
    try {
      navigator.clipboard.writeText('fbzbffldj998@naver.com');
      Swal.fire({
        width: '400px',
        icon: 'success',
        title: '클립보드에 복사되었습니다.',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '클립보드 복사에 실패하였습니다.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <AboutPageContain ref={aboutRef}>
      <GridContain>
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
          <InfoContain>
            <AboutPageInfoText isHover={false}>Call: 010-2246-6787</AboutPageInfoText>
            <AboutPageEmailBtn role="button" onClick={handleCopyClipBoard}>
              <AboutPageInfoText role="button" aria-label="G-mail: fbzbffldj998@naver.com" isHover>
                G-mail: fbzbffldj998@naver.com
              </AboutPageInfoText>
            </AboutPageEmailBtn>
          </InfoContain>
          <SocialMenu>
            <SocialMenuList>
              {ABOUT_LOGO_DATA.map(items => (
                <SocialMenuListItem key={items.iconKey}>
                  <SocialMenuLink href={items.iconLink} target="_blank" rel="noopener noreferrer">
                    <SocialMenuIcon src={items.iconImg} alt={items.iconAlt} />
                  </SocialMenuLink>
                </SocialMenuListItem>
              ))}
            </SocialMenuList>
          </SocialMenu>
        </GridItems>
        <GridItems>
          <BulbImg src={`${process.env.PUBLIC_URL}/images/AboutPageImgs/bulb.gif`} alt="bulbImg" />
        </GridItems>
      </GridContain>
      <MoContain>
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
        <InfoContain>
          <AboutPageInfoText isHover={false}>Call: 010-2246-6787</AboutPageInfoText>
          <AboutPageEmailBtn onClick={handleCopyClipBoard}>
            <AboutPageInfoText isHover>G-mail: fbzbffldj998@naver.com</AboutPageInfoText>
          </AboutPageEmailBtn>
        </InfoContain>
        <SocialMenu>
          <SocialMenuList>
            {ABOUT_LOGO_DATA.map(items => (
              <SocialMenuListItem key={items.iconKey}>
                <SocialMenuLink href={items.iconLink} target="_blank" rel="noopener noreferrer">
                  <SocialMenuIcon src={items.iconImg} alt={items.iconAlt} />
                </SocialMenuLink>
              </SocialMenuListItem>
            ))}
          </SocialMenuList>
        </SocialMenu>
      </MoContain>
    </AboutPageContain>
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

const AboutPageContain = styled.div`
  display: flex;
  position: relative;
  width: 1000px;
  height: 880px;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 400px;
  }
`;

const GridContain = styled.div`
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

const GridItems = styled.div`
  display: flex;
  position: relative;
  width: 495px;
  height: 600px;
  justify-items: center;
  align-items: center;
`;

const AboutPageTitleRoller = styled.div`
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

const AboutPageTitleRollerText = styled.span`
  position: relative;
  font-size: 36px;
  font-weight: 700;
  top: 0;
  color: ${({ theme }) => theme.colors.orange};
  animation: ${Roller} 5s infinite;
`;

const AboutPageTitle = styled.div<{ marginTopProps: string }>`
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

const InfoContain = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
  @media screen and (max-width: 500px) {
    margin-top: 100px;
  }
`;

const AboutPageEmailBtn = styled.button`
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
  color: ${({ theme }) => theme.colors.gray300};
  :hover {
    color: ${({ isHover, theme }) => isHover && theme.colors.orange};
  }
`;

const SocialMenu = styled.div`
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

const SocialMenuList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 40px;
`;

const SocialMenuListItem = styled.li`
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
  height: 512px;
`;

const MoContain = styled.div`
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
