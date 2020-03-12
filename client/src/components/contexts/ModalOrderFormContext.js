import React from "react";
import {useForm, FormContext} from "react-hook-form";

function ModalOrderFormContext({children}) {
  const methods = useForm();

  return <FormContext {...methods}>{children}</FormContext>;
}

export default ModalOrderFormContext;
