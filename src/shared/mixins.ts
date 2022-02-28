import { css } from 'styled-components';

export const gridMixin = (columns: string, rows: string, gap?: string) => css`
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: ${rows};
    gap: ${gap};
`;

export const flexMixin = (justify: string, align: string, direction: string) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
`;

export const maxContainer = () => css`
    height: 100%;
    width: 100%;
`;

export const colorInteract = () => css`
    transition: color 100ms linear;
    @media (hover: hover) {
        &:hover {
            color: ${({ theme }) => theme.colors.accent};
        }
    }
`;
export const colorPress = () => css`
    &:active {
        transform: scale(1.1);
        box-shadow: 0px 0px 10px 5px rgba(${({ theme }) => theme.colors.accentRGB}, 0.35);
    }
`;

export const showActive = () => css`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    position: relative;
    &::before {
        position: absolute;
        content: '';
        bottom: -0.5rem;
        width: 100%;
        height: 0.15rem;
        background: ${({ theme }) => theme.colors.accent};
    }
`;

export const customContainer = (h: string, w: string) => css`
    height: ${h}%;
    width: ${w}%;
`;
