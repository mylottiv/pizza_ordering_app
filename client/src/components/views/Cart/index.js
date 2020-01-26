import React from 'react';
import {Category, MainLayout} from '../..'
import CartContents from './CartContents';

function Cart(props) {

    return (      
      <MainLayout name='My Cart' >
        <CartContents cart={props.content} />
        <Category content={{name: 'CHECKOUT'}} />
      </MainLayout>
    )
}

export default Cart