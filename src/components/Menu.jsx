import React from 'react';
import List from './List'
import '@styles/Menu.scss';

const Menu = () => {
	const menuElements = [
		{ name: 'My orders', to: '/', class: 'title' },
		{ name: 'My account', to: '/', },
		{ name: 'Sign out', to: '/', }
	]
	return (
		<div className="Menu">
			<List elements={menuElements} />
		</div>
	);
}

export default Menu;
