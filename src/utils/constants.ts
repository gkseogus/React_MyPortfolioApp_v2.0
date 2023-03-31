const MEDIA_QUERY_END_POINT = {
  SMALL: '768px',
  MEDIUM: '1080px',
  LARGE: '1440px',
  X_LARGE: '1920px',
};

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default MEDIA_QUERY_END_POINT;
