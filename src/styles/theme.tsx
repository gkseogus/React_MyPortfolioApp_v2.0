import MEDIA_QUERY_END_POINT from 'utils/constants';

export const colors = {
  black: '#2B2B2B',
  white: '#FFFFFF',
  white50: '#F3EAE8',
  gray: '#DCDCDC',
  gray100: '#E2E2E2',
  gray900: '#5D5D5D',
  red: '#FF4747',
  orange: '#FF8F51',
  orange50: '#ffb279',
  shadow: 'rgba(0, 0, 0, 0.5)',
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
