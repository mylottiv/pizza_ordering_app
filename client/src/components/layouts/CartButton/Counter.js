import React from "react";

function Counter({size}) {
  return (
    <div className="flex flex-row font-bold">
      <span className="">Cart:</span>
      <span className="rounded-full h-6 w-6 flex flex-col items-center justify-center bg-red-700 ml-1 p-3">
        {size}
      </span>
    </div>
  );
}

export default Counter;
