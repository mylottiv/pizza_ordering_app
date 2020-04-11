import React from "react";
import {CategoryLayout} from "../..";
import StoreItem from "../../shared/StoreItem";

function CouponList({list}) {
  // Populates with Product Cards
  const renderContent = list.map((coupon, index) => (
    <StoreItem
      key={index}
      couponRef={{coupon: true, couponSlotIndex: -1}}
      name={coupon.couponName}
      selectedItem={coupon}
    />
  ));

  return <CategoryLayout name={"Coupons"}>{renderContent}</CategoryLayout>;
}

export default CouponList;
