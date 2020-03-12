import React from "react";
import {useFormContext} from "react-hook-form";

function OrderButtons(props) {
  console.log("rendered");
  const {register, getValues, setValue} = useFormContext();

  const updateQuantity = operator => {
    const operand = operator === "add" ? 1 : -1;
    const newQuantity = parseInt(getValues()["Quantity"]) + operand;
    setValue("Quantity", newQuantity.toString());
  };

  return (
    <>
      <input
        type="number"
        className="form-input w-1/2"
        name="Quantity"
        defaultValue={1}
        ref={register({required: true})}
      />
      <button
        type="button"
        className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6"
        onClick={() => updateQuantity("add")}
      >
        +
      </button>
      <button
        type="button"
        className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6"
        onClick={() => updateQuantity("subtract")}
      >
        -
      </button>
    </>
  );
}

export default OrderButtons;
