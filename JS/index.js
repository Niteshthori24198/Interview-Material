
// this keyword : 

// const obj = {
//     value: 'Hello, JavaScript!',
//     printValue: function () {
//         console.log(this.value);
//     }
// };

// // implicit binding

// obj.printValue()


// const print1 = obj.printValue;
// print1(); // output is :  undefined 


// // hard binding

// const print = obj.printValue.bind(obj);

// print()



// // this with settimeout : 


// const ob = {
//     value: 'Hello, JavaScript!',
//     printValue: function () {
//         setTimeout(function () {

//             console.log("==>",this.value);

//         }, 1000);
//     }
// };

// ob.printValue(); // undefined bcz settimeout is Async and it will be resolved outside browser where this point to window object




// this with Arrow function : 


// const obj = {

//     name: 'John',
//     greet: () => {
//         console.log(`Hello, ${this.name}!`);
//     }
// };


// obj.greet(); // Hello , undefined !



// class Counter {
//     count = 0;
//     increment = () => {
//         console.log(++this.count);
//     }
// }

// const counter = new Counter();
// counter.increment(); // output : 1

// // Explanation: Arrow functions inside class properties capture the this value of the class instance. In this case, this.count correctly references the count property of the counter instance.


// function greet(obj){

//     const greeting = ()=>{
//         console.log(this.name);
//     }

//     greeting()

// }


// greet.call({name:"hello"}) // hello: here arrow function takes parent this.






// // call back to promise convertion


// function fetchData(callback) {
//     setTimeout(function () {
//         callback('Data received!');
//     }, 1000);
// }

// fetchData(function (data) {
//     console.log(data);
// });



// // conversiob to promise from callback

// function handlecalback(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve('Data received!');
//         }, delay);
//     })
// }


// handlecalback(2000).then((data) => {
//     console.log(data);
// })


// // parseInt(value, radix)

// parseInt("10", 10);
// parseInt("010");
// parseInt("10", 8);
// parseInt("0x10");
// parseInt("10", 16);


// Object methods


// let myobj = {
//     name:"nitesh",
//     address:{
//         city:"SGNR"
//     }
// }

// Object.freeze(myobj)

// myobj.name="kishan"

// myobj.age=25;

// delete myobj.name;


// // // these all above three all not allowed

// myobj.address.city="bhilwara"

// // this is allowed

// console.log(myobj);


// // if we use below method then it allows for all updation but won't allow delete or new addition.

// Object.seal(myobj)





