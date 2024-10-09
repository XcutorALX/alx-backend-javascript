export default function updateStudentGradeByCity(students, city, newGrades) {
  let result = [];
  let temp;
  let filtered = [];

  filtered = students.filter((element) => element.location === city);

  result = filtered.map((element) => {
    temp = element;
    temp.grade = 'N/A';

    for (const grade of newGrades) {
      if (grade.studentId === element.id) {
        temp.grade = grade.grade;
      }
    }

    return (temp);
  });

  return (result);
}
