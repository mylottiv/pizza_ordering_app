import React from "react";

function ProductRadioOptionsLayout({type, children}) {
  return (
    <div className="flex flex-row my-6">
      <div className="flex-1 flex-col text-center">
        <span className="text-gray-700">{type}</span>
        <div className="flex flex-row mr-4 justify-center">.{children}</div>
      </div>
    </div>
  );
}

export default ProductRadioOptionsLayout;
