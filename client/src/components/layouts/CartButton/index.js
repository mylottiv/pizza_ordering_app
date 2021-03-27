import React from "react";
import Counter from "./Counter";

function CartButtonLayout({size = 0}) {
  return (
    <div className="fixed flex flex-col bottom-0 right-0 text-center bg-blue-600 rounded px-12 py-5 mr-5 align-bottom">
      <img alt="shopping-cart" src="./shopping-cart.svg" />
      <Counter size={size} />
    </div>
  );
}

export default CartButtonLayout;
