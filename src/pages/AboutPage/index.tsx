import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import aboutLogoData from 'pages/AboutPage/aboutData';

const AboutPage = () => {
  /**
   * @param {string} text 복사할 문자열
   */
  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      // eslint-disable-next-line no-alert
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('클립보드 복사에 실패하였습니다.');
    }
  };

  return (
    <AboutPageContain>
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
            <AboutPageEmailBtn
              onClick={() => {
                handleCopyClipBoard('fbzbffldj@gmail.com');
              }}
            >
              <AboutPageInfoText isHover>G-mail: fbzbffldj@gmail.com</AboutPageInfoText>
            </AboutPageEmailBtn>
          </InfoContain>
          <SocialMenu>
            <SocialMenuList>
              {aboutLogoData.map(items => (
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
          <img src={`${process.env.PUBLIC_URL}/images/AboutPageImgs/bulb.gif`} alt="bulbImg" />
        </GridItems>
      </GridContain>
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
  width: 1000px;
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GridContain = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
`;

const GridItems = styled.div`
  width: 495px;
  height: 600px;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const AboutPageTitleRoller = styled.div`
  width: 100px;
  height: 4.125rem;
  line-height: 4rem;
  position: relative;
  overflow: hidden;
  display: inline;
  justify-content: center;
  align-items: center;
`;

const AboutPageTitleRollerText = styled.span`
  position: relative;
  top: 0;
  color: ${({ theme }) => theme.colors.red};
  animation: ${Roller} 5s infinite;
`;

const AboutPageTitle = styled.div<{ marginTopProps: string }>`
  width: 100%;
  height: 150px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  font-size: 30px;
  font-weight: bold;
  margin-top: ${({ marginTopProps }) => marginTopProps};
`;

const InfoContain = styled.div`
  width: 100%;
  height: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`;

const AboutPageEmailBtn = styled.button`
  height: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  cursor: pointer;
`;

const AboutPageInfoText = styled.span<{ isHover: boolean }>`
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
  :hover {
    color: ${({ isHover, theme }) => isHover && theme.colors.red};
  }
`;

const SocialMenu = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 200px;
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
  box-shadow: 0 5px 4px ${({ theme }) => theme.colors.shadow};
  &:hover {
    transform: translate(0, -10%);
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

const SocialMenuIcon = styled.img`
  width: 32px;
  height: 32px;
`;
