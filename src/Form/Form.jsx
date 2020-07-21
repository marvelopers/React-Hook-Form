import React from 'react';
import { useForm } from "react-hook-form";
import Select from '../ComponentLine/Select';


function From() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data); };
  console.log(watch("example"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Select Line Component <Select /></label>
        <label>Example</label>
        <input name="example" defaultValue="test" ref={register} />
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.exampleRequired && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </>
  );
}

export default From;