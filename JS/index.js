
// this keyword : 

const obj = {
    value: 'Hello, JavaScript!',
    printValue: function () {
        console.log(this.value)
    }

};

// implicit binding

obj.printValue() // output : - Hello JS




const obj1 = {
    value: 'Hello, JavaScript!',
    printValue: function () {
        console.log(this.value)
    }

};



const print1 = obj1.printValue;

print1(); // output is :  undefined 





const obj2 = {
    value: 'Hello, JavaScript!',
    printValue: function () {
        return () => {
            console.log(this.value)
        }
    }

};



const print2 = obj2.printValue();

print2(); // output is :  Hello, JavaScript!

// here this is attached to parent and arrow function is taking reference from parent this.





const obj3 = {
    value: 'Hello, JavaScript!',
    printValue: () => {
        return () => {
            console.log(this.value)
        }
    }

};

const print4 = obj3.printValue();

print4() // output : - undefined : due to this keyword






const obj4 = {
    value: 'Hello, JavaScript!',
    printValue: function () {
        return function () {
            console.log(this.value)
        }
    }

};

const print5 = obj4.printValue().bind(obj);

print5() // output : - Hello JS




const obj5 = {
    value: 'Hello, JavaScript!',
    printValue: function () {
        return function () {
            console.log(this.value)
        }
    }

};

const print6 = obj5.printValue()

print6() // output : - undefined



// this with settimeout :


const ob = {
    value: 'Hello, JavaScript!',
    printValue: function () {
        setTimeout(function () {

            console.log("==>",this.value);

        }, 1000);
    }
};

ob.printValue(); // undefined bcz settimeout is Async and it will be resolved outside browser where this point to the window object.




// this with Arrow function :


const oj = {

    name: 'John',
    greet: () => {
        console.log(`Hello, ${this.name}!`);
    }
};


oj.greet(); // Hello , undefined !



class Counter {
    count = 0;
    increment = () => {
        console.log(++this.count);
    }
}

const counter = new Counter();
counter.increment(); // output : 1

// Explanation: Arrow functions inside class properties capture the this value of the class instance. In this case, this.count correctly references the count property of the counter instance.


function greet(obj){

    const greeting = ()=>{
        console.log(this.name);
    }

    greeting()

}


greet.call({name:"hello"}) // hello: here arrow function takes parent this.






// // call back to promise convertion


function fetchData(callback) {
    setTimeout(function () {
        callback('Data received!');
    }, 1000);
}

fetchData(function (data) {
    console.log(data);
});



// // conversion to promise from callback

function handlecalback(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('Data received!');
        }, delay);
    })
}


handlecalback(2000).then((data) => {
    console.log(data);
})


// parseInt(value, radix)

parseInt("10", 10);
parseInt("010");
parseInt("10", 8);
console.log(parseInt("0x10"))
parseInt("10", 16);


// Object methods


let myobj = {
    name:"nitesh",
    address:{
        city:"SGNR"
    }
}

Object.freeze(myobj)

myobj.name="kishan"

myobj.age=25;

delete myobj.name;


// these all above three all not allowed

myobj.address.city="bhilwara"

// this is allowed

console.log("myobj",myobj);


// // if we use below method then it allows for all updation but won't allow delete or new addition.

Object.seal(myobj)


myobj.name="kishan"

myobj.age=25;

delete myobj.name;

console.log("myobj",myobj);
