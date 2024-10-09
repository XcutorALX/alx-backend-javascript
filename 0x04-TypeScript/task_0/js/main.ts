interface Student {
  firstName: string,
  lastName: string,
  age: number,
}

let arr: Array<Student> = [];
let student1: Student = {
  firstName: 'Abdulahi',
  lastName: 'Abass',
  age: 20,
};
let student2: Student = {
  firstName: 'Ishmael',
  lastName: 'Lanfear',
  age: 1000,
}

arr.push(student1);
arr.push(student2);

console.log(arr);
