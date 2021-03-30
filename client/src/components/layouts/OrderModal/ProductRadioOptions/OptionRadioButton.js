import React from "react";

function OptionRadioButtonLayout({type, value, checked, onChange, refFunction}) {
  return (
    <div className="flex flex-col ml-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name={`${type}-${value}`}
          data-testid={`${type}-${value}`}
          value={value}
          defaultChecked={checked}
          onChange={onChange}
          ref={refFunction()}
        />
        <span className="ml-2">{value}</span>
      </label>
    </div>
  );
}

export default OptionRadioButtonLayout;
