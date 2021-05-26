import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

function Hero() {
	const [isSidebarOpen, setIsSideBarOpen] = useState(false)

	const toggleSidebar = () => setIsSideBarOpen(!isSidebarOpen)

	return (
		<HeroContainer>
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar}/>
			<HeroContent>
				<HeroItems>
					<HeroH1>Greatest Pizza Ever</HeroH1>
					<HeroP>Ready in 10 minutes</HeroP>
					<HeroBtn>Place Order</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	)
}
export default Hero