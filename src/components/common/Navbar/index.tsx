import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Hamburger from 'components/icon/Hamburger';
import Sidebar from 'components/common/Sidebar';

const Navbar = () => {
  const {
    colors: { white, orange },
  } = useTheme();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * 햄버거 메뉴 클릭 이벤트 함수
   */
  const toggleSide = () => {
    setIsOpen(true);
  };

  /**
   * 스크롤 다운 이벤트 함수
   */
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContain isScroll={isScroll}>
      <NavbarTitle isScroll={isScroll}>HDH</NavbarTitle>
      <HamburgerBtn isScroll={isScroll} onClick={() => toggleSide()} displayProps={isOpen ? 'none' : 'normal'}>
        <Hamburger color={isScroll ? white : orange} />
      </HamburgerBtn>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavbarContain>
  );
};

export default Navbar;

const NavbarContain = styled.div<{ isScroll: boolean }>`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  transition: 1s;
  background-color: ${({ isScroll, theme }) => (isScroll ? theme.colors.orange : theme.colors.white)};
  z-index: 10;
`;

const NavbarTitle = styled.title<{ isScroll: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 60px;
  font-size: 32px;
  font-weight: bold;
  transition: 1s;
  color: ${({ isScroll, theme }) => (isScroll ? theme.colors.white : theme.colors.orange)};
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
`;
