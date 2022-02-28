import styled from 'styled-components';
import { flexMixin, customContainer, maxContainer, colorInteract } from '../../shared/mixins';
import { devices } from '../../shared/breakpoints';

const StyledHeader = styled.header`
    height: 10vh;
    width: 100%;
    background: ${({ theme }) => theme.colors.deepBlack};

    & > .container {
        ${flexMixin('space-between', 'center', 'row')};
        ${customContainer('100', '90')};
        margin: auto;
    }

    .menu {
        background: transparent;
        height: auto;
        display: flex;
        border-radius: 50%;
        border: none;
        transition: all 100ms ease-in-out;
        & > svg {
            color: ${({ theme }) => theme.colors.mainText};
            width: 5rem;
            ${colorInteract}
        }
        @media ${devices.tablet} {
            display: none;
        }
    }

    .logo {
        height: 100%;
        ${flexMixin('center', 'center', 'column')}
        & > svg {
            ${maxContainer()}
        }
    }
    .desktop-nav {
        @media screen and (max-width: 767px) {
            display: none;
        }
    }
`;

export default StyledHeader;
