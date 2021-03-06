import React from 'react';
import {CategoryLayout} from '../../';
import {default as CartItem} from "./CartItem";

function CartContents({cart}) {

    // Populates with Cart Items
    const renderContent = cart.items.map((item) => (<CartItem item={item} />))
  
    return (
      <CategoryLayout name='In Your Cart:'>
        <div className='flex flex-col mb-2'>
            {renderContent}
        </div>
      </CategoryLayout>
    )
}

export default CartContents;