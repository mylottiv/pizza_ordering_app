import React from 'react';
import {CartButton, SideBar, CartProvider, ViewRouter} from './components';

function App() {

  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row'>
        <SideBar />
        <CartProvider>
          <ViewRouter />
          <CartButton />
        </CartProvider>
      </div>
    </div> 
  );
}

export default App;
