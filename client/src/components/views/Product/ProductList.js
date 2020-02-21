import React from "react";
import {CategoryLayout} from "../..";
import ProductCard from "./ProductCard";

function ProductList({itemRef, content}) {
  // Populates with Product Cards
  const renderContent = content.products.map((product, index) => (
    <ProductCard
      key={product.name}
      name={product.name}
      itemRef={{...itemRef, productIndex: index}}
    />
  ));

  return <CategoryLayout name={content.category}>{renderContent}</CategoryLayout>;
}

export default ProductList;
