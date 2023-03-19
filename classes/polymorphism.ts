// Polymorphims refers to an object having different forms for a use-case

class Principal extends Person {
    override get fullname() {
        return "Principal. " + super.fullname;
    }

    protected get grading() {
        return [""];
    }
}


function printNames(persons: Person[]) { // persons is an array in which each entry is of type Person
    for (let person of persons) {
        console.log(person.fullname);
    }
}

// the ability of each object outputting different results with the same function is called Polymorphism
// this is made possible by extending from the base class 
// and overriding the same method from the base class and having diiferent results as output in sub-classes
console.log(printNames([
    new Principal("Gbadebo", "Vivor", "male"),
    new Student(1, "sterling", "adeola", "male"),
    new Professor("Caitlyn", "Hermosa", "female")
]));

