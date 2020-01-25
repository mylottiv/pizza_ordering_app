import React from 'react';
import {NavLink} from 'react-router-dom';

function NavButton(props) {

    return ((props.type !== 'disabled') ?
        <li className="flex flex-row my-2">
            <NavLink className="navbar-button" activeClassName="active-navbar-button" exact to={props.children === 'Home' ? '/home' : `/${props.children.substring(0,1).toLowerCase() + props.children.substring(1)}`}>
                {props.children}
            </NavLink>
        </li>
        :
        <li className="flex flex-row my-2">
            <a className="flex-1 text-center inline-block py-1 px-3 text-gray-400 cursor-not-allowed font-bold">{props.children}</a>
        </li>
    )

}

export default NavButton