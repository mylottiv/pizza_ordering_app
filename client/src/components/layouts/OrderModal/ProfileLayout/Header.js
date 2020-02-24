import React, {useContext} from "react";
import {CartContext} from "../../..";

function Header({name}) {
  const {modalDispatch} = useContext(CartContext);

  return (
    <div className="flex flex-row">
      <div className="flex-1 inline-flex">
        <h1 className="flex-1 text-2xl text-center font-bold">{name}</h1>
        <button
          className="bg-red-700 h-16 w-16 rounded-lg"
          onClick={() => modalDispatch({type: "close_modal", payload: {}})}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Header;
