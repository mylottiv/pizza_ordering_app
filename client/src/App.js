import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'; 
import {Cart, NavBar, ProductCategory} from './components';
import StoreData from './dummyData/StoreData'

function App() {

  console.log(StoreData.Pizza)
  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row'>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/home' />)} />
          <Route exact path='/home' render={(props) => (<ProductCategory {...props}/>)} />
          <Route path='/pizza' render={(props) => (<ProductCategory {...props} category={StoreData.Pizza}/>)} />
          <Route path='/sides' render={(props) => (<ProductCategory category={StoreData.Sides} {...props}/>)} />
          <Route path='/salads' render={(props) => (<ProductCategory category={StoreData.Salads} {...props}/>)} />
          <Route path='/desserts' render={(props) => (<ProductCategory category={StoreData.Desserts} {...props}/>)} />
        </Switch>
        <Cart />
      </div>
    </div> 
  );
}

export default App;
