import React, {createContext, useReducer} from 'react';
import dummyCart from '../../dummyData/CartData.json';
import storeData from '../../dummyData/StoreData';

export const CartContext = createContext();

export const CartProvider = (props) => {

    // Generic reducer call
    // Requires reference object for initialization
    const reducer = (reference) => (state, action) => {

        return reference[action.type](action.payload, state);
    
    }

    // Reducer object reference for manipulating Cart
    const cartReference = {

        'add_item_to_cart': ({itemName, type}, cart) => {

            console.log(cart)

            const itemIndex = cart.items.findIndex(item2 => itemName === item2.name)

            // If new item, add new entry for item to cart
            if (itemIndex === -1)
            {
                const newItem = (type === 'product') ? {productproductName: itemName, quantity: 0} : {couponName: itemName, couponItems: [{productName: itemName, quantity: 0}, {productName: itemName, quantity: 0}]}
                return {...cart, items: [...cart.items, newItem]}
            }

            // Otherwise, increase quantity of relevant item entry
            console.log('item already in cart', itemIndex);
            cart.items[itemIndex].quantity += 1;
            return {...cart}
        },

        // Remove Item from cart
        'remove_item_from_cart': (itemId, cart) => {

            // Return cart with remove item filtered out
            return {...cart, products: cart.items.filter(item2 => item2.name !== itemId)}

        },
        

        // Update Item in cart
        // SKEPTICAL ABOUT THIS ONE CHIEF
        'update_item_in_cart': (updatedItem, cart) => {

            // Return cart with new version of item entry
            const itemIndex = cart.items.findIndex(item => updatedItem.name === item.name);
            cart.items[itemIndex] = updatedItem;
            return {...cart}
        }
    }

    const [cartState, cartDispatch] = useReducer(reducer(cartReference), dummyCart)

    return (
        <CartContext.Provider value={{storeData, cartState, cartDispatch}}>
            {props.children}
        </CartContext.Provider>
    )
};