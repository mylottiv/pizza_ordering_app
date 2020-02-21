import React from "react";
import ProductProfileImage from "./ProductProfileImage";
import ProductHeader from "./ProductHeader";
import ProductRadioOptions from "./ProductRadioOptions";

function ProfileLayout({name, choices, register}) {
  console.log("ref check", register);

  const choiceFields = choices
    ? choices.map(field => (
        <ProductRadioOptions
          key={field.field}
          type={field.field}
          options={field.options}
        />
      ))
    : false;

  return (
    <div className="flex flex-row">
      <ProductProfileImage />
      <div className="flex-1 flex-col">
        <ProductHeader name={name} />
        {choiceFields}
      </div>
    </div>
  );
}

export default ProfileLayout;
