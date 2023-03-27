/**
 * Decorators to apply on accessors i.e getters and setters
 * 
 */

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    /**
     * here we have to use "descriptor.get" because "descriptor.value" only works with methods 
     */
    const original = descriptor.get;
    // redefine the getter
    // takes in no params because getters don't take in parameters
    descriptor.get = function() {
        // original?.call(this);
        const result = original!.call(this);
        
        return (typeof result === "string") ? result.toUpperCase() : result;
    }
}

class Person3 {
    constructor(public firstName: string, public lastName: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }   
}

const person3 = new Person3("victor", "onofiok");
console.log(person3.fullName);