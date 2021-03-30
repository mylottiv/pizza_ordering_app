import React from "react";
import {useFormContext} from "react-hook-form";
import QuantityButtonsLayout from "../../../layouts/OrderModal/OrderButtons/QuantityButtons";

function QuantityButtons({defaultQuantity}) {
  const {register, getValues, setValue} = useFormContext();

  const updateQuantity = operator => {
    const operand = operator === "add" ? 1 : -1;
    const newQuantity = parseInt(getValues()["Quantity"]) + operand;
    setValue("Quantity", newQuantity.toString());
  };

  return (
    <>
      <QuantityButtonsLayout
        defaultQuantity
        onClick={() => updateQuantity("add")}
        refFunction={() => register({required: true})}
      />
    </>
  );
}

export default QuantityButtons;
