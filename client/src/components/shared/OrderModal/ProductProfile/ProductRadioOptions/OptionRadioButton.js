import React from "react";
import {useFormContext} from "react-hook-form";

function OptionRadioButton({type, value, selected}) {
  const {register} = useFormContext();

  return (
    <div className="flex flex-col ml-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name={type}
          value={value}
          defaultChecked={selected && true}
          ref={register({required: true})}
        />
        <span className="ml-2">{value}</span>
      </label>
    </div>
  );
}

export default OptionRadioButton;