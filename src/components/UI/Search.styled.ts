import styled from 'styled-components';

import { flexMixin } from '../../shared/mixins';

export const StyledSearch = styled.form`
    position: relative;
    ${flexMixin('center', 'center', 'row')};
    height: 100%;
    margin: auto;
    background: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 0.75rem;

    & > input {
        width: 100%;
        padding-right: 25%;
        padding: 0.25rem 25% 0.25rem 1rem;
        outline: none;
        background: transparent;
        border-radius: 0.5rem;
        font-size: 1.6rem;
        letter-spacing: 0.125rem;
        border: none;
        color: ${({ theme }) => theme.colors.mainText};
        transition: all 150ms ease-in-out;
        &:active,
        &:focus {
            outline: 1px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.75);
        }
    }

    & > button {
        position: absolute;
        top: 5%;
        bottom: 5%;
        right: 0;
        height: 100%;
        font-size: 1.6rem;
        font-weight: ${({ theme }) => theme.typography.weights.medium};
        letter-spacing: 0.1rem;
        width: auto;
        margin: auto;
        background: ${({ theme }) => theme.colors.mainBg};
        color: ${({ theme }) => theme.colors.mainText};
        padding-inline: 0.5rem;
        border: none;
        transition: all 150ms ease-in-out;
        border-radius: 0 0.5rem 0.5rem 0;
        @media (hover: hover) {
            &:hover {
                color: ${({ theme }) => theme.colors.mainBg};
                background: ${({ theme }) => theme.colors.accent};
            }
        }
    }
    .activeBtn {
        color: ${({ theme }) => theme.colors.mainText};
        background: ${({ theme }) => theme.colors.onyx};
    }
`;
