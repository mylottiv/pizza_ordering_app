import React from "react";

function OrderButtons({register}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col px-20">
        <div className="flex flex-row">
          <span className="flex-1 text-center">Quantity</span>
        </div>
        <div className="flex flex-row">
          <div className="flex-1 inline-flex items-center justify-center my-2">
            <input
              type="number"
              className="form-input w-1/2"
              name="quantity"
              value="1"
              ref={register({required: true})}
            />
            <button className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6">
              +
            </button>
            <button className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6">
              -
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="flex-1 bg-red-700 block rounded-full py-2 px-4"
          >
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderButtons;
