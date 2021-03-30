import React from "react";
import OrderButtonsLayout from "../../../layouts/OrderModal/OrderButtons";
import QuantityButtons from "./QuantityButtons";

function OrderButtons(props) {
  return (
    <OrderButtonsLayout>
      <QuantityButtons defaultQuantity={1} />
    </OrderButtonsLayout>
  );
}

export default OrderButtons;
