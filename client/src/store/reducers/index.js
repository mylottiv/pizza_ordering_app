import cartReference from "./cart";
import modalReference from "./modal";
import orderWizardReference from "./orderWizard";
import dummyCart from "../../dummyData/CartData.json";
import storeData from "../../dummyData/StoreData.json";
import {combineReducers} from "redux";

const reducerFactory = (initialState, reference) => {
  return (state = initialState, action) => {
    return reference[action.type] ? reference[action.type](action.payload, state) : state;
  };
};

const reducers = {
  cart: reducerFactory(dummyCart, cartReference),
  modal: reducerFactory(
    {
      open: false,
      coupon: false,
    },
    modalReference
  ),
  orderWizard: reducerFactory(
    {
      openCoupon: false,
      openCouponName: "",
      openCouponSlotIndex: -1,
      itemRef: {type: "", categoryIndex: -1, productIndex: -1},
    },
    orderWizardReference
  ),
  storeData: (state = storeData, action) => {
    return state;
  },
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
