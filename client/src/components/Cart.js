import React from 'react';

function Cart(props) {
    return (
        <div className='fixed flex flex-row-reverse inset-x-0 bottom-0'>
        <p className='text-center bg-blue-600 rounded px-10 py-5 mr-5 align-bottom'>
            <img src='./shopping-cart.svg' /><span className='text-bold'>Cart</span>
        </p>
        </div>
    )
}

export default Cart;
