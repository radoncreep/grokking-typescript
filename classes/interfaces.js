"use strict";
// so classes are blueprints for creating an object
// interfaces are used to define the shape of an object
// to create logic or implementations using these interfaces...
// we can create a class to implement these interfaces to create shape of its instantiated object
// as below;
class IOSCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() { }
    ;
    removeEvent() {
        throw new Error("Method not implemented.");
    }
    sync() { }
    ;
}
class AndroidCalendar {
    constructor(format) {
        this.format = format;
    }
}
