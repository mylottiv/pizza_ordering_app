import React from 'react';
import {NavButton} from '../'

function NavBar(props) {
    return (
    <ul className="flex flex-col w-56 bg-green-600 my-1">
      <NavButton>Home</NavButton>
      <NavButton>Pizza</NavButton>
      <NavButton>Sides</NavButton>
      <NavButton>Salads</NavButton>
      <NavButton>Desserts</NavButton>
      <NavButton type='disabled'>Disabled</NavButton>
    </ul>
    )
}

export default NavBar;