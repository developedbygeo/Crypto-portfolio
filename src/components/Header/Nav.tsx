import { NavLink } from 'react-router-dom';

import { IAppProps } from '../../shared/models/props.interface';
import StyledNav from './Nav.styled';

const Nav = ({ className }: IAppProps) => {
    return (
        <StyledNav className={className}>
            <NavLink to="/markets">Markets</NavLink>
            <div className="divider"></div>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <div className="divider"></div>
            <NavLink to="/transactions">Transactions</NavLink>
            <div className="divider"></div>
            <NavLink to="/calculator">Calculator</NavLink>
            <div className="divider"></div>
            <NavLink to="/getting-started">Get Started</NavLink>
        </StyledNav>
    );
};

export default Nav;
