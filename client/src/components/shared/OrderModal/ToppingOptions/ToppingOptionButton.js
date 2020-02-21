import React from "react";

function ToppingOptionButton({topping, selected, register}) {
  console.log("selected,", selected);
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          value="left"
          ref={register({required: true})}
        />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          defaultChecked={selected && true}
          value="whole"
          ref={register({required: true})}
        />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          value="right"
          ref={register({required: true})}
        />
      </div>
      <div className="flex-1 flex-col">{topping}</div>
    </div>
  );
}

export default ToppingOptionButton;
