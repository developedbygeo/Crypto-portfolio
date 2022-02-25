import styled from 'styled-components';
import { flexMixin, customContainer } from '../../shared/mixins';

const StyledHeader = styled.header`
  height: 10vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.deepBlack};

  & > div {
    ${flexMixin('space-between', 'center', 'row')};
    ${customContainer('100', '90')};
    margin: auto;
  }
  button {
    background: transparent;
    border: none;
    outline: none;
    height: 50%;
    transition: all 200ms ease-in-out;
    & > svg {
      color: ${({ theme }) => theme.colors.mainText};
      width: 5rem;
      &:hover {
        color: ${({ theme }) => theme.colors.accent};
      }
    }
  }

  a {
    height: 100%;
    ${flexMixin('center', 'center', 'column')}
    & > svg {
      max-width: 15rem;
      max-height: 80%;
    }
  }
`;

export default StyledHeader;
