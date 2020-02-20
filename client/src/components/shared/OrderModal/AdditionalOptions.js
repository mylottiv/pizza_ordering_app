import React from "react";
import ToppingOptions from "./ToppingOptions";

function AdditionalOptions({toppings, ref}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">
        <ToppingOptions type={"Cheese"} options={toppings.cheese} ref={ref} />
        <ToppingOptions type={"Meats"} options={toppings.meats} ref={ref} />
        <ToppingOptions type={"Veggies"} options={toppings.veggies} ref={ref} />
      </div>
    </div>
  );
}

export default AdditionalOptions;
