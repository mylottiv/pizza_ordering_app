import React, {createContext, useReducer} from "react";
import dummyCart from "../../dummyData/CartData.json";
import storeData from "../../dummyData/StoreData.json";

export const CartContext = createContext();

export const CartProvider = props => {
  // Generic reducer call
  // Requires reference object for initialization
  const reducer = reference => (state, action) => {
    return reference[action.type](action.payload, state);
  };

  // Reducer object reference for manipulating Cart
  const cartReference = {
    add_item_to_cart: (newItem, cart) => {
      console.log(cart);

      return {...cart, items: [...cart.items, newItem]};
    },

    // Remove Item from cart
    remove_item_from_cart: (targetIndex, cart) => {
      // Return cart with remove item filtered out
      return {...cart, items: cart.items.filter((item2, index) => index !== targetIndex)};
    },

    // Remove Item from Coupon
    // remove_item_from_coupon: ({couponIndex, itemIndex}, cart) => {
    // }

    // Update Item in cart
    // SKEPTICAL ABOUT THIS ONE CHIEF
    // update_item_in_cart: (updatedItem, cart) => {
    //   // Return cart with new version of item entry
    //   const itemIndex = cart.items.findIndex(item => updatedItem.name === item.name);
    //   cart.items[itemIndex] = updatedItem;
    //   return {...cart};
    // },
  };

  // Reducer reference for toggling and populating order modal
  const modalReference = {
    // Toggles modal open and saves item reference
    open_modal: (selectedItem, modalState) => {
      return {...modalState, open: true, itemRef: selectedItem};
    },

    close_modal: (saveItemFlag, modalState) => {
      return {
        ...modalState,
        open: false,
        itemRef: {type: "", categoryIndex: -1, productIndex: -1},
      };
    },
  };

  console.log("store", storeData);
  console.log("cart", dummyCart);

  const [cartState, cartDispatch] = useReducer(reducer(cartReference), dummyCart);
  const [modalState, modalDispatch] = useReducer(reducer(modalReference), {
    open: false,
    itemRef: {type: "", categoryIndex: -1, productIndex: -1},
  });

  return (
    <CartContext.Provider
      value={{storeData, cartState, cartDispatch, modalState, modalDispatch}}
    >
      {props.children}
    </CartContext.Provider>
  );
};
