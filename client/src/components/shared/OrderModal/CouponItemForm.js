import React from "react";
import {useFormContext} from "react-hook-form";
import CouponProfile from "./CouponProfile";
import AdditionalOptions from "./AdditionalOptions";
import OrderButtons from "./OrderButtons";

function CouponItemForm({coupon, onSubmit}) {
  const {handleSubmit} = useFormContext();
  console.log("coupon", coupon.itemSlots.slots);

  return (
    <form
      className="flex flex-col shadow-lg p-5"
      onSubmit={handleSubmit(onSubmit(coupon))}
    >
      <CouponProfile name={coupon.couponName} description={coupon.description} />
      <AdditionalOptions choices={coupon.itemSlots.slots} />
      <OrderButtons />
    </form>
  );
}

export default CouponItemForm;
