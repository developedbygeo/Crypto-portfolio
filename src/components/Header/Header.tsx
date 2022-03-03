import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Nav from './Nav';
import { ReactComponent as LogoSVG } from '../../assets/vault.svg';
import { Menu } from '@styled-icons/material-rounded/Menu';
import StyledHeader from './Header.styled';
import { EmptyButton } from '../UI/Button.styled';

const Header = () => {
    const [isNavOpen, setNavIsOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setNavIsOpen(false);
    }, [pathname]);

    const navToggleHandler = () => setNavIsOpen((prevState) => !prevState);

    return (
        <>
            <StyledHeader>
                <div className="container">
                    <Link to="/" className="logo">
                        <LogoSVG />
                    </Link>
                    <EmptyButton className="menu" title="Toggle menu" onClick={navToggleHandler}>
                        <Menu />
                    </EmptyButton>
                    <Nav className="desktop-nav" />
                    {isNavOpen && <Nav className="mobile-nav" />}
                </div>
            </StyledHeader>
        </>
    );
};

export default Header;
