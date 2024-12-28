import React, { useEffect, useState } from "react";
import "./Employees.css";

const Employees = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Lista de Empleados</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
