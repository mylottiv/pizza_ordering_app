import React from "react";
import ToppingOptionButton from "./ToppingOptionButton";

function ToppingOptions({type, options, register}) {
  const checkboxOptions = options.map(option => (
    <ToppingOptionButton
      key={option.name}
      topping={option.name}
      selected={option.selected}
      register={register}
    />
  ));

  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col text-center">
        <span className="text-gray-700">{type}</span>
        <div className="flex flex-row justify-center">
          <div className="flex-1 flex-col">
            <div className="flex flex-row">
              <div className="flex-1 flex-col">Left Half</div>
              <div className="flex-1 flex-col">Whole</div>
              <div className="flex-1 flex-col">Right Half</div>
              <div className="flex-1 flex-col">Topping</div>
            </div>
            {checkboxOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToppingOptions;
