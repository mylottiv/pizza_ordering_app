import React from "react";
import {useDispatch} from "react-redux";
import {allActions} from "../../../";

function Header({name}) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row">
      <div className="flex-1 inline-flex">
        <h1 className="flex-1 text-2xl text-center font-bold">{name}</h1>
        <button
          className="bg-red-700 h-16 w-16 rounded-lg"
          onClick={() => dispatch(allActions.modal.closeModal({}))}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Header;
