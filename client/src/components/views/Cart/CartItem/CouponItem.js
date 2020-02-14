import React from 'react';
import ProductItem from './ProductItem';
import {CouponItemLayout} from '../../../'

function CouponItem({name, items}) {

    const couponProducts = items.map(({productName, quantity}) => {
        return (
            <ProductItem name={productName} />
        )
    })
    return (
        <CouponItemLayout name={name}>
            {couponProducts}
        </CouponItemLayout>
    )
}

export default CouponItem;