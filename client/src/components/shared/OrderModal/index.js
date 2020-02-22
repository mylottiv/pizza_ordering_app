import React, {useContext} from "react";
import {CartContext, OrderFormContext} from "../../";
import ProductItemForm from "./ProductItemForm";

// function CouponItemModalForm(props) {

// }

function OrderModal(props) {
  const {storeData, modalState, cartDispatch} = useContext(CartContext);
  console.log("test", modalState);
  const {open, itemRef} = modalState;
  const {type, categoryIndex, productIndex} = itemRef;
  // Product will be passed on render inside ProductItemForm
  const onSubmit = product => data => {
    const newItem = {
      productName: product.name,
      fields: data,
    };
    console.log("submit data", newItem);
    cartDispatch({type: "add_item_to_cart", payload: newItem});
  };

  return (
    <>
      {open && (
        <div className="container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed">
          <div className="flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll">
            <OrderFormContext>
              {true && (
                <ProductItemForm
                  product={storeData[type][categoryIndex].products[productIndex]}
                  onSubmit={onSubmit}
                />
              )}
            </OrderFormContext>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderModal;
