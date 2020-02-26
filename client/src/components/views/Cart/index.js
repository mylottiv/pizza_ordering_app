import React from "react";
import {Category, ContentLayout, MainLayout} from "../..";
import CartContents from "./CartContents";

function Cart({content}) {
  console.log("current cart to be displayed", content);

  return (
    <MainLayout>
      <ContentLayout name="My Cart">
        <CartContents cart={content} />
        <Category content={{name: "CHECKOUT"}} />
      </ContentLayout>
    </MainLayout>
  );
}

export default Cart;
