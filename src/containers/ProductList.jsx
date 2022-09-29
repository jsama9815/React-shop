import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import axios from 'axios';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState ([]);
	useEffect(async() => {
		const Response = await axios(API);
		setProducts(Response.data);
	}, []); 
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				)) }
				
			</div>
		</section>
	);
}

export default ProductList;
