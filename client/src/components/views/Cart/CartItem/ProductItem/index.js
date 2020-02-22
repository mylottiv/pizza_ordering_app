import React, {useContext} from "react";
import {ProductItemCartLayout, CartContext} from "../../../..";
import Header from "./Header";
import Content from "./Content";

function ProductItem({itemRef, fields}) {
  const {cartDispatch} = useContext(CartContext);
  const {name, cartIndex} = itemRef;

  return (
    <ProductItemCartLayout>
      <Header name={name} />
      <Content fields={fields} cartRef={{index: cartIndex, dispatch: cartDispatch}} />
    </ProductItemCartLayout>
  );
}

export default ProductItem;
