
// 1. > shallow copy v/s deep copy

/* Shallow copy :-

A shallow copy creates a new object or array, but it only copies references to the original objects or arrays. If the original object contains nested objects or arrays, the references to those nested objects are still shared between the original and the copied object. In other words, changes to the nested objects will affect both the original and the copied object.


Deep Copy : -

A deep copy, on the other hand, creates a completely independent copy of the original object or array, including all nested objects or arrays. Any changes made to the deep copy will not affect the original object, and vice versa.



*/

// Explanation code :

let arr=[1,2,3,[4,5]];

let shallowCopy = [...arr];

let shallowCopy1=Object.assign([],arr)

shallowCopy[3][1]=100;

shallowCopy[2]=99;
shallowCopy[0]=99;

console.log("original",arr)

console.log(shallowCopy);

// we have to do like this

let deepcopy = JSON.parse(JSON.stringify(arr));

deepcopy[3][1]=100;

deepcopy[2]=100;

console.log(arr,deepcopy)

/*********** ********** */

//2. >  destructuring of nested object.

let user = {
    firstName: 'Vivek',
    lastName: 'Agarwal',
    age: 38,
    posts: [
        { title: 'Post 1', comments: 10 },
        { title: 'Post 2', comments: 11 }
    ],
    Address: {
        state: {
            city: "XYZ"
        }
    }
}


let { age: a, posts: [{ comments: c1 }, { comments: c2 }], Address: { state: { city: cty } } } = user


console.log(a,t1,t2,cty);


/******** ******** */

/********* ****/

//Polyfilling : -


let ar = [1, 2, 3, 4, 5];

Array.prototype.print = function () {

    console.log(this.join('\n'))

}

// Array.prototype.Root = function (x = 1) {

//     let r = this.map((e) => {
//         return e ** x
//     })
//     console.log(r)
// }


// Array.prototype.NiteshFilter = function (cb) {

//     console.log(cb(this))

// }

// function fun(a) {

//     let res = [];

//     for (let i = 0; i < a.length; i++) {
//         if (i % 2 == 0) res.push(a[i])
//     }

//     return res;

// }

ar.print();
// arr.Root();
// arr.NiteshFilter(fun);


/******* **** */



/********* ***** */

// Inheritance :

//  1.> factory function : -



/***** ***** */

employe.prototype.getInfo = function () {
    console.log(`Name : ${this.name} and Age : ${this.age}`)
}


function employe(name, age) {

    let obj = {}

    obj.name = name;

    obj.age = age;

    // create a chain beetween obj and function prototype.

    Object.setPrototypeOf(obj, employe.prototype);

    return obj;
}


const emp = employe("Nitesh", 25);

emp.getInfo();


// create a chain beetween two prototypes of two function prototypes.

Object.setPrototypeOf(engineer.prototype,employe.prototype)



engineer.prototype.getSal = function () {
    console.log(`salary is : ${this.sal}`)
}

function engineer(name, age, sal) {

    let eng = employe(name, age);

    eng.sal = sal;

    Object.setPrototypeOf(eng, engineer.prototype);

    return eng;

}

const e = engineer("Nitesh", 25, 100);

e.getSal()

e.getInfo()



/***** ***** */



// 2. constructor function : -


/***** ***** */

Employe.prototype.getInfo = function () {
    console.log(`Name : ${this.name} and Age : ${this.age}`)
}


function Employe(name, age) {

    this.name = name;

    this.age = age;

}


const emp = new Employe("Nitesh", 25);

emp.getInfo();


// create a chain beetween two prototypes of two function prototypes.

Object.setPrototypeOf(Engineer.prototype, Employe.prototype);

// Engineer.prototype = Object.create(Employe.prototype);

Engineer.prototype.getSal = function () {
    console.log(`salary is : ${this.sal}`)
}

function Engineer(name, age, sal) {

    Employe.call(this, name, age)

    this.sal = sal;

}

const e = new Engineer("Nitesh", 25, 100);

e.getSal()

e.getInfo()


/*** ******** */


/***** ***** */



// 3. ES6 classes : -


/***** ***** */


class Employe {

    constructor(name, age) {

        this.name = name;

        this.age = age;

    }

    getinfo() {

        console.log(`Name : ${this.name} and Age : ${this.age}`)
    }

}



class Engineer extends Employe {

    constructor(name, age, sal) {
        super(name, age);
        this.sal = sal;
    }

    getsal() {
        console.log(`slary is : ${this.sal}`)
    }

}



const emp = new Employe("Nitesh",25);

const eng = new Engineer("Nitesh",25,100);

emp.getinfo();

eng.getsal();

eng.getinfo();


/***** ***** */

// getter , setter and static method..


class Student {

    #sal=10;

    static count = 0;

    constructor(name, roll) {

        this.name = name;

        this.roll = roll;

        Student.count++;
    }


    static getInfo() {
        console.log(`total object created : ${Student.count}`)
    }

    get getsal() {
        console.log(`salary is : ${this.#sal}`)
    }


    set Newsal(amt) {
        this.#sal += amt;
    }
}



const s1 = new Student("Nitesh",1);

const s2 = new Student("Kishan",2);

Student.getInfo();

s1.getsal

s1.Newsal = 100;

s1.getsal



/**** **** */

// promise : -

function getSquareroot(n) {
    return new Promise((resolve, reject) => {
        let sqroot = Math.sqrt(n);
        if (sqroot) {
            resolve(sqroot)
        }
        else {
            reject("Error")
        }
    })
}

let a = getSquareroot("hyy");

a.then((d) => {
    return d
})
    .then((v) => {
        console.log(v)
    })
    .catch((err) => {
        console.log(err)
    })


/*** ******** */


function getSquareroot(n) {
    return new Promise((resolve, reject) => {
        let sqroot = Math.sqrt(n);
        if (sqroot) {
            setTimeout(() => {

                resolve(sqroot)

            }, 2000);
            console.log("Output aane wala hai ")
        }
        else {
            reject("Error")
        }
    })
}

let a = getSquareroot(9);

a.then((d) => {
    return d
})
    .then((v) => {
        console.log(v)
    })
    .catch((err) => {
        console.log(err)
    })


/*** ***** */


for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}


for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}


/****** ***** */



//  currying : - 


function f(a){
    return (b)=>{
        if(b){
            return f(a+b)
        }
        return a
    }
}

let r=f(1)(2)();

console.log(r)

// function sum(a) {
//     return (b) => {
//         return (c) => {
//             console.log(a + b + c);

//         }
//     }
// }


// sum(1)(2)(3)


// infinite currying : - 

function sum2(a){
    return (b)=>{
        if(b){
            return sum2(a+b)
        }
        console.log(a);
        return
    }
}

sum2(1)(2)(3)(4)(5)()


/****** ****** */

// timers and intervel


// Problem -1


const fs = require('fs')

fs.readFile("file.txt", "utf-8", (err,data)=>{


    setImmediate(()=>{

        console.log('set Immediate section', data);
    })

    setTimeout(()=>{

        console.log('settimeout section', data);

    },0)



    process.nextTick(()=>{

        console.log('next tick section', data);
    }) 

    const timer = setInterval(()=>{

        console.log('setInterval section', data);

        clearInterval(timer);

    },0)



    let a=5;

    const promise = new Promise((resolve,reject)=>{

        if(a%2){

            resolve("Hello")

        }
        else{

            reject("Byy")

        }
    })

    console.log(promise);

})



/***** **** */


// compositions : - 

const canstudy = {
    study:()=>{
        console.log('Person is studying.')
    }
}


const canTeach = {
    teach:function (){
        console.log('Teacher is teaching')
    }
}


const cansleep = {
    sleep:()=>{
        console.log("So jao")
    }
}


function Student(){};

mixin(Student.prototype, canstudy,cansleep);

function Teacher(){};

mixin(Teacher.prototype, Student.prototype, canTeach);

const s = new Student();

const t = new Teacher();


s.sleep();
t.sleep();
t.teach();
s.study()


function mixin(target , ...sources){
    Object.assign(target, ...sources)
}

/***** **** */


let Name="nitesh";

let pattren = /^n.*h$/i;

let res=Name.match(pattren);

console.log(res);

let isvalid = pattren.test(Name);

console.log(isvalid)


/***** ***** */

let num = 1234567890;

let p = /^\d{10}$/

let isvalid = p.test(num);

console.log(isvalid);


let email ='a#gmail.com';

let patt = /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,}/i;

let validemail = patt.test(email);

console.log(validemail)





