import React from 'react';
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";

function UIwithForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => { console.log(data); };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={MaterialUIInput}
        name="firstName"
        control={control}
        defaultValue=""
      />
      <input type='submit'></input>
    </form>
  );
}

export default UIwithForm;