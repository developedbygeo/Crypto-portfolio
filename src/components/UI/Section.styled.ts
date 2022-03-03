import styled from 'styled-components';

import { baseSectionStyling } from '../../shared/styles/section.styling';
import { flexMixin } from '../../shared/mixins';

export const StyledSection = styled.section`
    ${baseSectionStyling}

    .markets-header {
        ${flexMixin('space-between', 'center', 'row')};
    }
    .search-wrap {
        ${flexMixin('space-between', 'center', 'row')};
        gap: 1.25rem;
    }
`;
