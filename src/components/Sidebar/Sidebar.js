import React from 'react';

import { SidebarList, SidebarListItem, SidebarLink, SidebarImage } from './Sidebar.styles.js';
import { SideBarContainer } from './Sidebar.styles.js';

import Email from '../../assets/Email.svg';

const Sidebar = ({orientation, children, images}) =>{
	console.log(images[0]);
	return(
		<SideBarContainer>]
			<SidebarList>
				{
					images.map( (image, index)  => (
						<SidebarListItem>
							<SidebarLink>
								<SidebarImage src = {image}/>
							</SidebarLink>
						</SidebarListItem>
					))
				}
			</SidebarList>
		</SideBarContainer>
	);
};

export default Sidebar;
