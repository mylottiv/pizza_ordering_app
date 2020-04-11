import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import CartButtonLayout from "../";

function CartButton(props) {
  const cartState = useSelector(state => state.cart);

  return (
    <Link to="/myCart">
      <CartButtonLayout size={cartState.items.length} />
    </Link>
  );
}

export default CartButton;
