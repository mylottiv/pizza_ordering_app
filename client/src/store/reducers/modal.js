const modalReference = {
  // Toggles modal open and saves item reference
  OPEN_MODAL: (payload, modalState) => {
    console.log(
      "coupon index initialization in modal state",
      payload,
      payload.couponSlotIndex
    );

    return {
      ...modalState,
      open: true,
      coupon: payload.coupon,
      // Flag whether product is opened inside of coupon
      openCoupon: ((state, payload) => {
        return state === true ? true : payload;
      })(modalState.openCoupon, payload.coupon),
      openCouponName: ((state, payload) => {
        return payload !== "" ? payload : state;
      })(modalState.openCouponName, payload.couponName),
      openCouponSlotIndex: payload.couponSlotIndex,
      itemRef: payload.couponSlotIndex
        ? {...payload.selectedItem, couponSlotIndex: -1}
        : payload.selectedItem,
    };
  },

  CLOSE_MODAL: (saveItemFlag, modalState) => {
    return {
      ...modalState,
      open: false,
      coupon: false,
      openCoupon: false,
      openCouponName: "",
      openCouponSlotIndex: -1,
      itemRef: {type: "", categoryIndex: -1, productIndex: -1},
    };
  },
};

export default modalReference;
