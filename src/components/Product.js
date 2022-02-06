import React, { useEffect, useState } from 'react'
import ProductDetails from './ProductDetails'

function Product() {
	const [product, setProduct] = useState(
		[
			{
				id: 1,
				name: 'Rice',
				description: 'High Quality Bashmoti Chal',
				price: '90 Tk per KG',
				category: 'Grocery',
			},
			{
				id: 2,
				name: 'SOAP',
				description: 'Indian Lux Soap',
				price: '50 Tk',
				category: 'Grocery',
			},
			{
				id: 3,
				name: 'Samsung S20FE',
				description: 'Official Samsung Phone',
				price: '50,000 Tk',
				category: 'Electronics',
			}
		]
	)

	const productDetails = product.map(product => <ProductDetails product={product} />)

	const[isDetails, setDetails] = useState(true)

	const[showDetails, setShowDetails] = useState(false)
	
	return (
		<div>
			<h2 style={{ color: 'red'}}>List of Products</h2>
			<ol>{product.map(item => (
				<li key={item.id}>
					<h5>Product: {item.name}, Price: {item.price}</h5>
					<button onClick={() => setShowDetails(!showDetails)}>Details</button>
					{showDetails && (<ProductDetails product={item} />)}
				</li>
				))}
			</ol>
		</div>
	)
}

export default Product
