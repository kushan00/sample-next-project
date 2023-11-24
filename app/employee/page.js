import React from "react";
import Link from "next/link";

export default async function Employee() {
  const getEmps = async () => {
    try {
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      const data = await response.json();
      const employees = data.data || [];

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      console.log("emps: ", employees);

      return employees;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const emp = await getEmps();

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
                <th>View Employee</th>
              </tr>
            </thead>
            <tbody>
              {emp.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.employee_name}</td>
                  <td>{employee.employee_salary}</td>
                  <td>{employee.employee_age}</td>
                  <td>
                    <Link href={`/employee/${employee.id}`} className="btn btn-warning">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Age</th>
                <th>View Employee</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
