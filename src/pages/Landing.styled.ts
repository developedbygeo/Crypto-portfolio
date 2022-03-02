import styled from 'styled-components';

import { customContainer, flexMixin } from '../shared/mixins';

interface LandingProps {
    bg?: string;
}

const StyledLanding = styled.section<LandingProps>`
    padding: 4vh;
    padding-block: 15vh;
    background-size: cover;
    color: ${({ theme }) => theme.colors.mainText};
    background: url(${(props) => props.bg || '#1D2024'}) no-repeat center;
    ${customContainer('100', '100')};
    ${flexMixin('space-evenly', 'flex-start', 'column')};

    & > .text-wrap {
        ${flexMixin('space-evenly', 'flex-start', 'column')};
        gap: 2rem;
        & > h1 {
            line-height: 25px;
        }
        & > h2 {
            font-weight: ${({ theme }) => theme.typography.weights.light};
        }
        span {
            color: ${({ theme }) => theme.colors.accent};
        }
    }
    & > .cta-wrap {
        ${customContainer('40', '100')};
        & > button {
            height: 8rem;
            width: 60%;
            max-width: 25rem;
        }
    }
    .perf {
        font-weight: 500;
    }
`;

export default StyledLanding;
