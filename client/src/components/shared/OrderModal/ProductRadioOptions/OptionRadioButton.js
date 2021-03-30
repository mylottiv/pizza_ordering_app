import React, {useState} from "react";
import {useFormContext} from "react-hook-form";
import OptionRadioButtonLayout from "../../../layouts/OrderModal/ProductRadioOptions/OptionRadioButton";

function OptionRadioButton({type, value, selected}) {
  const [checked, setChecked] = useState(selected);
  const {register} = useFormContext();

  return (
    <>
      <OptionRadioButtonLayout
        type={type}
        value={value}
        checked={checked}
        onChange={() => setChecked(!checked)}
        refFunction={() => register({required: true})}
      />
    </>
  );
}

export default OptionRadioButton;
