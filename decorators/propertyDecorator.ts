
/**
 *  can not define the property in the constructor because it needs to be set to a decorator
 *  This decorator is a paramitarized decorator which returns a function.
 *  Here we don't have a property descriptor.
 *  
*/ 

function MinLength(length: number) {

    return function(target: any, propertyName: string) {
        let value: string = "";
        
        const descriptor: PropertyDescriptor = {
            get() {
                return value;
            },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be atleast ${length} characters long.`)
                }
                value = newValue;
            }
        }

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User {
    @MinLength(4) 
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}