const cartActions = {
  addItemToCart: payload => {
    return {
      type: "ADD_ITEM_TO_CART",
      payload: payload,
    };
  },
  addCouponToCart: payload => {
    return {
      type: "ADD_COUPON_TO_CART",
      payload: payload,
    };
  },
  removeItemFromCart: payload => {
    return {
      type: "REMOVE_ITEM_FROM_CART",
      payload: payload,
    };
  },
  addItemToCoupon: payload => {
    return {
      type: "ADD_ITEM_TO_COUPON",
      payload: payload,
    };
  },
  removeItemFromCoupon: payload => {
    return {
      type: "REMOVE_ITEM_FROM_COUPON:",
      payload: payload,
    };
  },
};

export default cartActions;
