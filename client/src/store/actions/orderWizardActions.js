const orderWizardActions = {
  mountProduct: payload => {
    return {
      type: "MOUNT_PRODUCT",
      payload: payload,
    };
  },
  unmountProduct: payload => {
    return {
      type: "UNMOUNT_PRODUCT",
      payload: payload,
    };
  },
  mountCoupon: payload => {
    return {
      type: "MOUNT_COUPON",
      payload: payload,
    };
  },

  unmountCoupon: payload => {
    return {
      type: "UNMOUNT_COUPON",
      payload: payload,
    };
  },
};

export default orderWizardActions;
