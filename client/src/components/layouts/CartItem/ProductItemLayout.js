import React from "react";

function ProductItemLayout({children}) {
  return (
    <div className="flex flex-col rounded bg-gray-100 p-2 my-2">
      <div className="flex flex-row my-2 h-64 rounded overflow-hidden shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default ProductItemLayout;
