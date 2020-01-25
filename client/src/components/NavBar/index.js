import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(props) {
    return (
    <ul className="flex flex-col w-56 bg-green-600 my-1">
      <li className="flex flex-row my-2">
        <NavLink className="navbar-button" activeClassName="active-navbar-button" exact to="/">Home</NavLink>
      </li>
      <li className="flex flex-row my-2">
        <NavLink className="navbar-button" activeClassName="active-navbar-button" to="/pizza">Pizza</NavLink>
      </li>
      <li className="flex flex-row my-2">
        <NavLink className="navbar-button" activeClassName="active-navbar-button" to="/sides">Sides</NavLink>
      </li>
      <li className="flex flex-row my-2">
        <NavLink className="navbar-button" activeClassName="active-navbar-button" to="/salads">Salads</NavLink>
      </li>
      <li className="flex flex-row my-2">
        <NavLink className="navbar-button" activeClassName="active-navbar-button" to="/desserts">Desserts</NavLink>
      </li>
      <li className="flex flex-row my-2">
        <NavLink className="flex-1 text-center inline-block py-1 px-3 text-gray-400 cursor-not-allowed font-bold" to="/">Disabled Pill</NavLink>
      </li>
    </ul>
    )
}

export default NavBar;