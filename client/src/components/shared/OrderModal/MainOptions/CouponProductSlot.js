import React from "react";
import {useSelector} from "react-redux";
import {SubCategoryLayout} from "../../..";
import StoreItem from "../../StoreItem";

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
      <StoreItem
        key={product}
        couponRef={{coupon: false, couponSlotIndex: index}}
        name={product}
        selectedItem={selectedItem}
      />
    );
  });

  return (
    <SubCategoryLayout name={`Item ${index + 1}`} modal={true}>
      {eligibleProducts}
    </SubCategoryLayout>
  );
}

export default CouponProductSlot;
