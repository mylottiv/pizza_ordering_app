import React from "react";
import {useDispatch} from "react-redux";
import {ProductItemCartLayout} from "../../../..";
import allActions from "../../../../../store/actions";
import Header from "./Header";
import Content from "./Content";

function ProductItem({name, productRef, fields}) {
  const dispatch = useDispatch();

  console.log("productName", name);

  const {coupon, cartIndex, couponSlotIndex} = productRef;

  const removeItemAction = coupon
    ? allActions.cart.removeItemFromCoupon({cartIndex, couponSlotIndex})
    : allActions.cart.removeItemFromCart(cartIndex);

  console.log("coupon", coupon, removeItemAction);

  const removeHandler = () => dispatch(removeItemAction);

  return (
    <ProductItemCartLayout>
      <Header name={name} />
      <Content fields={fields} removeHandler={removeHandler} />
    </ProductItemCartLayout>
  );
}

export default ProductItem;
