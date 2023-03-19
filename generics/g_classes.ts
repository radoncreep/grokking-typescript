// when creating a generic class, we pass in a generic type parameter class Reuse<T> {}
// at the point of invoking/instantiation, if the generic type arguments are not explicitly supplied
// the compiler can infer the type of the arguments passed for that instantiation

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, number>('stringkey', 1); // explicity stating generic type args
let pair2 = new KeyValuePair<number, Array<string>>(0, [""]); // using different types with same class
let pair3 = new KeyValuePair('stringkey', 1); // relying on the compiler to infer