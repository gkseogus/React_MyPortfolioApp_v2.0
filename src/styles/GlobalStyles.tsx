import { css } from '@emotion/react';
import WantedSansSemiBold from 'fonts/WantedSans-SemiBold.ttf';

const globalStyles = css`
  @font-face {
    font-family: 'WantedSansSemiBold';
    font-display: swap;
    src: local('WantedSansSemiBold'), local('WantedSansSemiBold');
    src: url(${WantedSansSemiBold}) format('truetype');
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-family: 'WantedSansSemiBold';
    letter-spacing: 0.5px;
    margin: 0px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
`;

export default globalStyles;
