import React from "react";
import {ModalProfileLayout as ProfileLayout} from "../../../";
import ProductRadioOptions from "./ProductRadioOptions";

function ProductProfile({name, choices}) {
  const choiceFields = choices
    ? choices.map(field => (
        <ProductRadioOptions
          key={field.field}
          type={field.field}
          options={field.options}
        />
      ))
    : false;

  return <ProfileLayout name={name}>{choiceFields}</ProfileLayout>;
}

export default ProductProfile;
