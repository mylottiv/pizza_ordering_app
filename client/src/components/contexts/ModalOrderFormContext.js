import React from "react";
import {useForm, FormContext} from "react-hook-form";

/* Container for the react-hook-form Form Context functions */

function ModalOrderFormContext({children}) {
  const methods = useForm();

  return <FormContext {...methods}>{children}</FormContext>;
}

export default ModalOrderFormContext;
