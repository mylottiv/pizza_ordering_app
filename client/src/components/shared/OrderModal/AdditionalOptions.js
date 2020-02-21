import React from "react";
import ToppingOptions from "./ToppingOptions";

function AdditionalOptions({toppings, register}) {
  const toppingArray = [
    <ToppingOptions
      key={"Cheese"}
      type={"Cheese"}
      options={toppings.cheese}
      register={register}
    />,
    <ToppingOptions
      key={"Meats"}
      type={"Meats"}
      options={toppings.meats}
      register={register}
    />,
    <ToppingOptions
      key={"Veggies"}
      type={"Veggies"}
      options={toppings.veggies}
      register={register}
    />,
  ];

  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">{toppings !== false && toppingArray}</div>
    </div>
  );
}

export default AdditionalOptions;
