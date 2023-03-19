class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// how to extend the above generic class - There are 3 ways to do this.

// pass on the generic type param from the child class to the base class
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let storeObj = new CompressibleStore<Product>();
storeObj.add({ 
    brand: "apple", 
    name: "apple", 
    price: 1000, 
    sales: 1000000 
});

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find((obj) => obj.name === name);
    }
}

// Fix the generic type parameter
class ProductStore extends Store<Product> {
    filterByCateogry(category: string): Product[] {
        return this._objects.filter((obj) => obj.brand === category);
    }
}
