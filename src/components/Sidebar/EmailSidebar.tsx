import React from 'react';

import styled from 'styled-components/macro';
import Sidebar from './Sidebar';

const EmailBox = styled.a`
    display: flex;
    font-size: 3.5vh;
    font-family: 'Roboto Mono', serif;
    writing-mode: vertical-rl;
    text-decoration: none;
`;
const EmailSidebar = () =>{
	return(
        <Sidebar left = { false }>
            <EmailBox className = 'growOnHover' href = 'mailto:s.oluwaleimu@gmail.com'>
                s.oluwaleimu@gmail.com
            </EmailBox>
        </Sidebar>
	);
};

export default EmailSidebar;
