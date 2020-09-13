import React from 'react';
import './NavItem.scss';

const navItem = (props) => {
    return (
        <li className="nav-item">
            {props.children}
        </li>
    );
};

export default navItem;