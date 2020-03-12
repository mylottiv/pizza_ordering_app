import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {OrderFormContext} from "../../";
import ProductItemForm from "./ProductItemForm";
import CouponItemForm from "./CouponItemForm";
import submitHandlerFactory from "./submitHandlerFactory";

function OrderModal(props) {
  const storeData = useSelector(state => state.storeData);
  const modalState = useSelector(state => state.modal);
  const wizardState = useSelector(state => state.orderWizard);
  const dispatch = useDispatch();
  console.log("test", modalState);
  const {open, coupon} = modalState;
  const {openCoupon, openCouponName, openCouponSlotIndex, selectedItem} = wizardState;

  return (
    <>
      {open && (
        <div className="container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed">
          <div className="flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll">
            <OrderFormContext>
              {!coupon ? (
                <ProductItemForm
                  product={
                    storeData.menu[selectedItem.type][selectedItem.categoryIndex]
                      .products[selectedItem.productIndex]
                  }
                  // If product is opened from inside a coupon, submit handler will be different
                  onSubmit={
                    openCoupon
                      ? submitHandlerFactory(dispatch, {
                          couponName: openCouponName,
                          open: openCoupon,
                          couponSlotIndex: openCouponSlotIndex,
                        })
                      : submitHandlerFactory(dispatch)
                  }
                />
              ) : (
                <CouponItemForm
                  coupon={selectedItem}
                  onSubmit={submitHandlerFactory(dispatch)}
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
