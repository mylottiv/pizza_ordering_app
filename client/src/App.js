import React from "react";
import {CartButton, SideBar, CartProvider, ViewRouter, OrderModal} from "./components";

function App() {
  return (
    <div
      id="app-body"
      style={{
        backgroundImage: `url('http://pizzalupo.com/wp-content/uploads/2018/11/Pizza-Lupo-Header-Graphic.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <CartProvider>
        <OrderModal open={true} />
        <div className="container mx-8 px-5">
          <div className="flex flex-row">
            <SideBar />
            <ViewRouter />
            <CartButton />
          </div>
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
