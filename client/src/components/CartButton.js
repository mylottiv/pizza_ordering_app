import React from 'react';
import {Link} from 'react-router-dom';

function CartButton(props) {
    return (
        <Link to='/myCart'>
            <p className='fixed bottom-0 right-0 text-center bg-blue-600 rounded px-10 py-5 mr-5 align-bottom'>
                <img src='./shopping-cart.svg' /><span className='text-bold'>Cart</span>
            </p>
        </Link>
    )
}

export default CartButton;
