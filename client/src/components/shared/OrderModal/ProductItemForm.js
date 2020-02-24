import React from "react";
import {useFormContext} from "react-hook-form";
import ProductProfile from "./ProductProfile";
import AdditionalOptions from "./AdditionalOptions";
import OrderButtons from "./OrderButtons";

function ProductItemForm({product, onSubmit}) {
  const {handleSubmit} = useFormContext();

  return (
    <form
      className="flex flex-col shadow-lg p-5"
      onSubmit={handleSubmit(onSubmit(product))}
    >
      <ProductProfile name={product.name} choices={product.choices} />
      <AdditionalOptions choices={product.ingredients && product.ingredients} />
      <OrderButtons />
    </form>
  );
}

export default ProductItemForm;
