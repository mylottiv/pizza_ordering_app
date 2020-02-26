import React from "react";
import CouponItem from "./CouponItem";
import ProductItem from "./ProductItem";

function CartItem({item, index}) {
  const itemRef = {
    name: item.productName ? item.productName : item.couponName,
    cartIndex: index,
  };
  console.log(itemRef);

  return (
    <>
      {item.couponName && (
        <CouponItem couponRef={itemRef} items={item.itemSlots.options} />
      )}
      {item.productName && (
        <ProductItem
          itemRef={itemRef}
          fields={item.fields ? item.fields : item.quantity}
        />
      )}
    </>
  );
}

export default CartItem;
