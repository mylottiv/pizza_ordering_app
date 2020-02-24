import React from "react";
import {CategoryLayout} from "../..";
import CouponCard from "./CouponCard";

function CouponList({content}) {
  console.log(content);

  // Populates with Product Cards
  const renderContent = content.map((coupon, index) => (
    <CouponCard key={index} name={coupon.couponName} index={index} />
  ));

  return <CategoryLayout name={"Coupons"}>{renderContent}</CategoryLayout>;
}

export default CouponList;
