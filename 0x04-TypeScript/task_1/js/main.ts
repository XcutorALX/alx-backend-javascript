interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher:printTeacherFunction = (firstName: string, lastName: string): string => {
  let result: string;

  result = firstName.charAt(0) + '. ' + lastName;
  return (result);
}
