import styled from 'styled-components';
import { spinning } from '../../../shared/animations';

export type SpinnerProps = {
    alignSelf?: string;
    justifySelf?: string;
};

export const Spinner = styled.div<SpinnerProps>`
    display: inline-block;
    width: 55px;
    height: 55px;
    align-self: ${({ alignSelf }) => alignSelf || 'initial'};
    justify-self: ${({ justifySelf }) => justifySelf || 'initial'};
    &:after {
        content: ' ';
        display: block;
        width: 40px;
        height: 40px;
        margin: 0.4rem;
        border-radius: 50%;
        border: 6px solid ${({ theme }) => theme.colors.mainBg};
        border-color: ${({ theme }) => theme.colors.accent} transparent ${({ theme }) => theme.colors.accent}
            transparent;
        animation: ${spinning} 2s linear infinite;
    }
`;
export const SpinnerMessage = styled.p`
    text-align: center;
    letter-spacing: 0.11rem;
`;
