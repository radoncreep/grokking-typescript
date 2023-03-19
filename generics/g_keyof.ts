// T is Product interface
// keyof T are the keys of the Product interface e.g brand, sales etc.
// it helps to catch accessing non-existent properties from a type at compile time
// in order to avoid a program crashing at runtime

class ProductManager<T> extends Store<T> {
    find(key: keyof T, value: unknown) {
        return this._objects.find((obj) => obj[key] === value);
    }
}

let product = new ProductManager<Product>();
product.find("brand", "basel");

