import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
    typography: {
        weights: {
            thin: 100,
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    colors: {
        mainBg: '#151515',
        accent: '#DEC16D',
        accentRGB: '222, 193, 109',
        secondary: '#2A2B31',
        mainText: '#eee',
        secondaryText: '#606166',
        black: '#222',
        onyx: '#3B3C3F',
        deepBlack: '#000000',
        stonks: '#7AC231',
        notStonks: '#DA0A0A',
    },
};

export { myTheme };
