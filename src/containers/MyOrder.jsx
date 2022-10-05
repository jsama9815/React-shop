import React, { useContext,useState } from 'react';
import AppContex from '../contex/AppContex';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';



const MyOrder = (props) => {
	const { state } = useContext(AppContex);
	const [toggleClose,setToggleClose] = useState(false);

	const sumTotal = () =>{
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	};

	const handleCloseMenu = () => {
		setToggleClose(!toggleClose);
		props.closeMenu();
	};

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={handleCloseMenu} className='arrow'/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map( product => (
					<OrderItem product = { product } key={ `orderItem-${ product.id }`} />
				))}
				<div className="order order-total">
					<p>
						<span>Total</span>
					</p>
					<p>${ sumTotal() }</p>
				</div>
				<button className="primary-button add-cart-button">
					Checkout
				</button>
			</div>
			
		</aside>
	);
}

export default MyOrder;
