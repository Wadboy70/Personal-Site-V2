import React from 'react';
import Pages from '../../utils/pages';
import styled from 'styled-components/macro';

const NavContainer = styled.div`
    height: 3rem;
    position: fixed;
    width: 100%;
`;
const Nav = styled.nav`
    width: inherit;
    padding: 0 10vw;
    display: flex;
    justify-content: center;
`;
const NavList = styled.ul`
    width: 80%;
    display: flex;
`;
const NavListItem = styled.li`
    list-style-type: none;
    width: fit-content;
`;
const Navbar = () => {
    return(
        <NavContainer>
            <Nav>
                <NavList>
                    {
                        Pages.map(page => (
                            <NavListItem key = { page.name }>
                                <a href={page.location}>
                                    { page.name }
                                </a>
                            </NavListItem>
                        ))
                    }
                </NavList>
            </Nav>
        </NavContainer>
    );
};

export default Navbar;