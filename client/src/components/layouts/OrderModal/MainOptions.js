import React from "react";

function MainOptions({children}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">{children}</div>
    </div>
  );
}

export default MainOptions;
