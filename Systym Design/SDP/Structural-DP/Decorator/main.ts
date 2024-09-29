// The Decorator Pattern allows you to add new functionality to an object without altering its structure.

// Real-life Example: Imagine you buy a basic coffee. Now, you want to add milk and sugar. You are adding functionalities to the coffee without modifying its base.



interface Coffee {
    cost(): number;
    description(): string;
}


class BasicCoffe implements Coffee {
    cost(): number {
        return 15;
    }

    description(): string {
        return `This is a regular Coffee`
    }
}



class SugarDecorator implements Coffee {
    private coffee: Coffee
    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost() + 5;
    }

    description(): string {
        return this.coffee.description() + "With Extra Sugar"
    }
}


let c = new BasicCoffe();

console.log(`${c.description()} and it's cost is : ${c.cost()}`)

c = new SugarDecorator(c);

console.log(`${c.description()} and it's cost is : ${c.cost()}`)