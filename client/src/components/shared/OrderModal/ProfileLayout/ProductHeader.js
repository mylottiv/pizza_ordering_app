import React from "react";

function ProductHeader({name}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 inline-flex">
        <h1 className="flex-1 text-2xl text-center font-bold">{name}</h1>
        <button className="bg-red-700 h-16 w-16 rounded-lg">X</button>
      </div>
    </div>
  );
}

export default ProductHeader;
