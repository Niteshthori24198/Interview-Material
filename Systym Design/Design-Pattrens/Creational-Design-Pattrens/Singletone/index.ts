// Singleton is a design pattern that ensures that a class has only one immutable instance. Said simply, the singleton pattern consists of an object that can't be copied or modified.



class A {

    private static a: A;

    constructor() {
        if (A.a != undefined) {
            console.log('Already exists instace');
            return;

        } else {
            A.a = this;
        }
    }    

    hello() {
        console.log('hyy');

    }

}


const Bakshi = new A();

const Nitesh = new A();

Bakshi.hello()

Nitesh.hello()



