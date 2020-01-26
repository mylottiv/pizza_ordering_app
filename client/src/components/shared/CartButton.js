import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function CartButton(props) {

    const {cartState} = useContext(CartContext)

    return (
        <Link to='/myCart'>
            <div className='fixed flex flex-col bottom-0 right-0 text-center bg-blue-600 rounded px-12 py-5 mr-5 align-bottom'>
                <img src='./shopping-cart.svg' />
                <div className='flex flex-row font-bold'>
                    <span className=''>Cart:</span>
                    <span className='rounded-full h-6 w-6 flex flex-col items-center justify-center bg-red-700 ml-1 p-3'>
                        {cartState.products.length}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default CartButton;
