const cartReference = {
  ADD_ITEM_TO_CART: (newItem, cart) => {
    return {...cart, items: [...cart.items, newItem]};
  },

  // Add coupon to cart
  ADD_COUPON_TO_CART: (newCoupon, cart) => {
    return {...cart, items: [...cart.items, newCoupon]};
  },

  // Remove Item from cart
  REMOVE_ITEM_FROM_CART: (targetIndex, cart) => {
    // Return cart with remove item filtered out
    return {...cart, items: cart.items.filter((item2, index) => index !== targetIndex)};
  },

  // Add Item to Coupon
  ADD_ITEM_TO_COUPON: ({newItem, couponRef}, cart) => {
    const {couponName, couponSlotIndex} = couponRef;
    const successFn = item => {
      const updatedCoupon = {
        ...item,
        itemSlots: {
          ...item.itemSlots,
          options: item.itemSlots.options.map((item2, index) => {
            const updatedItem = {...item2, selectedItem: newItem};
            return couponSlotIndex === index ? updatedItem : item2;
          }),
        },
      };

      console.log("Sucessful coupon match", newItem, updatedCoupon);

      return updatedCoupon;
    };
    const modifiedItems = cart.items.map(item => {
      console.log(
        "cartItem",
        item,
        "selected item?",
        couponName === item.couponName &&
          item.itemSlots.options[couponSlotIndex].selectedItem,
        "couponName",
        couponName,
        "couponSlotIndex",
        couponSlotIndex
      );
      return item.couponName && couponName === item.couponName ? successFn(item) : item;
    });
    const modifiedCart = {...cart, items: modifiedItems};
    console.log(
      "add item to coupon cart",
      cart,
      "modified",
      modifiedItems,
      "final cart",
      modifiedCart
    );

    return modifiedCart;
  },

  // Remove Item from Coupon
  REMOVE_ITEM_FROM_COUPON: ({cartIndex, couponSlotIndex}, cart) => {
    console.log("Remove Item from Coupon", cartIndex, couponSlotIndex, cart);

    const modifiedCart = cart.items.map((item, index) => {
      console.log("testing item", item, index);

      console.log(
        "testing coupon slot index",
        item.itemSlots ? item.itemSlots.options[couponSlotIndex] : ""
      );

      const modifiedItem = () => {
        return {
          ...item,
          itemSlots: {
            ...item.itemSlots,
            options: item.itemSlots.options.map((item2, index2) => {
              return index2 === couponSlotIndex ? {...item2, selectedItem: {}} : item2;
            }),
          },
        };
      };
      return index === cartIndex ? modifiedItem() : item;
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

export default cartReference;
