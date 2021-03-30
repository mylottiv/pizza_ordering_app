import React from "react";
import OptionRadioButton from "./OptionRadioButton";
import ProductRadioOptionsLayout from "../../../layouts/OrderModal/ProductRadioOptions";

function ProductRadioOptions({type, options, register}) {
  const radioOptions = options.map(option => (
    <OptionRadioButton
      type={type}
      key={option.name}
      value={option.name}
      selected={option.selected}
    />
  ));

  return (
    <ProductRadioOptionsLayout type={type}>{radioOptions}</ProductRadioOptionsLayout>
  );
}

export default ProductRadioOptions;
