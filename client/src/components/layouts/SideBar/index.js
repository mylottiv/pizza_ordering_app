import React from "react";
import SideBarHeader from "./SideBarHeader";

function SideBarLayout({children}) {
  // Ensure the widths of both divs match
  return (
    <div className="flex flex-col w-56 bg-red-700 mr-1">
      <div className="fixed flex-1 w-56 h-full">
        <SideBarHeader />
        {children}
      </div>
    </div>
  );
}

export default SideBarLayout;
