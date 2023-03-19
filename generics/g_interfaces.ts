// the Typescript compiler cannot infer the generic type arguments, so it gives unknown
// we have to explicitly specify

interface IResponse<T> {
    data: T | null;
    error: string | null;
}

function fetchData<T>(url: string): IResponse<T> {
    return { data: null, error: null }
}

interface User {
    username: string;
    password: string;
    email: string;
}

interface Product {
    name: string;
    brand: string;
    price: number;
    sales: number;
}

const result = fetchData<User>("/api/user/?id");
console.log(result.data?.email);

const result2 = fetchData<Product>("/api/product/?id");
console.log(result2.data?.brand);