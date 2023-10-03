
// ISP : - it says that a parent class should not force child class to implements all the methods defined in it.

// Bad - Example : - 

interface Vehicle {

    setprice(price: number): void;

    setColor(color: string): void;

    startEngine(): void;

    fly(): void;

}

class ByCycle implements Vehicle {

    // @ override methods : 

    setprice(price: number): void { }

    setColor(color: string): void { }

    startEngine(): void { }

    fly(): void { }

    // but here comes a problem that a bycycle can't fly as well as it doesn't have an engine. so it creates a problem so we have to apply interface seggregation here.
}



// Good - Way : -  Apply ISP 


interface Vehicles {

    setprice(price: number): void;

    setColor(color: string): void;
}

interface Flyable {

    fly(): void;

}

interface HasEngine {

    startEngine(): void;
}

class BiCycle implements Vehicles {

    setprice(price: number): void { }

    setColor(color: string): void { }
}

class Car implements Vehicles, HasEngine {

    setprice(price: number): void { }

    startEngine(): void { }

    setColor(color: string): void { }
}


class Aeroplane implements Vehicles, HasEngine, Flyable {

    setprice(price: number): void { }

    startEngine(): void { }

    setColor(color: string): void { }
    
    fly(): void {}
}