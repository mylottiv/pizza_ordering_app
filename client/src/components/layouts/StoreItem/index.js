import React from "react";
import InfoCard from "./InfoCard";
import OrderButton from "./OrderButton";

function StoreItemLayout({children}) {
  const {name, onClick} = children;

  return (
    <div className="flex flex-col rounded bg-gray-100 p-3 mx-3 my-2">
      <div className="w-64 rounded overflow-hidden shadow-lg">
        <InfoCard name={name} />
        <OrderButton onClick={onClick} />
      </div>
    </div>
  );
}

export default StoreItemLayout;
