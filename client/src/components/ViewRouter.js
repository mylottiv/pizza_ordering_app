import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CartContext, Category} from './';
import StoreData from '../dummyData/StoreData.json';

function ViewRouter(props) {

    const dummyCart = useContext(CartContext);

    return (
        <Switch>
            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
            <Route exact path='/home' render={(props) => (<Category {...props}/>)} />
            <Route path='/pizza' render={(props) => (<Category content={StoreData.Pizza} {...props} />)} />
            <Route path='/sides' render={(props) => (<Category content={StoreData.Sides} {...props}/>)} />
            <Route path='/salads' render={(props) => (<Category content={StoreData.Salads} {...props}/>)} />
            <Route path='/desserts' render={(props) => (<Category content={StoreData.Desserts} {...props}/>)} />
            <Route path='/myCart' render={(props) => (<Category content={dummyCart} {...props} />)} />
        </Switch>
    )
}

export default ViewRouter;