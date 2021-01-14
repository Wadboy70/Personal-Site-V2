import React, { FunctionComponent } from 'react';

import styled from 'styled-components/macro';

interface SidebarProps {
	left?: boolean;
	children?: React.ReactNode;
};

const SideBarContainer = styled.div<SidebarProps>`
	position: fixed;
	left: ${({left}) => left ? '0px' : 'auto'};
	right: ${({left}) => left ? 'auto' : '0px'};
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
		height: 25vh;
		width: 1px;
		background-color: white;
	}
	> * {
		margin: 0 4vw;
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
