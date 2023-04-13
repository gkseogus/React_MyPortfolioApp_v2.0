import React from 'react';
import styled from '@emotion/styled';
import Close from 'components/icon/Close';
import { keyframes, useTheme } from '@emotion/react';
import SIDE_MENU_ITEMS from 'components/common/Sidebar/sidebarData.json';

interface SideMenuItemsFace {
  key: number;
  menuTextDelay: number;
  menuText: string;
  refType: string;
}

const Sidebar = ({
  isOpen,
  setIsOpen,
  aboutRef,
  skillsRef,
  careerRef,
  projectRef,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}) => {
  const {
    colors: { white },
  } = useTheme();

  const handlePageMove = (refType: string) => {
    switch (refType) {
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
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
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SidebarContain displayProps={isOpen ? 'flex' : 'none'}>
      <SidebarItemsContain>
        <SidebarItemsUl>
          {SIDE_MENU_ITEMS.map((items: SideMenuItemsFace) => (
            <SidebarItemsLi key={items.key} delay={items.menuTextDelay}>
              <SidebarItemsBtn onClick={() => handlePageMove(items.refType)}>
                <SidebarItemsText>{items.menuText}</SidebarItemsText>
              </SidebarItemsBtn>
            </SidebarItemsLi>
          ))}
        </SidebarItemsUl>
      </SidebarItemsContain>
      <CloseBtn
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <Close color={white} />
      </CloseBtn>
    </SidebarContain>
  );
};

export default Sidebar;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SidebarContain = styled.div<{ displayProps: string }>`
  width: 500px;
  height: 2000px;
  position: relative;
  display: flex;
  display: ${({ displayProps }) => displayProps};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  animation: ${fadeIn} 1.5s ease-in-out;
  z-index: 11;
`;

const SidebarItemsContain = styled.div`
  width: 450px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SidebarItemsUl = styled.ul`
  width: 200px;
  height: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 400px;
  justify-content: center;
`;

const SidebarItemsLi = styled.li<{ delay: number }>`
  width: auto;
  height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;

const SidebarItemsBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 60px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  border: 0;
  cursor: pointer;
`;

const SidebarItemsText = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

const CloseBtn = styled.button`
  width: 50px;
  height: 50px;
  margin-right: 60px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.black};
  border: 0;
  cursor: pointer;
`;
