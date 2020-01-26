import React, { useContext } from 'react';
import {CartContext} from '../../'

function CartItem(props) {

    const {cartDispatch} = useContext(CartContext);

    return (
        <div className="flex flex-col rounded bg-gray-100 px-1 py-1 m-5">
            <div className="flex flex-row h-64 rounded overflow-hidden shadow-lg">
                <div className='flex flex-col'>
                    <img className="h-48 w-48" src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg" alt="Sunset in the mountains"></img>
                    <div className="font-bold text-xl my-5 text-center">{props.name}</div>
                </div>
                <div className="flex-1 flex-col px-6 py-4 ml-10">
                    <div className="flex flex-row px-6 py-4">
                        <p className="text-gray-700 text-base">
                        Vivamus pellentesque tortor quis enim vehicula pellentesque. Suspendisse suscipit tristique suscipit. Integer sem velit, gravida et rhoncus eu, ultrices ut libero. Phasellus porta, lacus vel mollis finibus, mi dui ornare massa, sed imperdiet dui ipsum et leo. Sed blandit ultricies neque, et tincidunt nulla lacinia in.
                        </p>
                    </div>
                    <div className="flex flex-row-reverse px-6 py-4 items-right">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-3" onClick={() => cartDispatch({type: 'remove_item_from_cart', payload: props.name})}>
                            Remove
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-3">
                            Edit
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-3" onClick={() => cartDispatch({type: 'add_item_to_cart', payload: props.name})}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default CartItem;