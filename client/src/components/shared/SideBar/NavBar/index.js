import React from 'react';
import NavButton from './NavButton'

function NavBar(props) {
  return (
    <ul className='flex-1 w-56 h-full'>
      <NavButton>Home</NavButton>
      <NavButton type='product'>Pizza</NavButton>
      <NavButton type='product'>Sides</NavButton>
      <NavButton type='product'>Salads</NavButton>
      <NavButton type='product'>Desserts</NavButton>
    </ul>
  )
}

export default NavBar;