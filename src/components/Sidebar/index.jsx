import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

function SideBar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/">Pizzas</SidebarLink>
				<SidebarLink to="/">Deserts</SidebarLink>
				<SidebarLink to="/">Full Menu</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/">Order Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>			
	)
}
export default SideBar