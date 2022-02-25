import { Link } from 'react-router-dom';

import { ReactComponent as LogoSVG } from '../../assets/safe.svg';
import { Menu } from '@styled-icons/material-rounded/Menu';
import StyledHeader from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/" title="Home">
          <LogoSVG />
        </Link>
        <button title="Toggle menu">
          <Menu />
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
