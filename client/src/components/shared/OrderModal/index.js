import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {OrderFormContext} from "../../";
import ProductItemForm from "./ProductItemForm";
import CouponItemForm from "./CouponItemForm";
import allActions from "../../../store/actions";

// function CouponItemModalForm(props) {

// }

function OrderModal(props) {
  const storeData = useSelector(state => state.storeData);
  const modalState = useSelector(state => state.modal);
  // const
  const dispatch = useDispatch();
  console.log("test", modalState);
  const {
    open,
    coupon,
    openCoupon,
    openCouponName,
    openCouponSlotIndex,
    itemRef,
  } = modalState;
  // TODO: ensure that when a product is opened from inside a coupon, its submit function will add an item to the coupon in the cart specifically.
  // Product will be passed on render inside ProductItemForm
  const onSubmit = (
    couponRef = {couponName: "", open: false, couponIndex: -1}
  ) => item => data => {
    const {couponName, open, couponIndex} = couponRef;
    console.log("couponRef", couponRef, couponName, open);

    // Will either add item directly to cart, or add product to coupon in cart
    const newItem = {
      productName: item.name,
      fields: data,
    };
    console.log("submit data", newItem);
    dispatch(
      allActions.cart[open ? "addItemToCoupon" : "addItemToCart"](
        // IIE unless the ternary operator doesnt require this wrapping
        (() => {
          return open
            ? {
                newItem: newItem,
                couponRef: {couponName: couponName, couponIndex: couponIndex},
              }
            : newItem;
        })()
      )
    );
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
                  // If product is opened from inside a coupon, submit handler will be different
                  onSubmit={
                    openCoupon
                      ? onSubmit({
                          couponName: openCouponName,
                          open: openCoupon,
                          couponIndex: openCouponSlotIndex,
                        })
                      : onSubmit()
                  }
                />
              ) : (
                <CouponItemForm coupon={itemRef} onSubmit={onSubmit()} />
              )}
            </OrderFormContext>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderModal;
