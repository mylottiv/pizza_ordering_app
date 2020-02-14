import React from 'react';
import {CartButton, SideBar, CartProvider, ViewRouter} from './components';

function App() {

  return (
    <div id='app-body' style={
      {
        backgroundImage: `url('http://pizzalupo.com/wp-content/uploads/2018/11/Pizza-Lupo-Header-Graphic.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }
    }>
      <div className='container mx-auto px-5'>
        <div className='flex flex-row'>
          <SideBar />
          <CartProvider>
            <ViewRouter />
            <CartButton />
          </CartProvider>
        </div>
      </div>
    </div> 
  );
}

export default App;
