import allActions from "../../../store/actions";

// Product will be passed on render inside ProductItemForm
const submitHandlerFactory = (dispatch, couponRef) => item => data => {
  const {couponName, open, couponSlotIndex} = couponRef;
  console.log("couponRef", couponRef, couponName, open);

  // Will either add item directly to cart, or add product to coupon in cart
  const newItem = {
    productName: item.name,
    fields: data,
  };
  console.log("submit data", newItem);
  const actionTest = allActions.cart[`addItemTo${open ? "Coupon" : "Cart"}`](
    open
      ? {
          newItem: newItem,
          couponRef: {couponName: couponName, couponSlotIndex: couponSlotIndex},
        }
      : newItem
  );
  console.log("Action Process Test", actionTest);
  dispatch(
    allActions.cart[`addItemTo${open ? "Coupon" : "Cart"}`](
      open
        ? {
            newItem: newItem,
            couponRef: {couponName: couponName, couponSlotIndex: couponSlotIndex},
          }
        : newItem
    )
  );
};

export default submitHandlerFactory;
