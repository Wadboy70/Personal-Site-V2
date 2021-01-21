import React from 'react';
import Pages from '../../utils/pages';
import styled from 'styled-components/macro';

const NavContainer = styled.div`
    width: 100%;
    height: 3rem;

`;
const NavList = styled.ul`

`;
const NavListItem = styled.li`

`;
const Navbar = () => {
    return(
        <NavContainer>
            <nav>
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
            </nav>
        </NavContainer>
    );
};

export default Navbar;