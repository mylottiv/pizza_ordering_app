import React, {useContext} from 'react';
import {ProductItemLayout, CartContext} from '../../../';

function ProductItem({name}) {
    
    const {cartDispatch} = useContext(CartContext);

    return (
        <ProductItemLayout name={name} dispatch={cartDispatch} />
    )
}

export default ProductItem;