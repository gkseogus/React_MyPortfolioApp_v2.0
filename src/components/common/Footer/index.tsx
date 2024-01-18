import React from 'react';
import styled from '@emotion/styled';

const Footer = () => (
  <FooterContainer>
    <FooterTitle>
      개발자 한대현의 포트폴리오 사이트 입니다. <br />
      첫 번째 포트폴리오 사이트의 컨텐츠가 중구난방이라서 <br />두 번째 포트폴리오 사이트를 구축하였습니다.
      <br />
      <br />첫 번째 포트폴리오 사이트를 구경하고 싶으시면 아래 사이트를 눌러주세요
    </FooterTitle>
    <FooterLink
      href="https://master.d2cvr0cqafmcqo.amplifyapp.com"
      target="_blank"
      rel="noopener noreferrer"
      title="첫 번째 포트폴리오"
    >
      첫번째 포트폴리오 사이트
    </FooterLink>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.orange100};
  @media screen and (max-width: 500px) {
    max-width: 500px;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

const FooterTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const FooterLink = styled.a`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
