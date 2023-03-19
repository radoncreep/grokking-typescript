// Sometimes we need to base a type on another type
// This is where Type mapping comes into play
// When we want to reuse an interface with an addition and/or subtraction
//  and we don't want to re-type/hard code all the properties from the original
//  we use a type alias and its block -
//  the index signature operator syntax to dynamically add properties
//  and keyof operators to dynamically get the properties of the Entity type

interface Good {
    name: string;
    price: number;
}

// Only use in a type alias because
type ReadOnlyGood = {
    readonly [Property in keyof Good]: Good[Property];
}

// Type Mapping using Generic types
type OptionalGood<T> = {
    readonly[Key in keyof T]?: T[Key];
}

let optinalGood: OptionalGood<Good> = {
    name: "beans",
    price: 500
}

const good1 = optinalGood.name;
