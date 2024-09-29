"use strict";
//The Factory Pattern is used to create objects without specifying the exact class of object that will be created. This pattern provides a method that returns different types of objects based on input.
class SUV {
    constructor() {
        this.model = "SUV";
        this.price = "15L";
    }
    getDetails() {
        return `Car is SUV - 700`;
    }
}
class Swift {
    constructor() {
        this.model = "Swift";
        this.price = "5L";
    }
    getDetails() {
        return `Car is Swift Desire`;
    }
}
class CarFactory {
    static createCar(type) {
        if (type == "SUV") {
            return new SUV();
        }
        else if (type == "Swift") {
            return new Swift();
        }
        else {
            throw new Error("No car");
        }
    }
}
const car1 = CarFactory.createCar("SUV");
const car2 = CarFactory.createCar("Swift");
console.log("Car 1 : ", car1.model, car1.price, car1.getDetails());
console.log("Car 2 : ", car2.model, car2.price, car2.getDetails());
