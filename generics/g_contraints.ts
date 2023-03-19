// sometimes we need to apply contraints when using generic type arguments
// i.e limit the type of objects we can pass as GTA

function echo<T extends number | string>(params: T): T {
    return params;
}

echo(1); // right
// echo(null); // wrong. Constraint applied to the function "echo" takes the shape of a string or number only

function createEntity<T extends { name: string }>(params: T):T {
    return params;
}

createEntity({ name: "Janeth" });

// extending an interface for contraints
function updateEntity<E extends Entity>(params: E): E {
    return params;
}

updateEntity({ abilities: ["fly"], label: "superbot001", rank: 13 });

interface Entity {
    abilities: Array<string>;
    label: string;
    rank: number;
}

// applying constraints using classes
class NewPerson {
    constructor(public age: number) {}
}

class Customer extends NewPerson {
    constructor(public name: string, age: number) {
        super(age);
    }
}

// we can apply derived/sub-classes as contraints which will ref props of its base class 
function upgradePerson<P extends Customer>(params: P): P {
    return params;
}

upgradePerson(new Customer('bella', 18));