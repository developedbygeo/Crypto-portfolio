// import { useState } from 'react';

import { StyledSection } from '../components/UI/Section.styled';
import { EmptyButton } from '../components/UI/Button.styled';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

const Markets = () => {
    // const [isSearchActive, setIsSearchActive] = useState(false);

    return (
        <StyledSection>
            <div className="markets-header">
                <h2>Markets</h2>
                <EmptyButton>
                    <SearchAlt size="3rem" />
                </EmptyButton>
            </div>
        </StyledSection>
    );
};

export default Markets;
