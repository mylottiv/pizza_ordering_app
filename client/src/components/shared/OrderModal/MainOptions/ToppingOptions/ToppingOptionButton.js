import React from "react";
import {useFormContext} from "react-hook-form";

function ToppingOptionButton({topping, selected}) {
  const {register} = useFormContext();
  console.log("selected,", selected);

  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          value="left"
          ref={register({})}
        />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          defaultChecked={selected && true}
          value="whole"
          ref={register({})}
        />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={topping}
          value="right"
          ref={register({})}
        />
      </div>
      <div className="flex-1 flex-col">{topping}</div>
    </div>
  );
}

export default ToppingOptionButton;