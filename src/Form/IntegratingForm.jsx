import React from 'react';
import { useForm } from "react-hook-form";

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

//you can use React.forwardRef to pass the ref too 
const Select = React.forwardRef(({ label, register }, ref) => (
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));


function IntegratingForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <Input label="IntergratingFormInput" register={register} required />
      <Select label="IntergratingFormSelect" ref={register} />
      <input type="submit" />
    </form>
  );
}

export default IntegratingForm;