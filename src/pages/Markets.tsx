import { useState } from 'react';

import { StyledSection } from '../components/UI/Section.styled';
import { EmptyButton } from '../components/UI/Button.styled';
import { StyledSearch } from '../components/UI/Search.styled';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

const Markets = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const searchActiveHandler = () => setIsSearchActive((prevState) => !prevState);

    return (
        <StyledSection>
            <div className="markets-header">
                <h2>Markets</h2>
                <div className="search-wrap">
                    {isSearchActive && (
                        <StyledSearch>
                            <input type="text" placeholder="By ID or name" />
                            <button className={isSearchActive && 'activeBtn'} type="submit">
                                Search
                            </button>
                        </StyledSearch>
                    )}
                    <EmptyButton onClick={searchActiveHandler}>
                        <SearchAlt size={17} />
                    </EmptyButton>
                </div>
            </div>
        </StyledSection>
    );
};

export default Markets;
