import React from "react";
import SubCategoryHeader from "./SubCategoryHeader";

function SubCategoryLayout({name, modal = false, children}) {
  return (
    <div className={`flex flex-row ${modal ? "bg-red-700 my-5" : "bg-green-700 my-1"}`}>
      <div className="flex flex-col w-full mx-5">
        <SubCategoryHeader name={name} />
        <div className="flex flex-row mb-2">{children}</div>
      </div>
    </div>
  );
}

export default SubCategoryLayout;
