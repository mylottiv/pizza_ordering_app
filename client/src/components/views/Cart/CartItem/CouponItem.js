import React from 'react';
import ProductItem from './ProductItem';
import {CouponItemCartLayout} from '../../../'

function CouponItem({name, items}) {

    const couponProducts = items.map(({productName, quantity}) => {
        return (
            <ProductItem name={productName} />
        )
    })
    return (
        <CouponItemCartLayout name={name}>
            {couponProducts}
        </CouponItemCartLayout>
    )
}

export default CouponItem;