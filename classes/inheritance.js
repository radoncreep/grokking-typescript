"use strict";
class Person {
    constructor(firstname, lastname, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
    }
    ;
    get fullname() {
        return this.firstname + " " + this.lastname;
    }
    get dob() {
        return new Date();
    }
    walk() {
        console.log("walk...");
    }
}
class Student extends Person {
    constructor(studentId, firstname, lastname, gender) {
        super(firstname, lastname, gender);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test...");
    }
}
let student = new Student(1, "raedon", "crxxp", "male");
student.walk();
// it's good practice for classes to be written in different files/modules
