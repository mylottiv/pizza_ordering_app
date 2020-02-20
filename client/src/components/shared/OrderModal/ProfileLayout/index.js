import React from "react";
import ProductProfileImage from "./ProductProfileImage";
import ProductHeader from "./ProductHeader";
import ProductRadioOptions from "./ProductRadioOptions";

function ProfileLayout({name, choices, ref}) {
  return (
    <div className="flex flex-row">
      <ProductProfileImage />
      <div className="flex-1 flex-col">
        <ProductHeader name={name} />
        <ProductRadioOptions type={choices[0].field} options={choices[0].options} />
        <ProductRadioOptions type={choices[1].field} options={choices[1].options} />
        <ProductRadioOptions type={choices[2].field} options={choices[2].options} />
      </div>
    </div>
  );
}

export default ProfileLayout;
