import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addtocartimage from '@icons/bt_add_to_cart.svg';
import Appcontext from '../contex/AppContex';

const ProductItem = ({ product }) => {
	const { addtoCart } = useContext(Appcontext);
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${ product.price }</p>
					<p>{ product.title }</p>
				</div>
				<figure onClick={() => addtoCart(product)} >
					<img src={ addtocartimage } alt=""  className='add' />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
