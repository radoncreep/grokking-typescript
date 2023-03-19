// so classes are blueprints for creating an object
// interfaces are used to define the shape of an object

// blocks of interfaces don't appear Javascript file after its TS variant has been compiled.
// defined Interfaces are purely used by the Typescript compiler for type checking.

// Use an interface or an abstract class?
// if the abstract class isn't providing any logic its sub-classes can reuse, 
// then its better to use an interface because our code will be concise and shorter in both ts and js files.
// we can't use interfaces if the methods had some logic even if it's a single line,
// because interfaces cannot have method implementations.


interface ICalendar {
    name: string;
    addEvent: () => void;
    removeEvent(): void;
}

interface ICloudCalendar extends ICalendar {
    sync: () => void;
}

// to create logic or implementations using these interfaces...
// we can create a class to implement these interfaces to create shape of its instantiated object
// as below;

class IOSCalender implements ICloudCalendar {
    constructor(public name: string) {

    }

    addEvent() {};
    
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }

    sync() {};

}

type Cal = {
    format: "datetime"
}

class AndroidCalendar implements Cal {
    constructor(public format: "datetime") {}
}