
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    /** 
     * this will replace the "say" method in Person2 class
        descriptor.value = function () { 
            console.log("New Implementation.");
        }

        enhancing the original method will require us to make a reference to it before modification, as so,

        arrow functions dont define their own "this" keyword, so they can't be used as methods in a class
        with that said always use a this keyword

        to accept any number of arguments passed to the decorator function, use the spread operator on the parameters
        and anote to "any" (...args: any)

    **/

    const original = descriptor.value as Function; // type assertion to provide intellisense
    descriptor.value = function (...args: any) { 
        console.log("Before.");
        original.call(this, ...args);
        console.log("After.");
    }
}

class Person2 {
    @Log
    say(name: string) {
        console.log(name);
    }
}

const person = new Person2();
person.say("Victor");