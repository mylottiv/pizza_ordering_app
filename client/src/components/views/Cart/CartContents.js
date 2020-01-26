import React from 'react';
import {CategoryLayout} from '../../'
import CartItem from './CartItem';

function CartContents({cart}) {

    // Populates with Cart Items
    const renderContent = cart.products.map((product) => (<CartItem name={product.name} />))
  
    return (
      <CategoryLayout name='In Your Cart:'>
        <div className='flex flex-col mb-2'>
            {renderContent}
        </div>
      </CategoryLayout>
    )
}

export default CartContents;