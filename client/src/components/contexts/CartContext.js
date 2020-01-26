import React, {createContext} from 'react';
import dummyCart from '../../dummyData/CartData.json';

export const CartContext = createContext();

export const CartProvider = (props) => {
    return (
        <CartContext.Provider value={dummyCart}>
            {props.children}
        </CartContext.Provider>
    )
};