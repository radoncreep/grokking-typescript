What are decorators
Decorators are attributes we apply to classes and their members. And with these we can change how they behave.
Under the hood, these decorators are just JS functions (with Pascal naming convention) that gets called by the JS runtime. 
The JS engine/runtime which executes our code is going to call this function and pass our class to it.

e.g 
@Component
class ProfileComponent
In the @Component decorator function, we have a chance to modify these class.
So we can add new properties, new methods, or we can change the implementation of existing methods (override).

Because at the moment (March 26, 2023), decorators are still an experimental feature, therefore we have to enable
a special compiler option.

Depending on where we apply a decorator, the number and type of parameter varies.

Class decorators
Applying a decorator to a class, means the decorator function will have a single parameter that represents our constructor function with a type "Function" (important because the runtime assumes this is a class) and the parameter represents our constructor function.
(See classDecorator module).
We can add, modify and delete new properties and methods. There are no limitations.
we can access the "prototype" of the constructor. Every object in JS has a prototype, that inherits all the types and methods of that obj.
We can use inheritance to solve the problem of adding properties and modify from a base class. But Decorators is just another way to do so.

Parameter decorators
Sometimes we need to pass arguments to our decorators. All we need to do is return a decorator inside decorator.
The outer decorator function is called decoratory factory (probably because it produces decorators).

Decorator Composition
Multiple decorators can be applied to a class or its members.
When this happens execution occurs in a bottom-up manner. Where the result from each decorator is passed to the one above it.

Method decorators
To apply a decorator on a method, the decorator function requires 3 parameters.
The first parameter is an object that owns the target method with a type of any. The TS compiler expects type "any" from us.
The second parameter is the name of the target method with a type of string.
The third, is the descriptor object of the target method. Every property in an object has a decriptor property that describes that property. It has a type "PropertyDescriptor".
The "descriptor" obj has a property "value" that is used to reference the target method

enhancing the original method will require us to make a reference to it before modification, as so,

arrow functions dont define their own "this" keyword, so they can't be used as methods in a class
with that said always use a this keyword

to accept any number of arguments passed to the decorator function, use the spread operator on the parameters
and anote to "any" (...args: any)

Property decorators

Accessorts decorators
These are similart to method decorators because accessors under-the-hood are just methods.
They have the same number of parameters and with their types respectively.
