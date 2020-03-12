const orderWizardReference = {
  MOUNT_PRODUCT: ({couponSlotIndex, selectedItem}, wizardState) => {
    return {
      ...wizardState,
      openCouponSlotIndex: couponSlotIndex,
      selectedItem: selectedItem,
    };
  },

  UNMOUNT_PRODUCT: (payload, wizardState) => {},

  MOUNT_COUPON: ({coupon, couponName, selectedItem}, wizardState) => {
    return {
      ...wizardState,
      openCoupon: wizardState.openCoupon === true ? true : coupon,
      openCouponName: couponName !== "" ? couponName : wizardState.openCouponName,
      selectedItem: selectedItem,
    };
  },

  UNMOUNT_COUPON: (payload, wizardState) => {},
};

export default orderWizardReference;
