
// constructor function :

Shape.prototype.area = function () {
    console.log('Area')
}

function Shape(color) {

    this.color = color

    this.sayColor = function () {

        console.log(this.color)
    }
}

let s = new Shape("red");
s.area();


// we create a link beetween circle prototype and shape prototype. so we can access methods defined in shape prototype. but when we reset circle prototype then we need to reset constructor also otherwise it's replaced with shape constructor.

// Circle.prototype.constructor = Circle; // this is default setting for constructor.

Circle.prototype = Object.create(Shape.prototype); // here we have replaced the Circle constructor. now we can't create object dynamically. we need to reset the constructor because it's replaced with Shape and if we create an object dynamically then we get object of Shape not Circle.

Circle.prototype.constructor = Circle;


Circle.prototype.draw = function () {

    console.log('draw')
}

function Circle(radius, color) {

    Shape.call(this,color)

    this.radius = radius;
  
}

let c1 = new Circle(1, "red");

// we can create objects dynamically using construtor.

let c2 = new Circle.prototype.constructor(2, "blue");
c1.area()

