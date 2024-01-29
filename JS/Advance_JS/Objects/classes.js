
class Person {

    constructor(name) {

        this.name = name;

        // this method will not go in Person prototype
        this.greet = function () {
            console.log(`Hello ${this.name}`)
        }
    }

    // this method will go in Person prototype

    sayHi() {

        console.log(`Hi ${this.name}`)
    }

}



class Nitesh extends Person {

    constructor(name) {
        super(name)
    }

    sayHi() {

        super.sayHi();
        console.log(`Hello from ${this.name}`)
    }
}

let n = new Nitesh("nitesh");