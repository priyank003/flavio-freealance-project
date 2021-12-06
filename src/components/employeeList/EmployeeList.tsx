import React from "react";

import EmployeeListItem from "./EmployeeListItem";
import { useState, useEffect } from "react";
import { getEmployees, deleteEmployee } from "./../../logic/api";
interface Props {
  updateLoading: (arg: boolean) => void;
}

const EmployeeList: React.FC<Props> = ({ updateLoading }) => {
  const [employeeData, setEmployeeData] = useState([
    {
      id: "",
      isActive: "",
      age: "",
      name: "",
      company: "",
      email: "",
    },
  ]);

  async function fetchEmployeeHandler() {
    getEmployees().then((data) => {
      updateLoading(true);
      setEmployeeData(data);
      updateLoading(false);
    });
  }

  useEffect(() => {
    fetchEmployeeHandler();
    // eslint-disable-next-line
  }, []);

  async function deleteEmployeeHandler(id: string | number) {
    deleteEmployee(id);

    window.location.reload();
  }
  return (
    <>
      {employeeData.map((data) => {
        return data.id ? (
          <EmployeeListItem
            updateDelete={deleteEmployeeHandler}
            id={data.id}
            isActive={data.isActive}
            age={data.age}
            name={data.name}
            email={data.email}
            company={data.company}
          />
        ) : (
          ""
        );
      })}{" "}
    </>
  );
};

export default EmployeeList;
