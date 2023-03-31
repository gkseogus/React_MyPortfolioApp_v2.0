import '@emotion/react';
import { ColorTheme, BreakPointTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorTheme;
    breakPoint: BreakPointTheme;
  }
}
