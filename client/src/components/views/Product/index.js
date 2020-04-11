import React from "react";
import {ContentLayout, MainLayout} from "../..";
import ProductList from "./ProductList";

function Product({match, content}) {
  const productType = match.params.type;
  const name = productType.substring(0, 1).toUpperCase() + productType.substring(1);

  const itemRef = {
    type: productType,
    categoryIndex: -1,
    productIndex: -1,
  };

  // Add reference information as needed to itemRef down the render tree
  const categories = content.map((category, index) => {
    return (
      <ProductList
        key={category.category}
        itemRef={{...itemRef, categoryIndex: index}}
        list={category}
      />
    );
  });

  console.log("TYPE IS", match.params.type);

  return (
    <MainLayout>
      <ContentLayout name={name}>{categories}</ContentLayout>
    </MainLayout>
  );
}

export default Product;
