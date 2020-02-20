import React from "react";
import OptionRadioButton from "./OptionRadioButton";

function ProductRadioOptions({type, options}) {
  const radioOptions = options.map(option => (
    <OptionRadioButton
      type={type}
      key={option.name}
      value={option.name}
      selected={option.selected}
    />
  ));

  return (
    <div className="flex flex-row my-6">
      <div className="flex-1 flex-col text-center">
        <span className="text-gray-700">{type}</span>
        <div className="flex flex-row mr-4 justify-center">.{radioOptions}</div>
      </div>
    </div>
  );
}

export default ProductRadioOptions;
