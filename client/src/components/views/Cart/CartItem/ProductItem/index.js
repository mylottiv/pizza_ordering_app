import React from "react";
import {useDispatch} from "react-redux";
import {ProductItemCartLayout} from "../../../..";
import allActions from "../../../../../store/actions";
import Header from "./Header";
import Content from "./Content";

function ProductItem({name, productRef, fields}) {
  const dispatch = useDispatch();

  console.log("productName", name);

  const {coupon, cartIndex, couponIndex} = productRef;

  const removeItemAction = coupon
    ? allActions.cart.removeItemFromCoupon({cartIndex, couponIndex})
    : allActions.cart.removeItemFromCart(cartIndex);

  const removeHandler = () => dispatch(removeItemAction);

  return (
    <ProductItemCartLayout>
      <Header name={name} />
      <Content fields={fields} removeHandler={removeHandler} />
    </ProductItemCartLayout>
  );
}

export default ProductItem;
