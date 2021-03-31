import React from "react";
import ToppingOptions from "./ToppingOptions";
import CouponProductSlot from "./CouponProductSlot";
import MainOptionsLayout from "../../../layouts/OrderModal/MainOptions";

function MainOptions({content}) {
  const {couponName, toppings} = content;

  const itemIngredients =
    toppings[0] && toppings[0].ingredients ? (
      toppings.map(topping => (
        <ToppingOptions
          key={topping.name}
          type={topping.name}
          options={topping.ingredients}
        />
      ))
    ) : toppings ? (
      toppings.map((item, index) => {
        return (
          <CouponProductSlot
            key={index}
            couponName={couponName}
            item={item}
            index={index}
          />
        );
      })
    ) : (
      <p className="text-center">{toppings}</p>
    );

  return <MainOptionsLayout>{itemIngredients}</MainOptionsLayout>;
}

export default MainOptions;
