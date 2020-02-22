import React from "react";
import ProductItem from "./ProductItem";
import {CouponItemCartLayout} from "../../../";

function CouponItem({couponRef, items}) {
  const {name} = couponRef;

  const couponProducts = items.map(({selectedItem}, index) => {
    return (
      <ProductItem
        key={index}
        itemRef={{name: selectedItem.productName, cartIndex: index}}
        fields={selectedItem.fields}
      />
    );
  });
  return <CouponItemCartLayout name={name}>{couponProducts}</CouponItemCartLayout>;
}

export default CouponItem;
