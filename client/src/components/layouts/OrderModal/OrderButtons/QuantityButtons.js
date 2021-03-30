import React from "react";

function QuantityButtons({defaultQuantity, addHandler, subtractHandler, refFunction}) {
  return (
    <div className="flex-1 inline-flex items-center justify-center my-2">
      <input
        type="number"
        className="form-input w-1/2"
        name="Quantity"
        defaultValue={defaultQuantity}
        ref={refFunction()}
      />
      <button
        type="button"
        className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6"
        onClick={addHandler}
      >
        +
      </button>
      <button
        type="button"
        className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6"
        onClick={subtractHandler}
      >
        -
      </button>
    </div>
  );
}

export default QuantityButtons;
