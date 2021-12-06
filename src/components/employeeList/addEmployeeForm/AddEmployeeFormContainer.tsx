import React, { useState } from "react";
import classes from "./AddEmployeeFormContainer.module.css";
import { useRef } from "react";
import closeIcon from "../../../assets/close_black_24dp.svg";
export interface AddEmployeeProps {
  updateInput: (arg: string) => void;
  updateClose: (arg: boolean) => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = ({
  updateInput,
  updateClose,
}) => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = () => {
    const enteredName = nameInputRef.current!.value;
    updateInput(enteredName);

    updateClose(false);
    setSaving(true);
  };

  const closeHandler = (): void => {
    updateClose(true);
  };

  const [saving, setSaving] = useState(false);
  return (
    <>
      <div className={classes.form}>
        <div className={classes["form-container"]}>
          <div className={classes["form-header"]}>
            <h2>Add an employee</h2>
            <button onClick={closeHandler}>
              {" "}
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div className={classes["form-content"]}>
            <input placeholder="name" ref={nameInputRef} id="name" />
            <div className={classes["form-submit"]}>
              <button onClick={submitHandler}>Submit</button>
            </div>
          </div>
          <div className={classes["form-footer"]}>
            {saving && (
              <h3 style={{ color: "#80c47f" }}>saving the response ...</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployeeFormContainer;
