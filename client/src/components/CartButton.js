import React from 'react';
import {Link} from 'react-router-dom';

function CartButton(props) {
    return (
        <div className='fixed flex flex-row-reverse inset-x-0 bottom-0'>
            <Link to='/myCart'>
                <p className='text-center bg-blue-600 rounded px-10 py-5 mr-5 align-bottom'>
                    <img src='./shopping-cart.svg' /><span className='text-bold'>Cart</span>
                </p>
            </Link>
        </div>
    )
}

export default CartButton;
