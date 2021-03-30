import React from "react";
import {useFormContext} from "react-hook-form";
import ItemProfile from "./ItemProfile";
import OrderModalLayout from "../../layouts/OrderModal";
import MainOptions from "./MainOptions";
import OrderButtons from "./OrderButtons";

function ItemForm({item, onSubmit}) {
  const {handleSubmit} = useFormContext();
  const name = item.couponName ? item.couponName : item.name;
  console.log("item form test,", item.choices, item.description);
  const profileContent = item.choices
    ? item.choices
    : item.description
    ? item.description
    : false;

  const mainContent = {
    couponName: item.couponName ? item.couponName : "",
    toppings: item.toppings
      ? item.toppings
      : item.couponName
      ? item.itemSlots.options
      : false,
  };

  return (
    <form
      // Probably not functional for coupon forms as is
      onSubmit={handleSubmit(onSubmit(item))}
    >
      <OrderModalLayout>
        <ItemProfile name={name} content={profileContent} />
        <MainOptions content={mainContent} />
        <OrderButtons></OrderButtons>
      </OrderModalLayout>
    </form>
  );
}

export default ItemForm;
