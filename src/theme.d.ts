import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            weights: {
                thin: number;
                light: number;
                regular: number;
                medium: number;
                bold: number;
            };
        };
        colors: {
            mainBg: string;
            accent: string;
            accentRGB: string;
            secondary: string;
            mainText: string;
            secondaryText: string;
            black: string;
            deepBlack: string;
            stonks: string;
            notStonks: string;
        };
    }
}
