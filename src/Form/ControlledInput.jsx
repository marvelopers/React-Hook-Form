import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox } from "@material-ui/core";

function ControlledInput() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller as={TextField} name="TextField" control={control} defaultValue="" />
        <Controller
          name="MyCheckbox"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={props => <Checkbox {...props} />} // props contains: onChange, onBlur and value
        />
      </form>
    </>
  );
}

export default ControlledInput;