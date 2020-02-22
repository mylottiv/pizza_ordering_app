import React from "react";

function Header({name}) {
  return (
    <div className="flex flex-col">
      <img
        className="h-48 w-48"
        src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg"
        alt="Sunset in the mountains"
      ></img>
      <div className="font-bold text-xl my-5 text-center">{name}</div>
    </div>
  );
}

export default Header;
