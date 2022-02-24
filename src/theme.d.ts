import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBg: string;
    accent: string;
    secondary: string;
    mainText: string;
    secondaryText: string;
    black: string;
    deepBlack: string;
  }
}
