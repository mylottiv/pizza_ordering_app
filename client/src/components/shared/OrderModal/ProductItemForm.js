import React from "react";
import {useFormContext} from "react-hook-form";
import ProfileLayout from "./ProfileLayout";
import AdditionalOptions from "./AdditionalOptions";
import OrderButtons from "./OrderButtons";

function ProductItemForm({product}) {
  const {handleSubmit} = useFormContext();
  const onSubmit = data => console.log("submit data", data);

  return (
    <form className="flex flex-col shadow-lg p-5" onSubmit={handleSubmit(onSubmit)}>
      <ProfileLayout name={product.name} choices={product.choices} />
      <AdditionalOptions toppings={product.toppings ? product.toppings : false} />
      <OrderButtons />
    </form>
  );
}

export default ProductItemForm;
