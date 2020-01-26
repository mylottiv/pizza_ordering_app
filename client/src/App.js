import React from 'react';
import {CartButton, NavBar, CartProvider, ViewRouter} from './components';

function App() {

  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row'>
        <NavBar />
        <CartProvider>
          <ViewRouter />
          <CartButton />
        </CartProvider>
      </div>
    </div> 
  );
}

export default App;
