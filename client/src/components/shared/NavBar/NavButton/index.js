import React from 'react';
import {NavLink} from 'react-router-dom';

function NavButton(props) {

    const route = (props.type === 'product') 
        ? `/product/${props.children.substring(0,1).toLowerCase() + props.children.substring(1)}`
        : (props.children === 'Home')
            ? '/home'
            : `/myCart`;

    return (
        <li className="flex flex-row my-2">
            <NavLink className="navbar-button" activeClassName="active-navbar-button" exact to={route}>
                {props.children}
            </NavLink>
        </li>
    )

}

export default NavButton