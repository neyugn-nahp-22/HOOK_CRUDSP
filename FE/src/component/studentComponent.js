import React, { useEffect, useState } from "react";
import { UseStudent } from "../hooks";
export default function StudentComponent() {
  const {
    listStudentss,
    handleGetStudents,
    handleAddStudents,
    handleDelStudent,
    handlePutStudent,
  } = UseStudent();

  useEffect(() => {
    handleGetStudents();
  }, []);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  return (
    <div>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <button onClick={() => handleAddStudents({ name: name })}>ADD</button>
      </div>
      <div>
        <input
          onChange={(e) => setNameUpdate(e.target.value)}
          value={nameUpdate}
        />
        <button
          onClick={() => handlePutStudent({ name: nameUpdate, id: idUpdate })}
        >
          UPDATE
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th> NAME</th>
          </tr>
        </thead>
        <tbody>
          {listStudentss.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleDelStudent({ id: item._id })}>
                    DELETE
                  </button>
                  <button
                    onClick={() => {
                      setNameUpdate(item.name);
                      setIdUpdate(item._id);
                    }}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
