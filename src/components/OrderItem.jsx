import React from 'react';
import '@styles/OrderItem.scss';

import iconclose from '@icons/icon_close.png';

const OrderItem = () => {
	const img = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	return (
		<div className="OrderItem">
			<figure>
				<img src={img} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src= { iconclose } alt="close" />
		</div>
	);
}

export default OrderItem;
