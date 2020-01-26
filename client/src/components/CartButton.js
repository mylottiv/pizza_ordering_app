import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './contexts/CartContext';

function CartButton(props) {

    const {cartState} = useContext(CartContext)

    return (
        <Link to='/myCart'>
            <p className='fixed bottom-0 right-0 text-center bg-blue-600 rounded px-10 py-5 mr-5 align-bottom'>
                <img src='./shopping-cart.svg' /><span className='text-bold'>Cart ({cartState.products.length})</span>
            </p>
        </Link>
    )
}

export default CartButton;
