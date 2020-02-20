import React from "react";

function ToppingOptionButton({topping, selected}) {
  console.log("selected,", selected);
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">
        <input type="radio" className="form-radio" name={topping} value="left" />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          defaultChecked={selected && true}
          value="whole"
        />
      </div>
      <div className="flex-1 flex-col">
        <input type="radio" className="form-radio" name={topping} value="right" />
      </div>
      <div className="flex-1 flex-col">{topping}</div>
    </div>
  );
}

export default ToppingOptionButton;
