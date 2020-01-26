import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Cart from './Cart';
import Home from './Home';
import Product from './Product';
import {CartContext} from '..';

function ViewRouter(props) {

    const {cartState, storeData} = useContext(CartContext);

    return (
        <Switch>
            <Route exact path='/' render={() => (<Redirect to='/home' />)} />
            <Route exact path='/home' render={(props) => (<Home {...props}/>)} />
            <Route exact path='/myCart' render={(props) => (<Cart content={cartState} {...props} />)} />
            <Route path='/product/:type' render={(props) => (<Product content={storeData[props.match.params.type]} {...props} />)} />
        </Switch>
    )
}

export default ViewRouter;