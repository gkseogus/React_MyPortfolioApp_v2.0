import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CAREER_DATA from 'pages/CareerPage/careerData.json';
import Baby64 from 'components/icon/Baby64';
import School64 from 'components/icon/School64';
import Office64 from 'components/icon/Office64';

interface CareerPageRefProps {
  careerRef: React.RefObject<HTMLDivElement>;
}

const CareerPage = ({ careerRef }: CareerPageRefProps) => {
  const {
    colors: { white, black, orange },
  } = useTheme();

  return (
    <CareerPageContain ref={careerRef}>
      <CareerPageTitle>CAREER</CareerPageTitle>
      <CareerPageTitleLineContain>
        <VerticalTimeline lineColor={black}>
          {CAREER_DATA.map(items => (
            <VerticalTimelineElement
              key={items.key}
              className="vertical-timeline-element--work"
              contentStyle={{ background: white, color: black }}
              contentArrowStyle={{ borderRight: `7px solid  ${orange}` }}
              date={items.date}
              iconStyle={{ background: orange, color: orange }}
              icon={
                // eslint-disable-next-line no-nested-ternary
                items.iconType === 'baby' ? (
                  <Baby64 />
                ) : items.iconType === 'school' ? (
                  <School64 />
                ) : (
                  items.iconType === 'office' && <Office64 />
                )
              }
            >
              <CareerPageInfoTitleText className="vertical-timeline-element-title">
                {items.title}
              </CareerPageInfoTitleText>
              <CareerPageInfoText className="vertical-timeline-element-subtitle">{items.infoText}</CareerPageInfoText>
              <CareerPageSubInfoText className="vertical-timeline-element-subtitle">
                {items.subInfoText}
              </CareerPageSubInfoText>
              <CareerPageText>{items.text}</CareerPageText>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </CareerPageTitleLineContain>
    </CareerPageContain>
  );
};

export default CareerPage;

const CareerPageContain = styled.div`
  width: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 500px;
  }
`;

const CareerPageTitle = styled.p`
  display: flex;
  font-size: 64px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    font-size: 32px;
    margin-top: 40px;
  }
`;

const CareerPageTitleLineContain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  @media screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const CareerPageInfoTitleText = styled.h5`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.orange};
`;

const CareerPageInfoText = styled.h6`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

const CareerPageSubInfoText = styled.h6`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

const CareerPageText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;
