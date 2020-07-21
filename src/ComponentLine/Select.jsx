import React from 'react';
import { useForm } from "react-hook-form";

function Select() {
  const { register } = useForm();
  return (
    <>
      {/* <input name="firstName" ref={register} /> */}
      <select name="SelectLine" ref={register}>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3ed">3ed</option>
      </select>
    </>
  );
}

export default Select;