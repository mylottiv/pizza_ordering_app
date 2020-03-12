import React from "react";
import {CategoryLayout} from "../..";
import StoreItemCard from "../../shared/StoreItemCard";

function CouponList({list}) {
  // Populates with Product Cards
  const renderContent = list.map((coupon, index) => (
    <StoreItemCard
      key={index}
      couponRef={{coupon: true, couponSlotIndex: -1}}
      name={coupon.couponName}
      selectedItem={coupon}
    />
  ));

  return <CategoryLayout name={"Coupons"}>{renderContent}</CategoryLayout>;
}

export default CouponList;
