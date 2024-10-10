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

interface studentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

const printTeacher:printTeacherFunction = (firstName: string, lastName: string): string => {
  let result: string;

  result = firstName.charAt(0) + '. ' + lastName;
  return (result);
}

class StudentClass implements studentClassInterface{
  private firstName!: string;
  private lastName!: string;
 
  constructor(firstName: string, lastName: string) {
  	this.firstName = firstName;
	this.lastName = lastName;
  }
  
  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

let std = new StudentClass('Abdulahi', 'Abass');
console.log(std.displayName());
