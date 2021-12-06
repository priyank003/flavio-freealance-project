// import { data } from "msw/lib/types/context";
import React, { useState } from "react";
// import { Employee } from "../../model/Employee";
import "./EmployeeListItem.module.css";
// export interface EmployeeListItemProps {
//     employee: Employee;
//     updateList: () => void;
// }

export interface EmployeeListItemProps {
  //   employee: {
  //     id: string | Number;
  //     isActive: boolean;
  //     age: string;
  //     name: string;
  //     company: string;
  //     email: string;
  //   };
  id: string | number;
  isActive: string;
  age: string;
  name: string;
  company: string;
  email: string;
  updateDelete: (arg: number | string) => void;
}
const EmployeeListItem: React.FC<EmployeeListItemProps> = ({
  id,
  isActive,
  age,
  name,
  company,
  email,
  updateDelete,
}) => {
  const [remove, setRemove] = useState(false);
  const deleteHandler = () => {
    updateDelete(id);
    setRemove(true);
  };
  return (
    <>
      <div className="data-div">
        {remove ? (
          <h1 style={{ color: "#ff0800" }}>Deleting ...</h1>
        ) : (
          <>
            <div className="data-div-header">
              <div className="data-div-name-age">
                <div className="data-div-name">
                  <h1>{name}</h1>
                </div>
                <div className="data-div-age">
                  <h2>{age}</h2> {age ? <span>years of age</span> : ""}
                </div>
              </div>
              <div className="data-div-company">
                <p>{company}</p>
              </div>
            </div>
            <div className="data-div-content">
              <p className="email">{email}</p>
              <button onClick={deleteHandler} className="delete-btn">
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EmployeeListItem;
