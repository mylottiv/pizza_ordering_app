import React from "react";
import {CategoryLayout} from "../..";
import StoreItem from "../../shared/StoreItem";

function ProductList({itemRef, list}) {
  // Populates with Product Cards
  const renderContent = list.products.map((product, index) => (
    <StoreItem
      key={product.name}
      couponRef={{coupon: false, couponSlotIndex: -1}}
      name={product.name}
      selectedItem={{...itemRef, productIndex: index}}
    />
  ));

  return <CategoryLayout name={list.category}>{renderContent}</CategoryLayout>;
}

export default ProductList;
