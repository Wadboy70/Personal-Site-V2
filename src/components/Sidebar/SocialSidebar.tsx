import React from 'react';

import styled from 'styled-components/macro';
import Sidebar from './Sidebar';
import { SocialIcons } from '../../icons';

const Socials = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    li{
        list-style-type: none;
        svg{
            min-height: 7vh;
            width: auto;
        }
;    }
`;
interface IconInfo {
    Icon: React.FunctionComponent,
    url: string
};
const SocialSidebar = () =>{
	return(
        <Sidebar left>
            <Socials>
                {
                    SocialIcons.map((
                        {Icon, url} : IconInfo, i: number) => (
                        <li key = { i } className = 'growOnHover'>
                            <a href= {url}>
                                <Icon/>
                            </a>
                        </li>
                    ))
                }
            </Socials>
        </Sidebar>
	);
};

export default SocialSidebar;
