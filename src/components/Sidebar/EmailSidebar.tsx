import React from 'react';

import styled from 'styled-components/macro';
import Sidebar from './Sidebar';

const EmailBox = styled.a`
    display: flex;
    font-size: 3.5vh;
    writing-mode: vertical-rl;
`;
const EmailSidebar = () =>{
	return(
        <Sidebar left = { false }>
            <EmailBox className = 'growOnHover'>
                s.oluwaleimu@gmail.com
            </EmailBox>
        </Sidebar>
	);
};

export default EmailSidebar;
