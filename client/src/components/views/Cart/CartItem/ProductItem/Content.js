import React from "react";
import CartButtons from "./CartButtons";

function Content({cartRef, fields}) {
  const children = [];

  for (const field in fields) {
    children.push(<p>{fields[field] !== "" && `${field}: ${fields[field]}`}</p>);
  }

  return (
    <div className="flex-1 flex-col px-2 py-2">
      <div className="flex flex-row px-2 py-2">
        <p className="text-gray-700 text-base">{children}</p>
      </div>
      <CartButtons index={cartRef.index} dispatch={cartRef.dispatch} />
    </div>
  );
}

export default Content;
