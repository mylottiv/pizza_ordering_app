import React from "react";
import {useSelector} from "react-redux";
import {CategoryLayout} from "../../..";
import StoreItemCard from "../../StoreItemCard";

function CouponProductSlot({couponName, item, index}) {
  const storeData = useSelector(state => state.storeData);

  const eligibleProducts = item.eligibleItems.map(({type, category, product}) => {
    const storeRef = storeData.menu[type];
    const categoryIndex = storeRef.findIndex(
      categoryTest => categoryTest.category === category
    );
    const productIndex = storeRef[categoryIndex].products.findIndex(
      productTest => productTest.name === product
    );
    const selectedItem = {
      type: type,
      categoryIndex: categoryIndex,
      productIndex: productIndex,
    };
    return (
      <StoreItemCard
        key={product}
        couponRef={{coupon: false, couponSlotIndex: index}}
        name={product}
        selectedItem={selectedItem}
      />
    );
  });

  return (
    <CategoryLayout name={`Item ${index + 1}`} modal={true}>
      {eligibleProducts}
    </CategoryLayout>
  );
}

export default CouponProductSlot;
