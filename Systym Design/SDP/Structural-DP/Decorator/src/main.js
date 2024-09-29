"use strict";
// The Decorator Pattern allows you to add new functionality to an object without altering its structure.
class BasicCoffe {
    cost() {
        return 15;
    }
    description() {
        return `This is a regular Coffee`;
    }
}
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost() + 5;
    }
    description() {
        return this.coffee.description() + "With Extra Sugar";
    }
}
let c = new BasicCoffe();
console.log(`${c.description()} and it's cost is : ${c.cost()}`);
c = new SugarDecorator(c);
console.log(`${c.description()} and it's cost is : ${c.cost()}`);
