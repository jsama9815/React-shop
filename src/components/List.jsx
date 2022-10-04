import React from 'react';
import '@styles/Menu.scss';

const List = ({ elements }) => {
	return (
        <ul>
            {elements.map((element, ix) => (
                <li key={ix}>
                    <a href={element.to} className={element.class ? element.class : ''}>{element.name}</a>
                </li>
            ))}
        </ul>
	);
}

export default List;
