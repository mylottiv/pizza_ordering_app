import React, {useContext} from "react";
import {CartContext} from "../../";
import ProductItemForm from "./ProductItemForm";

// function CouponItemModalForm(props) {

// }

function OrderModal({open}) {
  const {storeData, modalState} = useContext(CartContext);
  console.log("test", storeData.pizza[0].products[0], modalState);
  // const {open, itemRef} = modalState;
  // const {type, category, subCategoryIndex, productIndex} = itemRef;

  return (
    <>
      {open && (
        <div className="container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed">
          <div className="flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll">
            {/* <ProductItemForm product={storeData[category][subCategoryIndex].products[productIndex]} /> */}
            {true && <ProductItemForm product={storeData.pizza[1].products[0]} />}
          </div>
        </div>
      )}
    </>
  );
}

export default OrderModal;
