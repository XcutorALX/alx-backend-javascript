export default function getStudentIdsSum(students) {
  let sum = 0;

  if (Array.isArray(students)) {
    sum = students.reduce((total, current) => total + current.id, 0);
  }

  return (sum);
}
