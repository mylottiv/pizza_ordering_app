import React from "react";
import ToppingOptions from "./ToppingOptions";
import CouponProductSlot from "./CouponProductSlot";
function MainOptions({content}) {
  const {couponName, choices} = content;
  console.log("choices test", choices);
  const itemOptions =
    choices[0] && choices[0].toppings
      ? choices.map(category => (
          <ToppingOptions
            key={category.category}
            type={category.category}
            options={category.toppings}
          />
        ))
      : choices
      ? choices.map((item, index) => {
          return (
            <CouponProductSlot
              key={index}
              couponName={couponName}
              item={item}
              index={index}
            />
          );
        })
      : choices;

  return <>{itemOptions}</>;
}

export default MainOptions;
