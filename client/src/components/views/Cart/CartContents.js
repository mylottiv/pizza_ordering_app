import React from "react";
import {SubCategoryLayout} from "../../";
import {default as CartItem} from "./CartItem";

function CartContents({cart}) {
  // Populates with Cart Items
  const renderContent = cart.items.map((item, index) => (
    <CartItem key={index} item={item} cartIndex={index} />
  ));

  return (
    <SubCategoryLayout name="In Your Cart:">
      <div className="flex flex-col mb-2">{renderContent}</div>
    </SubCategoryLayout>
  );
}

export default CartContents;
