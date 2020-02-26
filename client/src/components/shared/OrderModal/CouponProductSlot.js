import React, {useContext} from "react";
import {CartContext} from "../../contexts/CartContext";
import {CategoryLayout} from "../..";
import StoreItemCard from "../StoreItemCard";

function CouponProductSlot({couponName, item, index}) {
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
      couponIndex: index,
    };
    return (
      <StoreItemCard key={product} coupon={false} name={product} itemRef={itemRef} />
    );
  });

  return (
    <CategoryLayout name={`Item ${index + 1}`} modal={true}>
      {eligibleProducts}
    </CategoryLayout>
  );
}

export default CouponProductSlot;
