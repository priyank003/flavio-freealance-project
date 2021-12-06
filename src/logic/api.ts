// import { Employee } from "../model/Employee";
import { Key } from "react";
// eslint-disable-next-line
const BASE_URL = "http://localhost:3001";

export const getEmployees = async () => {
  const response = await fetch("http://localhost:3001/employees");
  const data = await response.json();

  return data;
};

export const addEmployee = async (employee: {}) => {
  await fetch("http://localhost:3001/employees", {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.reload();
};

export const deleteEmployee = async (employeeId: Key) => {
  const response = await fetch(
    "http://localhost:3001/employees/" + employeeId,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  return data;
};
