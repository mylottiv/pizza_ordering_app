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

        'add_item_to_cart': (itemName, cart) => {
            const itemIndex = cart.products.findIndex(item2 => itemName === item2.name)

            // If new item, add new entry for item to cart
            if (itemIndex === -1)
            {
                return {...cart, products: [...cart.products, {name: itemName, quantity: 0}]}
            }

            // Otherwise, increase quantity of relevant item entry
            console.log('index error', itemIndex);
            cart.products[itemIndex].quantity += 1;
            return {...cart}
        },

        // Remove Item from cart
        'remove_item_from_cart': (itemId, cart) => {

            // Return cart with remove item filtered out
            return {...cart, products: cart.products.filter(item2 => item2.name !== itemId)}

        },
        

        // Update Item in cart
        // SKEPTICAL ABOUT THIS ONE CHIEF
        'update_item_in_cart': (updatedItem, cart) => {

            // Return cart with new version of item entry
            const itemIndex = cart.products.findIndex(item => updatedItem.name === item.name);
            cart.products[itemIndex] = updatedItem;
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