import React from "react";
import {useFormContext} from "react-hook-form";
import ProfileLayout from "./ProfileLayout";
import AdditionalOptions from "./AdditionalOptions";
import OrderButtons from "./OrderButtons";

function ProductItemForm({product, onSubmit}) {
  const {handleSubmit} = useFormContext();

  return (
    <form
      className="flex flex-col shadow-lg p-5"
      onSubmit={handleSubmit(onSubmit(product))}
    >
      <ProfileLayout name={product.name} choices={product.choices} />
      <AdditionalOptions toppings={product.toppings ? product.toppings : false} />
      <OrderButtons />
    </form>
  );
}

export default ProductItemForm;
