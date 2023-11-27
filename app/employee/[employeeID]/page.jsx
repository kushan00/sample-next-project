import React from "react";

export default async function Employee({ params }) {
  const getEmp = async () => {
    try {
      const response = await fetch(
        `https://dummy.restapiexample.com/api/v1/employee/${params.employeeID}`
      );
      console.log(response);
      const data = await response.json();
      const employee = data.data;

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      console.log("emp", employee);

      return employee;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const emp = await getEmp();

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Employee Details</h1>
      <div className="border border-gray-600 p-4 rounded-md">
        <div className="mb-2">
          <label className="text-gray-400">Employee ID</label>
          <span className="ml-2">{emp.id}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-400">Employee Name</label>
          <span className="ml-2">{emp.employee_name}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-400">Employee Salary</label>
          <span className="ml-2">{emp.employee_salary}</span>
        </div>
        <div className="mb-2">
          <label className="text-gray-400">Employee Age</label>
          <span className="ml-2">{emp.employee_age}</span>
        </div>
      </div>
    </div>
  );
}
