import React from "react";
import {useDispatch} from "react-redux";
import {ProductItemCartLayout} from "../../../..";
import Header from "./Header";
import Content from "./Content";

function ProductItem({itemRef, fields}) {
  const cartDispatch = useDispatch();
  const {name, cartIndex} = itemRef;

  return (
    <ProductItemCartLayout>
      <Header name={name} />
      <Content fields={fields} cartRef={{index: cartIndex, dispatch: cartDispatch}} />
    </ProductItemCartLayout>
  );
}

export default ProductItem;
