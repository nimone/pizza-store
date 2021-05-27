import React from 'react'
import {
	ProductsContainer,
	ProductsHeading,
	ProductsWrapper,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductDesc,
	ProductPrice,
	ProductButton
} from './ProductsElements'

function Products({ heading, data }) {
	return (
		<ProductsContainer>
			<ProductsHeading>{heading}</ProductsHeading>
			<ProductsWrapper>
				{data.map(product => (
					<ProductCard key={product.id}>
						<ProductImg src={product.img} alt={product.alt} />
						<ProductInfo>
							<ProductTitle>{product.name}</ProductTitle>
							<ProductDesc>{product.desc}</ProductDesc>
							<ProductPrice>${product.price}</ProductPrice>
							<ProductButton>Add to Cart</ProductButton>
						</ProductInfo>
					</ProductCard>
				))}
			</ProductsWrapper>
		</ProductsContainer>
	)
}
export default Products