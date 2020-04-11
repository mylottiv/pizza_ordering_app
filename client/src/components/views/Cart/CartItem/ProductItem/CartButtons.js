import React from "react";

function CartButtons({removeHandler}) {
  return (
    <div className="flex flex-row-reverse px-2 py-2 items-right">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-3"
        onClick={removeHandler}
      >
        Remove
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-3">
        Edit
      </button>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-3"
        onClick={() => dispatch({type: "add_item_to_cart", payload: {itemName: name}})}
      >
        Add
      </button> */}
    </div>
  );
}

export default CartButtons;
