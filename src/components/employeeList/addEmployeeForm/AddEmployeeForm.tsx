import React from "react";
// import { Employee } from "../../../model/Employee";
import AddEmployeeFormContainer from "./AddEmployeeFormContainer";
import { useState } from "react";
import { addEmployee } from "../../../logic/api";
export interface AddEmployeeFormProps {
  hideForm: (arg: boolean) => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ hideForm }) => {
  const [formPostData, setFormPostData] = useState<{}>({
    id: "",
    isActive: "",
    age: "",
    name: "",
    company: " ",
    email: " ",
  });

  // eslint-disable-next-line
  const [saving, setSaving] = useState(false);

  async function addEmployeeHandler(employee: {}) {
    setSaving(true);

    addEmployee(employee);
    setSaving(false);
  }

  const submitHandler = (enteredName: string) => {
    setFormPostData((prev: { name: string; id: string | number }): void => {
      prev.name = enteredName;
      prev.id = Math.random();
    });
    addEmployeeHandler(formPostData);
    hideForm(false);
  };
  const closeHandler = () => {
    hideForm(false);
  };

  return (
    <AddEmployeeFormContainer
      updateInput={submitHandler}
      updateClose={closeHandler}
    />
  );
};

export default AddEmployeeForm;
