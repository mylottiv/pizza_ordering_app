import React from "react";
import CartButtons from "./CartButtons";

function Content({fields, removeHandler}) {
  const formattedFields = Object.keys(fields).map(field => (
    <p key={field}>{fields[field] !== "" && `${field}: ${fields[field]}`}</p>
  ));

  return (
    <div className="flex-1 flex-col px-2 py-2">
      <div className="flex flex-row px-2 py-2">
        <span className="text-gray-700 text-base">{formattedFields}</span>
      </div>
      <CartButtons removeHandler={removeHandler} />
    </div>
  );
}

export default Content;
