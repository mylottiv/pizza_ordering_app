import React, {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({name}) {

    const {cartDispatch} = useContext(CartContext);

    return (
      <div className="flex flex-col rounded bg-gray-100 p-3 mx-3 my-2">
        <div className="w-64 rounded overflow-hidden shadow-lg">
          <img className="w-full h-48" src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg" alt="Sunset in the mountains"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex flex-row-reverse px-6 py-4 items-right">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => cartDispatch({type: 'add_item_to_cart', payload: {itemName: name, type: 'product'}})}>
              Order
            </button>
          </div>
        </div>
      </div>
    )
  }

export default ProductCard;