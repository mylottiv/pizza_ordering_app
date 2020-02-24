import React, {useContext} from "react";
import {CartContext} from "../../contexts/CartContext";
import {CategoryLayout} from "../../";
import ProductCard from "../../views/Product/ProductCard";

function CouponProductCategory({item, index}) {
  const {storeData} = useContext(CartContext);

  const eligibleProducts = item.eligibleItems.map(({type, category, product}) => {
    const storeRef = storeData.menu[type];
    const categoryIndex = storeRef.findIndex(
      categoryTest => categoryTest.category === category
    );
    const productIndex = storeRef[categoryIndex].products.findIndex(
      productTest => productTest.name === product
    );
    const itemRef = {
      type: type,
      categoryIndex: categoryIndex,
      productIndex: productIndex,
    };
    return <ProductCard key={product} name={product} itemRef={itemRef} />;
  });

  return <CategoryLayout name={`flex${index}`}>{eligibleProducts}</CategoryLayout>;
}

export default CouponProductCategory;
