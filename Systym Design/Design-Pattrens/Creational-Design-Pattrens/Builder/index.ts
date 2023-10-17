
// The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.

// The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

// If we had a class or a factory function, the object we instantiate will always have all the properties and methods declared in that class/factory. But using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.




class Nitesh {

    private income: number;

    private email: string;

    private relationshipstatus: boolean;

    constructor(income: number, email: string, relationshipstatus: boolean) {
        this.income = income;
        this.email = email;
        this.relationshipstatus = relationshipstatus;
    }

}



class NiteshBuilder {

    private income: number;

    private email: string;

    private relationshipstatus: boolean;

    constructor(){}

    SetIncome(amt: number): NiteshBuilder {

        this.income = amt;

        return this;

    }

    SetEmail(email: string): NiteshBuilder {

        this.email = email;

        return this
    }

    SetRelationShipStatus(status: boolean): NiteshBuilder {


        this.relationshipstatus = status;

        return this;
    }


    Build():Nitesh{

       return new Nitesh(this.income,this.email,this.relationshipstatus);

    }


}


let b = new NiteshBuilder();

let newnitesh = b.SetEmail('nitesh@1').SetIncome(100).SetRelationShipStatus(true).Build();

console.log(newnitesh)