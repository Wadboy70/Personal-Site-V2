import React, { FunctionComponent } from 'react';

import styled from 'styled-components/macro';

interface SidebarProps {
	left?: boolean;
	children?: React.ReactNode;
};

const SideBarContainer = styled.div<SidebarProps>`
	left: ${({left}) => left ? '50px' : 'auto'};
	height: 100vh;
	width: fit-content;
	min-width: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	::before, ::after{
		content: '';
		display: inline-block;
		height: 30vh;
		width: 1px;
		background-color: white;
	}
`;

const Sidebar: FunctionComponent<SidebarProps> = ({left = true, children}) =>{
	return(
		<SideBarContainer left = {left}>
			{ children && children }
		</SideBarContainer>
	);
};

export default Sidebar;
