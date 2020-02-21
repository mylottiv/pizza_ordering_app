import React from "react";
import {useForm} from "react-hook-form";
import ProfileLayout from "./ProfileLayout";
import AdditionalOptions from "./AdditionalOptions";
import OrderButtons from "./OrderButtons";

function ProductItemForm({product}) {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log("submit data", data);
  console.log("ref check", register);

  return (
    <form className="flex flex-col shadow-lg p-5" onSubmit={handleSubmit(onSubmit)}>
      <ProfileLayout name={product.name} choices={product.choices} register={register} />
      <AdditionalOptions
        toppings={product.toppings ? product.toppings : false}
        register={register}
      />
      <OrderButtons register={register} />
    </form>
  );
}

export default ProductItemForm;
