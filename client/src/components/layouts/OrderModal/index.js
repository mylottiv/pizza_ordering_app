import React from "react";
import Profile from "./Profile";
import MainOptions from "./MainOptions";
import OrderButtons from "./OrderButtons";

function OrderModalLayout({name, children}) {
  return (
    <div className="flex flex-col shadow-lg p-5">
      <Profile name={name}>{children[0]}</Profile>
      <MainOptions>{children[1]}</MainOptions>
      <OrderButtons>{children[2]}</OrderButtons>
    </div>
  );
}

export default OrderModalLayout;
