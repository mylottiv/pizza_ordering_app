import React from "react";

function OrderButtons({children}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col px-20">
        <div className="flex flex-row">
          <span className="flex-1 text-center">Quantity</span>
        </div>
        <div className="flex flex-row">{children}</div>
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
