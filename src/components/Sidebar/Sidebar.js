import React from 'react';

import { SidebarList, SidebarListItem, SidebarLink, SidebarImage } from './Sidebar.styles.js';
import { SideBarContainer } from './Sidebar.styles.js';

const Sidebar = ({orientation, children, images}) =>{
	return(
		<SideBarContainer>
			<SidebarList>
				{
					images.map( (Logo, index)  => (
						<SidebarListItem>
							<SidebarLink>
								<Logo/>
							</SidebarLink>
						</SidebarListItem>
					))
				}
			</SidebarList>
		</SideBarContainer>
	);
};

export default Sidebar;
