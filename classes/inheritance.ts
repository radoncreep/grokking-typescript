type GenderType = "male" | "female";

class Person {
    constructor(public firstname: string, public lastname: string, public gender: GenderType) {};

    get fullname() {
        return this.firstname + " " + this.lastname;
    }

    get dob(): Date {
        return new Date();
    }

    walk() {
        console.log("walk...");
    }
}

class Student extends Person {
    constructor(public studentId: number, firstname: string, lastname: string, gender: GenderType) {
        super(firstname, lastname, gender);
    }

    takeTest() {
        console.log("taking a test...");
    }
}


let student = new Student(1, "raedon", "crxxp", "male");
student.walk();

// it's good practice for classes to be written in different files/modules