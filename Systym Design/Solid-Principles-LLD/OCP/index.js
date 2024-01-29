
// Open-Close Principles : - Open for extension but closed for modification. child class can extends behaviour of parent class but can not modify the exiting code in parent class.


// real time example : - Mixture Grinder : - we can not change the engine of mixture but we can change the  extension of mixture.

// Bad - Example : -


// here if we want to add a new placement mechanisum then we have to modify the original class, which is actually breaking the OCP principle.

// Bad design violating OCP

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class AreaCalculator {
    calculateArea(rectangle) {
        return rectangle.width * rectangle.height;
    }
}

// Now, let's say we want to add support for calculating the area of circles

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

// We need to modify the AreaCalculator to support circles
// This violates the Open/Closed Principle because we are modifying existing code

class AreaCalculator {
    calculateArea(shape) {
        if (shape instanceof Rectangle) {
            return shape.width * shape.height;
        } else if (shape instanceof Circle) {
            return 3.14 * shape.radius * shape.radius;
        }
    }
}


// Good - way : - 

// Now we seperate the method in one class and whenever we creates a new class we can simply extends it from parent and override it accordinglt without modifiying original code

// Improved design following OCP

// Define a Shape interface

class Shape {
    calculateArea() {
        throw new Error("Method not implemented");
    }    
}    

// Implement Rectangle and Circle classes as per the Shape interface

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }    

    calculateArea() {
        return this.width * this.height;
    }    
}    

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }    

    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }    
}    

// Now, the AreaCalculator can work with any shape that follows the Shape interface without modification

class AreaCalculator {
    calculateArea(shape) {
        return shape.calculateArea();
    }    
}    


