import React, {useContext} from "react";
import {CartContext, OrderFormContext} from "../../";
import ProductItemForm from "./ProductItemForm";
import CouponItemForm from "./CouponItemForm";

// function CouponItemModalForm(props) {

// }

function OrderModal(props) {
  const {storeData, modalState, cartDispatch} = useContext(CartContext);
  console.log("test", modalState);
  const {open, coupon, itemRef} = modalState;
  // Product will be passed on render inside ProductItemForm
  const onSubmit = item => data => {
    // IIE to check whether newItem is a coupon or product, and to format the payload accordingly
    const newItem = (coupon => {
      return coupon
        ? {
            productName: item.name,
            fields: data,
          }
        : {
            couponName: item.couponName,
            data: data,
          };
    })(item.couponName);
    console.log("submit data", newItem);
    cartDispatch({type: "add_item_to_cart", payload: newItem});
  };

  return (
    <>
      {open && (
        <div className="container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed">
          <div className="flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll">
            <OrderFormContext>
              {!coupon ? (
                <ProductItemForm
                  product={
                    storeData.menu[itemRef.type][itemRef.categoryIndex].products[
                      itemRef.productIndex
                    ]
                  }
                  onSubmit={onSubmit}
                />
              ) : (
                <CouponItemForm
                  coupon={storeData.coupons[itemRef.couponIndex]}
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
