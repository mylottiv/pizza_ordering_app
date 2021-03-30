import React from "react";

function ToppingOptionButton({topping, checked, onChange, refFunction}) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={`${topping}-left`}
          defaultChecked={false}
          onChange={onChange}
          value="left"
          ref={refFunction()}
        />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={`${topping}-whole`}
          defaultChecked={checked}
          onChange={onChange}
          value="whole"
          ref={refFunction()}
        />
      </div>
      <div className="flex-1 flex-col">
        <input
          type="radio"
          className="form-radio"
          name={`${topping}-right`}
          defaultChecked={false}
          onChange={onChange}
          value="right"
          ref={refFunction()}
        />
      </div>
      <div className="flex-1 flex-col">{topping}</div>
    </div>
  );
}

export default ToppingOptionButton;
