import React from "react";
import ContentHeader from "./ContentHeader.js";

function ContentLayout({name, children}) {
  return (
    <div className="flex flex-1 flex-col my-1">
      <ContentHeader name={name} />
      {children}
    </div>
  );
}

export default ContentLayout;
