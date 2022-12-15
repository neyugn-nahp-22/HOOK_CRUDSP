import React, { useEffect, useState } from "react";
import { UseStudent } from "../hooks"
export default function StudentComponent() {
    const {
        listStudentss,
        handleGetStudents,
        handleAddStudents
    } = UseStudent();

    useEffect(() => {
        handleGetStudents()
    }, []);
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    return (
        <div>
            <div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button onClick={() => handleAddStudents({ name: name })}>ADD</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID </th>
                        <th> NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listStudentss.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
