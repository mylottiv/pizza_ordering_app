import React from "react";
import MainHeader from "./MainHeader";

function MainLayout({children}) {
  return (
    <div className="flex flex-1 flex-col ml-1 font-serif">
      <MainHeader />
      {children}
    </div>
  );
}

export default MainLayout;
