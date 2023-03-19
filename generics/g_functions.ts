function arrayUtils<T>(param: T) {
    return [param]
}

let numbers = arrayUtils<string>('1');


// GENERIC METHODS
class ArrayUtils {
    static wrapInArray<T>(param: T) {
        return [param];
    }
}

let values = ArrayUtils.wrapInArray<number>(1); // explicit
let values2 = ArrayUtils.wrapInArray('1'); // infer