import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {ModalOrderFormContext} from "../../";
import ItemForm from "./ItemForm";
import submitHandlerFactory from "./submitHandlerFactory";

function OrderModal(props) {
  const storeData = useSelector(state => state.storeData);
  const modalState = useSelector(state => state.modal);
  const wizardState = useSelector(state => state.orderWizard);
  const dispatch = useDispatch();
  console.log("test", wizardState);
  const {open, coupon} = modalState;
  const {openCoupon, openCouponName, openCouponSlotIndex, selectedItem} = wizardState;

  // Coupon info stored in selectedItem while Product info must be fetched from storeData
  const itemGetter = () =>
    coupon
      ? selectedItem
      : storeData.menu[selectedItem.type][selectedItem.categoryIndex].products[
          selectedItem.productIndex
        ];

  // If product is opened from inside a coupon, reference for submit handler will be different
  const couponRef =
    !coupon && openCoupon
      ? {
          couponName: openCouponName,
          open: openCoupon,
          couponSlotIndex: openCouponSlotIndex,
        }
      : undefined;

  return (
    <>
      {open && (
        <div className="container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed">
          <div className="flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll">
            <ModalOrderFormContext>
              <ItemForm
                item={(() => {
                  console.log("itemGetter test", itemGetter());
                  return itemGetter();
                })()}
                onSubmit={submitHandlerFactory(dispatch, couponRef)}
              />
            </ModalOrderFormContext>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderModal;
