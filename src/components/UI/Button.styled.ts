import styled, { css } from 'styled-components';
import { colorPress, colorInteract } from '../../shared/mixins';

type IBtnProps = {
    ctaAltHover?: boolean;
    alignSelf?: string;
};

type IEmptyBtnProps = {
    maxWidth?: string;
    maxHeight?: string;
} & IBtnProps;

const standardEffect = css`
    background: ${({ theme }) => theme.colors.mainText};
`;
const altEffect = css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.mainBg};
    border: 1.5px solid ${({ theme }) => theme.colors.accent};
`;

const getCtaEffect = ({ ctaAltHover }: IBtnProps) => {
    if (ctaAltHover) {
        return altEffect;
    }
    return standardEffect;
};

const commonBtnStyling = css<IBtnProps>`
    letter-spacing: 0.125rem;
    text-align: center;
    max-width: 100%;
    padding: 1.5rem 2.5rem;
    max-width: 30rem;
    min-width: 2rem;
    min-height: 2rem;
    color: ${({ theme }) => theme.colors.mainText};
    align-self: ${({ alignSelf }) => alignSelf || 'inherit'};
`;

export const CtaButton = styled.button`
    border: 1.5px solid ${({ theme }) => theme.colors.mainText};
    color: ${({ theme }) => theme.colors.mainText};
    font-weight: 700;
    border-radius: 0.15rem;
    background: transparent;
    transition: all 200ms ease-in-out;
    font-size: 2.4rem;
    align-self: ${({ alignSelf }) => alignSelf || 'initial'};
    ${commonBtnStyling};
    ${colorPress}
    @media (hover: hover) {
        &:hover {
            ${getCtaEffect};
        }
    }
    &:active {
        ${getCtaEffect}
    }
`;
export const EmptyButton = styled.button<IEmptyBtnProps>`
    width: auto;
    height: auto;
    background: transparent;
    display: flex;
    border-radius: 50%;
    border: none;
    transition: all 100ms ease-in-out;
    max-height: ${({ maxHeight }) => maxHeight || '5rem'};
    max-width: ${({ maxWidth }) => maxWidth || '5rem'};
    ${getCtaEffect}
    background: transparent;
    ${colorPress}
    &>svg {
        color: ${({ theme }) => theme.colors.mainText};
        ${colorInteract}
    }
`;
