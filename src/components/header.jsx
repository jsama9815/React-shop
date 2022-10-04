import React, { useState,useContext, useEffect } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';
import appcontext from '../contex/AppContex';
import List from './List'


const Header = () => {
	const [ toggle, setToggle ] = useState(false);
	const { state } = useContext(appcontext);
	const handleToggle = () => {
		setToggle(!toggle);
	}
	const navBarElements = [
		{ name: 'All', to: '/', class: 'title' },
		{ name: 'Clothes', to: '/', },
		{ name: 'Electronics', to: '/', },
		{ name: 'Furnitures', to: '/', },
		{ name: 'Toys', to: '/', },
		{ name: 'Others', to: '/', },
	]
	return (
		<nav>
			<img src={ menu } alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={ logo } alt="logo" className="nav-logo" />
				<List elements={navBarElements}/>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>test@example.com</li>
					<li className="navbar-shopping-cart">
						<img src= { shopping_cart } alt="shopping cart" />
						{state.cart.length ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
		</nav>
	);
}

export default Header;
