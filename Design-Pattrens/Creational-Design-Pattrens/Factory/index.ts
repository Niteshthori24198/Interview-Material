
// The Factory method pattern provides an interface for creating objects that can be modified after creation.



// class A {

//     private static a: A;

//     private constructor() {}

//     static getInstance():A{

//         if(A.a==undefined){

//             let instance:A=new A();

//             A.a=instance;

//         }

//         return A.a;

//     }

//     hello() {
//         console.log('hyy');

//     }

// }


// const Bakshi = A.getInstance();

// const Nitesh = A.getInstance();

// Bakshi.hello();

// Nitesh.hello();

// console.log(Bakshi===Nitesh);





class Nitesh {

    private static a: Nitesh;

    private constructor() { }

    static getinstance(): Nitesh {
        if (Nitesh.a == undefined) {
            Nitesh.a = new Nitesh()
        }
        return Nitesh.a;
    }

    hello(){
        console.log('hello');
        
    }

}

let i = Nitesh.getinstance()
