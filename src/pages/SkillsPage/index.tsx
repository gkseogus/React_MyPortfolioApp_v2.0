import React from 'react';
import styled from '@emotion/styled';
import SKILLS_LOGO_DATA from 'pages/SkillsPage/skillsData';

interface SKillsPageRefProps {
  skillsRef: React.RefObject<HTMLDivElement>;
}

const SkillsPage = ({ skillsRef }: SKillsPageRefProps) => (
  <SkillsPageContain ref={skillsRef}>
    <SkillsPageTitle>SKILL</SkillsPageTitle>
    <SkillsPageSubTitleContain>
      <SkillsPageSubTitle>FRONT</SkillsPageSubTitle>
      <SkillsPageSubTitle>BACK</SkillsPageSubTitle>
      <SkillsPageSubTitle>MANAGE</SkillsPageSubTitle>
    </SkillsPageSubTitleContain>
    <SkillsGridContain>
      <SkillsGridItems className="left">
        {SKILLS_LOGO_DATA.slice(0, 10).map(items => (
          <SkillsGirdItemsImg key={items.iconKey} src={items.iconImg} alt={items.iconAlt} />
        ))}
      </SkillsGridItems>
      <SkillsGridItems className="center">
        {SKILLS_LOGO_DATA.slice(11, 16).map(items => (
          <SkillsGirdItemsImg key={items.iconKey} src={items.iconImg} alt={items.iconAlt} />
        ))}
      </SkillsGridItems>
      <SkillsGridItems className="right">
        {SKILLS_LOGO_DATA.slice(16).map(items => (
          <SkillsGirdItemsImg key={items.iconKey} src={items.iconImg} alt={items.iconAlt} />
        ))}
      </SkillsGridItems>
    </SkillsGridContain>
  </SkillsPageContain>
);

export default SkillsPage;

const SkillsPageContain = styled.div`
  width: 1000px;
  height: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SkillsPageTitle = styled.p`
  display: flex;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
`;

const SkillsPageSubTitleContain = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SkillsPageSubTitle = styled.span`
  width: 128px;
  display: flex;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
`;

const SkillsGridContain = styled.div`
  width: 100%;
  height: 500px;
  transition: 500ms;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  background: ${({ theme }) => theme.colors.white};
  :has(.left:hover) {
    grid-template-columns: 1.5fr 0.75fr 0.75fr;
  }

  :has(.center:hover) {
    grid-template-columns: 0.75fr 1.5fr 0.75fr;
  }

  :has(.right:hover) {
    grid-template-columns: 0.75fr 0.75fr 1.5fr;
  }
`;

const SkillsGridItems = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  :hover {
    background: ${({ theme }) => theme.colors.orange50};
    transition: 300ms;
  }
`;

const SkillsGirdItemsImg = styled.img`
  padding: 10px;
  width: 128px;
  height: 128px;
  object-fit: cover;
  flex-shrink: 0;
`;
