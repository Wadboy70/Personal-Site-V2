import React from 'react';

import styled from 'styled-components/macro';
import Sidebar from '../Sidebar/Sidebar';
import { SocialIcons } from '../../icons';

const Socials = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    margin: 0 4vw;
    li{
        list-style-type: none;
    }
`;
const SocialSidebar = () =>{
	return(
        <Sidebar left>
            <Socials>
                {
                    SocialIcons.map((Icon: React.FunctionComponent, i: number) => (
                        <li key = { i }>
                            <Icon/>
                        </li>
                    ))
                }
            </Socials>
        </Sidebar>
	);
};

export default SocialSidebar;
