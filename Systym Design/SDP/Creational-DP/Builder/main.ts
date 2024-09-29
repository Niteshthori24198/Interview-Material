// The Builder Pattern is used to construct complex objects step by step. It allows you to create different representations of an object using the same construction process. This pattern is especially useful when you need to create an object with many optional parameters.

// Real-life Example:  Imagine you want to build a house. Depending on your needs, you can have different configurations like the number of bedrooms, the presence of a Swimming Pool, and whether you want a garden or not.



class House {
    private numberOfBedrooms: number;
    private hasSwimmingPool: boolean;
    private hasGarden: boolean;

    constructor(builder: HouseBuilder) {
        this.numberOfBedrooms = builder.numberOfBedrooms;
        this.hasGarden = builder.hasGarden;
        this.hasSwimmingPool = builder.hasSwimmingPool;
    }


    getDetails() {
        console.log(`House has ${this.numberOfBedrooms} Bedrooms with ${this.hasGarden ? "Big Garden" : "No Garden"} and ${this.hasSwimmingPool ? "Big Swimming pool" : "No Swimming Pool"}.`)
    }

}



class HouseBuilder {
    numberOfBedrooms: number = 1; // Default
    hasSwimmingPool: boolean = false;  // Default
    hasGarden: boolean = false;  // Default

    constructor(numberOfBedrooms: number) {
        this.numberOfBedrooms = numberOfBedrooms;
    }

    addGarden(): HouseBuilder {
        this.hasGarden = true;
        return this
    }

    addSwimmingPool(): HouseBuilder {
        this.hasSwimmingPool = true;
        return this
    }

    build(): House {
        return new House(this)
    }
}



const myHouse = new HouseBuilder(3);

myHouse.
    addGarden()
    .addSwimmingPool()
    .build()
    .getDetails()