export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (list) => Object.keys(list).length,
  };

  return obj;
}
