import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {CartContext, Category} from './';

function ViewRouter(props) {

    const {cartState, storeData} = useContext(CartContext);

    return (
        <Switch>
            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
            <Route exact path='/home' render={(props) => (<Category {...props}/>)} />
            <Route path='/pizza' render={(props) => (<Category content={storeData.Pizza} {...props} />)} />
            <Route path='/sides' render={(props) => (<Category content={storeData.Sides} {...props}/>)} />
            <Route path='/salads' render={(props) => (<Category content={storeData.Salads} {...props}/>)} />
            <Route path='/desserts' render={(props) => (<Category content={storeData.Desserts} {...props}/>)} />
            <Route path='/myCart' render={(props) => (<Category content={cartState} {...props} />)} />
        </Switch>
    )
}

export default ViewRouter;