import React from 'react'
import { FeaturedContainer, FeaturedButton } from './FeaturedElements'

function Featured() {
	return (
		<FeaturedContainer>
			<h1>Pizza of the day</h1>
			<p>Truffle alfredo sauce topped with 24 carret gold dust</p>
			<FeaturedButton>Order Now</FeaturedButton>
		</FeaturedContainer>	
	)
}
export default Featured