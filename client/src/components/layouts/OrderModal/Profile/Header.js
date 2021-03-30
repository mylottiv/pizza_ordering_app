import React from "react";

function Header({name, onClick}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 inline-flex">
        <h1 className="flex-1 text-2xl text-center font-bold">{name}</h1>
        <button className="bg-red-700 h-16 w-16 rounded-lg" onClick={onClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default Header;
