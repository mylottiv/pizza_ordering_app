import React from "react";
import CouponItem from "./CouponItem";
import ProductItem from "./ProductItem";

function CartItem({item, cartIndex}) {
  const name = item.productName ? item.productName : item.couponName;

  return (
    <>
      {item.couponName && (
        <CouponItem name={name} cartIndex={cartIndex} items={item.itemSlots.options} />
      )}
      {item.productName && (
        <ProductItem
          name={name}
          productRef={{coupon: false, cartIndex: cartIndex, couponIndex: -1}}
          fields={item.fields ? item.fields : item.quantity}
        />
      )}
    </>
  );
}

export default CartItem;
