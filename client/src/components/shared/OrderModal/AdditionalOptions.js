import React from "react";
import ToppingOptions from "./ToppingOptions";
import CouponProductCategory from "./CouponProductCategory";
function AdditionalOptions({choices}) {
  const itemOptions = (childArray => {
    return childArray[0].toppings
      ? childArray.map(category => (
          <ToppingOptions
            key={category.category}
            type={category.category}
            options={category.toppings}
          />
        ))
      : childArray.map((item, index) => {
          return <CouponProductCategory key={index} item={item} index={index} />;
        });
  })(choices);

  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">{itemOptions}</div>
    </div>
  );
}

export default AdditionalOptions;
