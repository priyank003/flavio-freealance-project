import "./App.css";
import React, { useState } from "react";

import AddEmployeeForm from "./employeeList/addEmployeeForm/AddEmployeeForm";

import EmployeeList from "./employeeList/EmployeeList";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const addEmployeeHandler = () => {
    setShowForm((prev) => !prev);
  };

  const updateLoading = (data: boolean): void => {
    setIsLoading(data);
  };
  return (
    <div className="App">
      {showForm && <AddEmployeeForm hideForm={addEmployeeHandler} />}
      {isLoading && (
        <p>
          <h1 style={{ color: "#80c47f" }}>Loading ...</h1>
        </p>
      )}

      {!isLoading && (
        <button onClick={addEmployeeHandler} className="add-form-btn">
          Add employee
        </button>
      )}

      <EmployeeList updateLoading={updateLoading} />
    </div>
  );
};

export default App;
