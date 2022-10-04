import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import iconclose from '@icons/icon_close.png';
import appcontext from '../contex/AppContex';


const OrderItem = ({ product }) => {
	const {removeFromCart} = useContext(appcontext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={ product.images[0] } alt={ product.title } />
			</figure>
			<p>{ product.title }</p>
			<p>${ product.price }</p>
			<img src= { iconclose } alt="close" onClick={() => removeFromCart(product)} />
		</div>
	);
}

export default OrderItem;
