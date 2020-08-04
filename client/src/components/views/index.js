import React from "react";
import {useSelector} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import MenuCategory from "./Category";

function ViewRouter(props) {
  const cartState = useSelector(state => state.cart);
  const storeData = useSelector(state => state.storeData);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route
        exact
        path="/home"
        render={props => <Home coupons={storeData.coupons} {...props} />}
      />
      <Route
        exact
        path="/myCart"
        render={props => <Cart content={cartState} {...props} />}
      />
      <Route path="/product/:type" render={props => <MenuCategory {...props} />} />
      <Route
        path="/:product"
        render={props => <Redirect to={`/product/${props.match.params.product}`} />}
      />
    </Switch>
  );
}

export default ViewRouter;
