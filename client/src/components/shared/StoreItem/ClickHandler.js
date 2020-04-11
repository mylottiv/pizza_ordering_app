import {useDispatch} from "react-redux";
import {allActions} from "../..";

function ClickHandler(couponRef, name, selectedItem) {
  const dispatch = useDispatch();

  return () => {
    // Open Modal and flag whether coupon
    dispatch(
      allActions.modal.openModal({
        coupon: couponRef.coupon ? true : false,
      })
    );
    // Mount Item in order wizard
    dispatch(
      couponRef.coupon
        ? allActions.orderWizard.mountCoupon({
            coupon: true,
            couponName: name,
            // couponSlotIndex: couponRef.couponSlotIndex,
            selectedItem: selectedItem,
          })
        : allActions.orderWizard.mountProduct({
            couponSlotIndex: couponRef.couponSlotIndex,
            selectedItem: selectedItem,
          })
    );
    // If item was added as part of a coupon add item to relevant coupon in cart
    return (
      selectedItem.couponName && dispatch(allActions.cart.addCouponToCart(selectedItem))
    );
  };
}

export default ClickHandler;
