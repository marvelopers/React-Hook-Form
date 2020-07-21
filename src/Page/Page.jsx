import React from 'react';
import Form from '../Form/Form';
import SelectForm from '../Form/SelectForm';
import IntegratingForm from '../Form/IntegratingForm';
import UIwithForm from '../Form/UIwithForm';
import ControlledInput from '../Form/ControlledInput';


function Page() {

  return (
    <>
      <Form />
      <SelectForm />
      <IntegratingForm />
      <UIwithForm />
      <ControlledInput />
    </>
  );
}

export default Page;