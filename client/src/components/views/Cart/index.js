import React from 'react';
import {Category, ContentLayout, MainLayout} from '../..'
import CartContents from './CartContents';

function Cart(props) {

    return (      
      <MainLayout>
        <ContentLayout name='My Cart' >
          <CartContents cart={props.content} />
          <Category content={{name: 'CHECKOUT'}} />
        </ContentLayout>
      </MainLayout>
    )
}

export default Cart