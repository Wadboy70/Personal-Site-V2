import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

interface SidebarProps {
	left?: boolean;
};

const SideBarContainer = styled.div<SidebarProps>`
	left: ${({left}) => left ? '50px' : 'auto'};
	height: 100vh;
	width: fit-content;
	min-width: 30px;
	background-color: #fff;
`;

const Sidebar: FunctionComponent<SidebarProps> = ({left = true}) =>{
	return(
		<SideBarContainer left = {left}>

		</SideBarContainer>
	);
};

export default Sidebar;
