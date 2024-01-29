// The simplest way to create an object is using an object literal 
const circle = {
    radius: 1,
    draw: function () { }
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) {
    return {
        radius,
        draw: function () { }
    }
}

// Constructor function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () { }
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const z = {};
z.constructor; // returns Object() 

// In JavaScript, functions are objects. They have properties and methods. 
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 

// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};

delete circle.location;

// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ('location' in circle) { }

// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle1(radius) {
    // Public member 
    this.radius = radius;

    // Private member                       
    let defaultLocation = {};
}

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function () { return defaultLocation; },
    set: function (value) { defaultLocation = value; }
});






// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false // not visible in keys so can't iterate over it
});

// Constructors have a "prototype" property. It returns the object 
// that will be used as the prototype for objects created by the constructor. 
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function () { }

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype): 
for (let key in obj) { }