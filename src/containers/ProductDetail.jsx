import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '@styles/ProductDetail.scss';

import import_close from '@icons/icon_close.png';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={ import_close } alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
