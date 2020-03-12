import allActions from "../../../store/actions";

// Product will be passed on render inside ProductItemForm
const submitHandlerFactory = (
  dispatch,
  couponRef = {couponName: "", open: false, couponSlotIndex: -1}
) => item => data => {
  const {couponName, open, couponSlotIndex} = couponRef;
  console.log("couponRef", couponRef, couponName, open);

  // Will either add item directly to cart, or add product to coupon in cart
  const newItem = {
    productName: item.name,
    fields: data,
  };
  console.log("submit data", newItem);
  dispatch(
    allActions.cart[`addItemTo${open ? "Coupon" : "Cart"}`](
      // IIE unless the ternary operator doesnt require this wrapping
      (() => {
        return open
          ? {
              newItem: newItem,
              couponRef: {couponName: couponName, couponSlotIndex: couponSlotIndex},
            }
          : newItem;
      })()
    )
  );
};

export default submitHandlerFactory;
