import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'; 
import {CartButton, NavBar, Category} from './components';
import StoreData from './dummyData/StoreData'

function App() {

  console.log(StoreData.Pizza)
  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row'>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/home' />)} />
          <Route exact path='/home' render={(props) => (<Category {...props}/>)} />
          <Route path='/pizza' render={(props) => (<Category content={StoreData.Pizza} {...props} />)} />
          <Route path='/sides' render={(props) => (<Category content={StoreData.Sides} {...props}/>)} />
          <Route path='/salads' render={(props) => (<Category content={StoreData.Salads} {...props}/>)} />
          <Route path='/desserts' render={(props) => (<Category content={StoreData.Desserts} {...props}/>)} />
          <Route path='/myCart' render={(props) => (<Category {...props} />)} />
        </Switch>
        <CartButton />
      </div>
    </div> 
  );
}

export default App;
