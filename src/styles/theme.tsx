import MEDIA_QUERY_END_POINT from 'utils/constants';

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  white50: '#F3EAE8',
  gray: '#DCDCDC',
  gray100: '#E2E2E2',
  gray200: '#A7A7A7',
  gray300: '#6E6E6E',
  gray900: '#5D5D5D',
  red: '#FF4747',
  orange: '#FF8F51',
  orange50: '#ffb279',
  orange100: '#FFD29B',
  shadow: 'rgba(0, 0, 0, 0.4)',
};

export type ColorTheme = typeof colors;

export const breakPoint = {
  small: `@media (max-width: ${MEDIA_QUERY_END_POINT.SMALL})`,
  medium: `@media (min-width: 769px) and (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM})`,
  large: `@media (min-width: 1081px}) and (max-width: ${MEDIA_QUERY_END_POINT.LARGE})`,
  xLarge: `@media (min-width: ${MEDIA_QUERY_END_POINT.LARGE})`,
};

export type BreakPointTheme = typeof breakPoint;

const theme = {
  colors,
  breakPoint,
};

export default theme;
