import React from "react";
import {CategoryLayout} from "../..";
import StoreItemCard from "../../shared/StoreItemCard";

function ProductList({itemRef, list}) {
  // Populates with Product Cards
  const renderContent = list.products.map((product, index) => (
    <StoreItemCard
      key={product.name}
      name={product.name}
      selectedItem={{...itemRef, productIndex: index}}
    />
  ));

  return <CategoryLayout name={list.category}>{renderContent}</CategoryLayout>;
}

export default ProductList;
