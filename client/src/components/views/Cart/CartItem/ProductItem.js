import React, {useContext} from 'react';
import {ProductItemCartLayout, CartContext} from '../../../';

function ProductItem({name}) {
    
    const {cartDispatch} = useContext(CartContext);

    return (
        <ProductItemCartLayout name={name} dispatch={cartDispatch} />
    )
}

export default ProductItem;