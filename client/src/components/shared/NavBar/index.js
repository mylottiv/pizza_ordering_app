import React from 'react';
import {default as NavButton} from './NavButton'

function NavBar(props) {
    return (
    <ul className="flex flex-col w-56 bg-green-600 my-1">
      <NavButton>Home</NavButton>
      <NavButton type='product'>Pizza</NavButton>
      <NavButton type='product'>Sides</NavButton>
      <NavButton type='product'>Salads</NavButton>
      <NavButton type='product'>Desserts</NavButton>
    </ul>
    )
}

export default NavBar;