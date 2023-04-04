import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Hamburger from 'components/icon/Hamburger';
import Sidebar from '../Sidebar';

const Navbar = () => {
  const {
    colors: { black },
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <NavbarContain>
      <NavbarTitle>HDH</NavbarTitle>
      <HamburgerBtn onClick={() => toggleSide()} displayProps={isOpen ? 'none' : 'normal'}>
        <Hamburger color={black} />
      </HamburgerBtn>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </NavbarContain>
  );
};

export default Navbar;

const NavbarContain = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  background-color: none;
`;

const NavbarTitle = styled.title`
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 60px;
  font-size: 32px;
  font-weight: bold;
`;

const HamburgerBtn = styled.button<{ displayProps: string }>`
  width: 50px;
  height: 50px;
  margin-right: 60px;
  display: ${({ displayProps }) => displayProps};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  cursor: pointer;
`;
