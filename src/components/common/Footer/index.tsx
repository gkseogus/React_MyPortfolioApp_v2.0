import React from 'react';
import styled from '@emotion/styled';

const Footer = () => (
  <FooterContain>
    <FooterTitle>
      개발자 한대현의 포트폴리오 사이트 입니다. <br />
      첫 번째 포트폴리오 사이트의 컨텐츠가 중구난방이라서 <br />두 번째 포트폴리오 사이트를 구축하였습니다.
      <br />
      <br />첫 번째 포트폴리오 사이트를 구경하고 싶으시면 아래 사이트를 눌러주세요
    </FooterTitle>
    <FooterLink href="https://master.d2cvr0cqafmcqo.amplifyapp.com" target="_blank">
      첫번째 포트폴리오 사이트
    </FooterLink>
  </FooterContain>
);

export default Footer;

const FooterContain = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
const FooterTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
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
