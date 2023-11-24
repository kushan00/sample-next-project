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
    <div class="bg-gray-800 text-white p-4 rounded-md">
      <h1 class="text-2xl font-bold mb-4">Employee Details</h1>
      <div class="border border-gray-600 p-4 rounded-md">
        <div class="mb-2">
          <label class="text-gray-400">Employee ID</label>
          <span class="ml-2">{emp.id}</span>
        </div>
        <div class="mb-2">
          <label class="text-gray-400">Employee Name</label>
          <span class="ml-2">{emp.employee_name}</span>
        </div>
        <div class="mb-2">
          <label class="text-gray-400">Employee Salary</label>
          <span class="ml-2">{emp.employee_salary}</span>
        </div>
        <div class="mb-2">
          <label class="text-gray-400">Employee Age</label>
          <span class="ml-2">{emp.employee_age}</span>
        </div>
      </div>
    </div>
  );
}
