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
      return {...cart, items: [...cart.items, newItem]};
    },

    // Add coupon to cart
    add_coupon_to_cart: ({couponIndex}, cart) => {
      return {...cart, items: [...cart.items, storeData.coupons[couponIndex]]};
    },

    // Remove Item from cart
    remove_item_from_cart: (targetIndex, cart) => {
      // Return cart with remove item filtered out
      return {...cart, items: cart.items.filter((item2, index) => index !== targetIndex)};
    },

    // Add Item to Coupon
    add_item_to_coupon: ({newItem, couponRef}, cart) => {
      const {couponName, couponIndex} = couponRef;
      const modifiedCart = cart.items.map(item => {
        console.log(
          "cartItem",
          item,
          "selected item?",
          couponName === item.couponName &&
            item.itemSlots.options[couponIndex].selectedItem,
          "couponName",
          couponName,
          "couponIndex",
          couponIndex
        );
        return couponName === item.couponName
          ? {
              ...item,
              itemSlots: {
                ...item.itemSlots,
                options: item.itemSlots.options.map((item2, index) =>
                  couponIndex === index ? {...item2, selectedItem: newItem} : item2
                ),
              },
            }
          : item;
      });
      console.log("add item to coupon cart", cart, "modified", modifiedCart);
      return {...cart, items: modifiedCart};
    },

    // Remove Item from Coupon
    remove_item_from_coupon: ({cartIndex, couponIndex}, cart) => {
      const modifiedCart = cart.items.map((item2, index) => {
        return index === cartIndex ? (item2.slots[couponIndex].selectedItem = {}) : item2;
      });
      return {...cart, items: modifiedCart};
    },

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
    open_modal: (payload, modalState) => {
      console.log(
        "coupon index initialization in modal state",
        payload.couponName,
        payload.selectedItem.couponIndex
      );

      return {
        ...modalState,
        open: true,
        coupon: payload.coupon,
        // Flag whether product is opened inside of coupon
        openCoupon: modalState.openCoupon === true ? true : payload.coupon,
        openCouponName:
          payload.couponName !== "" ? payload.couponName : modalState.openCouponName,
        openCouponSlotIndex:
          payload.selectedItem.couponIndex !== -1 ? payload.selectedItem.couponIndex : -1,
        itemRef: payload.selectedItem.couponIndex
          ? {...payload.selectedItem, couponIndex: -1}
          : payload.selectedItem,
      };
    },

    close_modal: (saveItemFlag, modalState) => {
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

  console.log("store", storeData);
  console.log("cart", dummyCart);

  const [cartState, cartDispatch] = useReducer(reducer(cartReference), dummyCart);
  const [modalState, modalDispatch] = useReducer(reducer(modalReference), {
    open: false,
    coupon: false,
    openCoupon: false,
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
