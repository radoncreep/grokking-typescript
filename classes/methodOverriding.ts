// method of overriding can be used in "Inheritance" 
// to change the implementation of a method in a super class

class Professor extends Person {
    // if no extra props are needed then a constructor isn't needed
    // to override an existing method from a base class, use the "override" keyword
    override get fullname(): string {
        return "Professor " + super.fullname;
    }
}

let teacher = new Professor('Caleb', 'Rachelson', 'male');
console.log(teacher.fullname);