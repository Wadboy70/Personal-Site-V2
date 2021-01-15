import React from 'react';

import styled from 'styled-components/macro';
import Sidebar from './Sidebar';

const EmailBox = styled.a`
    display: flex;
`;
const EmailSidebar = () =>{
	return(
        <Sidebar left = { false }>
            <EmailBox>
                s.oluwaleimu@gmail.com
            </EmailBox>
        </Sidebar>
	);
};

export default EmailSidebar;
