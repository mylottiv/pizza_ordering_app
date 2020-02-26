import React from "react";
import CategoryHeader from "./CategoryHeader";

function CategoryLayout({name, modal = false, children}) {
  return (
    <div className={`flex flex-row ${modal ? "bg-red-700 my-5" : "bg-green-700 my-1"}`}>
      <div className="flex flex-col w-full mx-5">
        <CategoryHeader name={name} />
        <div className="flex flex-row mb-2">{children}</div>
      </div>
    </div>
  );
}

export default CategoryLayout;
