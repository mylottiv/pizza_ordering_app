import React from "react";

function OrderButton({onClick}) {
  return (
    <div className="flex flex-row-reverse px-6 py-4 items-right">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={onClick}
      >
        Order
      </button>
    </div>
  );
}

export default OrderButton;
