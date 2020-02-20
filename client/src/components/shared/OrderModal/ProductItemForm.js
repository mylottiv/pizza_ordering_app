import React from "react";
import {useForm} from "react-hook-form";
import ProfileLayout from "./ProfileLayout";
import AdditionalOptions from "./AdditionalOptions";
import OrderButtons from "./OrderButtons";

function ProductItemForm({product}) {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="flex flex-col shadow-lg p-5" onSubmit={handleSubmit(onSubmit)}>
      <ProfileLayout name={product.name} choices={product.choices} ref={register} />
      <AdditionalOptions toppings={product.toppings} ref={register} />
      <OrderButtons ref={register} />
    </form>
  );
}

export default ProductItemForm;
