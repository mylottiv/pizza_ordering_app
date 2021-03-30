import React from "react";
import ToppingOptionsLayout from "../../../../layouts/OrderModal/ToppingOptions/index";
import ToppingOptionButton from "./ToppingOptionButton";

function ToppingOptions({type, options}) {
  const checkboxOptions = options.map(option => (
    <ToppingOptionButton
      key={option.name}
      topping={option.name}
      selected={option.selected}
    />
  ));

  return <ToppingOptionsLayout type={type}>{checkboxOptions}</ToppingOptionsLayout>;

  // return (
  //   <div className="flex flex-row">
  //     <div className="flex-1 flex-col text-center">
  //       <span className="text-gray-700">{type}</span>
  //       <div className="flex flex-row justify-center">
  //         <div className="flex-1 flex-col">
  //           <div className="flex flex-row">
  //             <div className="flex-1 flex-col">Left Half</div>
  //             <div className="flex-1 flex-col">Whole</div>
  //             <div className="flex-1 flex-col">Right Half</div>
  //             <div className="flex-1 flex-col">Topping</div>
  //           </div>
  //           {checkboxOptions}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default ToppingOptions;
