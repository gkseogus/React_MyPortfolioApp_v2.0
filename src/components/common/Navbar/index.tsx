import React from 'react';
import styled from '@emotion/styled';
import useScrollDown from 'hook/useScrollDown';
import NAVBAR_DATA from 'components/common/Navbar/navbarData.json';

interface PageRefProps {
  skillsRef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}

interface NavbarDataFace {
  text: string;
  refType: string;
}

const Navbar = ({ skillsRef, careerRef, projectRef }: PageRefProps) => {
  const isScroll = useScrollDown();

  /**
   * div 요소로 이동시킴
   * @param refType - 각 요소의 ref
   */
  const handlePageMove = (refType: string): void => {
    switch (refType) {
      case 'skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'career':
        careerRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'project':
        projectRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer isScroll={isScroll}>
      <NavbarSubContainer>
        <NavbarTitle isScroll={isScroll}>HDH</NavbarTitle>
        <NavItemsWrap>
          {NAVBAR_DATA.map((item: NavbarDataFace) => (
            <NavItemBtn
              role="button"
              aria-label="메뉴"
              onClick={(): void => handlePageMove(item.refType)}
              isScroll={isScroll}
            >
              {item.text}
            </NavItemBtn>
          ))}
        </NavItemsWrap>
      </NavbarSubContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav<{ isScroll: boolean }>`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0px;
  transition: 0.8s;
  background-color: ${({ isScroll, theme }) => (isScroll ? theme.colors.black : theme.colors.white)};
  z-index: 10;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const NavbarSubContainer = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  gap: 10px;
`;

const NavbarTitle = styled.title<{ isScroll: boolean }>`
  display: flex;
  position: relative;
  font-size: 32px;
  font-weight: bold;
  transition: 1s;
  color: ${({ isScroll, theme }) => (isScroll ? theme.colors.white : theme.colors.black)};
`;

const NavItemsWrap = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const NavItemBtn = styled.button<{ isScroll: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
  font-size: 32px;
  font-weight: bold;
  color: ${({ isScroll, theme }) => (isScroll ? theme.colors.white : theme.colors.black)};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray900};
  }
`;
