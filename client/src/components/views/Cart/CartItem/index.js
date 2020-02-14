import React from 'react';
import CouponItem from './CouponItem';
import ProductItem from './ProductItem';

function CartItem({item}) {

    return (
        <>
            {item.couponName && <CouponItem name={item.couponName} items={item.couponItems} />}
            {item.productName && <ProductItem name={item.productName} />}
        </>
    )

}

export default CartItem;