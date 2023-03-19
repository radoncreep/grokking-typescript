// abstract classes are like templates to be extending by sub-classes for use.
// when a class is defined as abstract, it shouldn't be used for instantiation
// because it produces nothing but a boiler-plate for sub-classes not objects.

// we also have abstract methods, these are methods that have no implementation.
// because the implementation depends on the kind of that class
// for example the rendering of a circle should depend on the Cirle 
// class not the Shape class
// abstract has no representation in Javascript, so one wouldn't see the keyword after compilation.

// REMEMBER: ABSTRACT METHODS can only exist in ABSTRACT CLASSES

abstract class Shape {
    constructor(public color: string) {

    }

    abstract render(): void; 
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log("Rendering a circle...");
    }
}

// let shape = new Shape('red');  // prompts a compilation error