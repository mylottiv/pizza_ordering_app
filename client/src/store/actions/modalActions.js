const modalActions = {
  // Toggles modal open and saves item reference
  openModal: payload => {
    return {
      type: "OPEN_MODAL",
      payload: payload,
    };
  },

  closeModal: payload => {
    return {
      type: "CLOSE_MODAL",
      payload: payload,
    };
  },
};

export default modalActions;
