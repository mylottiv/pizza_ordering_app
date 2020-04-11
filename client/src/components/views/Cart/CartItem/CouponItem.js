import React from "react";
import ProductItem from "./ProductItem";
import {CouponItemCartLayout} from "../../../";

function CouponItem({name, cartIndex, items}) {
  const couponProducts = items.map(({selectedItem}, index) => {
    const {productName, fields} = selectedItem;

    return (
      <ProductItem
        key={index}
        name={productName ? productName : "Unselected"}
        productRef={{coupon: true, cartIndex: cartIndex, couponIndex: index}}
        fields={fields ? fields : ""}
      />
    );
  });
  return (
    <CouponItemCartLayout name={name} cartIndex={cartIndex}>
      {couponProducts}
    </CouponItemCartLayout>
  );
}

export default CouponItem;
