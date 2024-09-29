
//The Factory Pattern is used to create objects without specifying the exact class of object that will be created. This pattern provides a method that returns different types of objects based on input.

// Real-life Example: Imagine a car factory. Based on the model you request (e.g., SUV or Swift), the factory returns the appropriate car. You don't have to know the internal mechanics of how each car is built; the factory takes care of that.



interface Car {
    model: string;
    price: string;
    getDetails(): string;
}


class SUV implements Car {
    model: string = "SUV";
    price: string = "15L";
    getDetails(): string {
        return `Car is SUV - 700`
    }
}


class Swift implements Car {
    model: string = "Swift";
    price: string = "5L";
    getDetails(): string {
        return `Car is Swift Desire`
    }
}



class CarFactory {

    static createCar(type: string): Car {

        if (type == "SUV") {
            return new SUV();
        } else if (type == "Swift") {
            return new Swift()
        } else {
            throw new Error("No car")
        }
    }
}


const car1 = CarFactory.createCar("SUV");
const car2 = CarFactory.createCar("Swift");

console.log("Car 1 : ", car1.model, car1.price, car1.getDetails())
console.log("Car 2 : ", car2.model, car2.price, car2.getDetails())