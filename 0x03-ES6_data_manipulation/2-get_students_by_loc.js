export default function getStudentsByLocation(students, city) {
  let result = [];

  if (Array.isArray(students)) {
    result = students.filter((element) => element.location === city);
  }

  return (result);
}
