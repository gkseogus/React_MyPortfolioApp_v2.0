import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Hamburger from 'components/icon/Hamburger';
import Sidebar from 'components/common/Sidebar';
import useScrollDown from 'hook/useScrollDown';
import useScrollProgress from 'hook/useScrollProgress';

interface PageRefProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}

const Navbar = ({ aboutRef, skillsRef, careerRef, projectRef }: PageRefProps) => {
  const {
    colors: { white, orange },
  } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isScroll = useScrollDown();
  const scrollProgressWidth = useScrollProgress();

  /**
   * 햄버거 메뉴 클릭 이벤트 함수
   */
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <NavbarContain isScroll={isScroll}>
      <NavbarTitle isScroll={isScroll}>HDH</NavbarTitle>
      <ScrollProgressBar>
        <ScrollProgress widthProps={scrollProgressWidth} />
      </ScrollProgressBar>
      <HamburgerBtn
        role="button"
        aria-label="햄버거 메뉴 열기"
        isScroll={isScroll}
        onClick={toggleSide}
        displayProps={isOpen ? 'none' : 'normal'}
      >
        <Hamburger color={isScroll ? white : orange} />
      </HamburgerBtn>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        careerRef={careerRef}
        projectRef={projectRef}
      />
    </NavbarContain>
  );
};

export default Navbar;

const NavbarContain = styled.div<{ isScroll: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  transition: 1s;
  background-color: ${({ isScroll, theme }) => (isScroll ? theme.colors.orange : theme.colors.white)};
  z-index: 10;
  @media screen and (max-width: 500px) {
    max-width: 500px;
  }
`;

const NavbarTitle = styled.title<{ isScroll: boolean }>`
  display: flex;
  position: relative;
  width: 50px;
  height: 50px;
  margin-left: 60px;
  font-size: 32px;
  font-weight: bold;
  transition: 1s;
  color: ${({ isScroll, theme }) => (isScroll ? theme.colors.white : theme.colors.orange)};
`;

const ScrollProgressBar = styled.div`
  display: flex;
  position: absolute;
  width: 50%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const ScrollProgress = styled.div<{ widthProps: number }>`
  width: ${({ widthProps }) => widthProps}%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.orange100};
`;

const HamburgerBtn = styled.button<{ isScroll: boolean; displayProps: string }>`
  width: 50px;
  height: 50px;
  margin-right: 60px;
  display: ${({ displayProps }) => displayProps};
  transition: 1s;
  background-color: ${({ isScroll, theme }) => (isScroll ? theme.colors.orange : theme.colors.white)};
  border: 0;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin-right: 60px;
  }
  @media screen and (max-width: 350px) {
    margin-right: 100px;
  }
`;
