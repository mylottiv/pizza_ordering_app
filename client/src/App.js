import React from 'react';
import {Route} from 'react-router-dom'; 
import {Cart, NavBar, ProductCategory} from './components';

function App() {
  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row'>
        <NavBar />
        <Route path='/' children={(props) => (<ProductCategory {...props}/>)} />
        <Cart />
      </div>
    </div> 
  );
}

export default App;
