import React, { useState } from 'react';

export default function Employee() {
  const [employee, setEmployee] = useState([
    { id: '1', name: 'priyanka', salary: 100 },
    { id: '2', name: 'hoshi', salary: 200 },
  ]);

  return (
    <div>
      <h2>Employee List</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
