import styled, { css } from 'styled-components';

import { flexMixin, colorInteract, showActive } from '../../shared/mixins';
import { IAppProps } from '../../shared/models/props.interface';

const desktopNav = css`
    ${flexMixin('space-evenly', 'center', 'row')};
    min-width: 45vw;
    & > .divider {
        width: 0.1rem;
        height: 2rem;
    }
`;

const mobileNav = css`
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
    height: 90vh;
    width: 30vw;
    padding: 0 2rem;
    background: rgba(0, 0, 0, 0.87);
    backdrop-filter: saturate(180%) blur(15px);
    ${flexMixin('flex-start', 'flex-start', 'column')};
    gap: 5rem;
    border-left: 0.5px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.25);
    & > a {
        font-weight: 500;
        font-size: 2rem;
        margin-top: 2rem;
    }
    & > .divider {
        display: none;
    }
`;

const layoutSetup = ({ className }: IAppProps) => {
    if (className === 'desktop-nav') {
        return desktopNav;
    }
    return mobileNav;
};

const StyledNav = styled.nav`
    & > .divider {
        background: ${({ theme }) => theme.colors.accent};
    }
    & > a {
        position: relative;
        letter-spacing: 0.125rem;
        ${colorInteract}
    }
    & > .active {
        ${showActive}
    }
    ${layoutSetup}
`;

export default StyledNav;
