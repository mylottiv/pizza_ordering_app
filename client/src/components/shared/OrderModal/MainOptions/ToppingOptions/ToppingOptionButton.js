import React, {useState} from "react";
import {useFormContext} from "react-hook-form";
import ToppingOptionButtonLayout from "../../../../layouts/OrderModal/ToppingOptions/ToppingOptionButton";

function ToppingOptionButton({topping, selected}) {
  const [checked, setChecked] = useState(selected);
  const {register} = useFormContext();
  console.log(topping, "selected,", selected);

  return (
    <>
      <ToppingOptionButtonLayout
        topping={topping}
        checked={checked}
        onChange={() => setChecked(!checked)}
        refFunction={() => register({})}
      />
    </>
  );

  // return (
  //   <div className="flex flex-row">
  //     <div className="flex-1 flex-col">
  //       <input
  //         type="radio"
  //         className="form-radio"
  //         name={`${topping}-left`}
  //         defaultChecked={false}
  //         onChange={() => setChecked(!checked)}
  //         value="left"
  //         ref={register({})}
  //       />
  //     </div>
  //     <div className="flex-1 flex-col">
  //       <input
  //         type="radio"
  //         className="form-radio"
  //         name={`${topping}-whole`}
  //         defaultChecked={checked}
  //         onChange={() => setChecked(!checked)}
  //         value="whole"
  //         ref={register({})}
  //       />
  //     </div>
  //     <div className="flex-1 flex-col">
  //       <input
  //         type="radio"
  //         className="form-radio"
  //         name={`${topping}-right`}
  //         defaultChecked={false}
  //         onChange={() => setChecked(!checked)}
  //         value="right"
  //         ref={register({})}
  //       />
  //     </div>
  //     <div className="flex-1 flex-col">{topping}</div>
  //   </div>
  // );
}

export default ToppingOptionButton;
