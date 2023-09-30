
let obj = {

    name: "loki",

    age: 25,

    address: {

        state: {
            city: 'SGNR'
        }
    },
    data: [
        [1,2,3,4],
        {
            phone: 123
        },
        {
            email: 'abc@1'
        },
        {
            job: {
                developer: {
                    chutiya: 'yes'
                }
            }
        }
    ]


}


// destructure the object : 

const { name: Name, age: Age, address: { state: { city } } } = obj;

const { data: [{ phone }, { email }, { job: { developer: { chutiya } } }] } = obj;

// console.log(Name, Age, city, phone, email, chutiya)



// make all keys of object capital and store in an array : 


let Keys = [];

handleObjectKeys(obj);

// console.log(Keys)

function handleObjectKeys(obj) {

    for (let k in obj) {

        Keys.push(k);

        // check whether the keys is nested or not 

        if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
            handleObjectKeys(obj[k]);
        } else if (typeof obj[k] === 'object' && Array.isArray(obj[k])) {
            handleArray(obj[k])
        }

    }

}


function handleArray(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object' && !Array.isArray(arr[i])) {
            handleObjectKeys(arr[i]);
        } else if (typeof arr[i] === 'object' && Array.isArray(arr[i])) {
            handleArray(arr[i])
        }
    }

}



// shallow and deep copy : 

let nitesh = {
    name: 'Nitesh',
    address: {
        state: 'Raj'
    }
}

let shallowobj = Object.assign({}, nitesh) || { ...nitesh };

shallowobj.name = 'Thori';

shallowobj.address.state = 'Rajasthan'

// console.log(nitesh, shallowobj)

let deepcopy = JSON.parse(JSON.stringify(nitesh));

deepcopy.address.state = 'Delhi';

// console.log(nitesh,deepcopy)




// polyfilling 

let array = [1, 2, 3, 4, 5];

Array.prototype.print = function () {

    // console.log('Welcome');

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i] ** 2;
    }

}

array.print()

// console.log(array)



// inheritance : 


// 1. factory function 


employee.prototype.getinfo = function () {
    console.log(`My name is ${this.name} and Salary is ${this.sal} Rs.`)
}



function employee(name, sal) {

    let obj = {};

    obj.name = name;

    obj.sal = sal;

    // create a chain beetween function prototype and object

    Object.setPrototypeOf(obj, employee.prototype);

    return obj;

}


const emp = employee('Nitesh', 100);

emp.getinfo()


// create a chain beetween two function prototypes

Object.setPrototypeOf(engineer.prototype, employee.prototype)

// engineer.prototype = Object.assign(employee.prototype)

// engineer.prototype = Object.create(employee.prototype)



engineer.prototype.getInfo = function () {
    console.log(`My name is ${this.name} and Salary is ${this.sal} Rs. and i works in ${this.dept} department.`)
}


function engineer(name, sal, dept) {

    let obj = employee(name, sal);

    obj.dept = dept;

    Object.setPrototypeOf(obj, engineer.prototype);

    return obj;

}


const eng = engineer('Nitesh', 1000, 'CS');


eng.getinfo()
eng.getInfo()





// 2. constructor function


Employee.prototype.getinfo = function () {
    console.log(`My name is ${this.name} and Salary is ${this.sal} Rs.`)
}



function Employee(name, sal) {


    this.name = name;

    this.sal = sal;


}


const emp1 = new Employee('Nitesh', 100);

emp1.getinfo()


// create a chain beetween two function prototypes

Object.setPrototypeOf(Engineer.prototype, Employee.prototype)




Engineer.prototype.getInfo = function () {
    console.log(`My name is ${this.name} and Salary is ${this.sal} Rs. and i works in ${this.dept} department.`)
}


function Engineer(name, sal, dept) {

    Employee.call(this, name, sal);

    this.dept = dept;

}


const eng1 = new Engineer('Nitesh', 1000, 'CS');


eng1.getinfo()
eng1.getInfo()





// 3. ES6 classes




class Employee1 {

    constructor(name, sal) {

        this.name = name;

        this.sal = sal;

    }

    getinfo() {
        console.log(`My name is ${this.name} and Salary is ${this.sal} Rs.`)
    }


}


const e1 = new Employee1('Nitesh', 100);

e1.getinfo()



class Engineer1 extends Employee1 {

    constructor(name, sal, dept) {

        super(name, sal);

        this.dept = dept;

    }

    getInfo() {
        console.log(`My name is ${this.name} and Salary is ${this.sal} Rs. and i works in ${this.dept} department.`)
    }
}


const en = new Engineer1('Nitesh', 1000, 'CS');


en.getinfo()
en.getInfo()





// static methods and getter, setter

class Company {

    static totalemp = 0;

    #sal = 0;

    constructor(empname) {
        this.name = empname;
        Company.totalemp++;
    }

    static getTotalEmp() {
        console.log(Company.totalemp)
    }

    get getsal() {
        console.log(`Salary is ${this.#sal}`)
    }

    set setSal(newsal) {
        this.#sal = newsal;
    }

}

const em1 = new Company('Nitesh');

Company.getTotalEmp();

em1.setSal = 100;

em1.getsal



// currying 



const sum = (a) => {

    return (b) => {

        return (c) => {

            console.log(a + b + c);

        }
    }

}


sum(1)(2)(3)



// infinite currying 


const mysum = (a) => {

    return (b) => {

        if (b) {
            return mysum(a + b);
        }

        return a
    }

}

console.log(mysum(1)(2)(3)())







// composition : - 


const canteach = {
    teach: () => {
        console.log('Can teach')
    }
}

const canStudy = {
    study: () => {
        console.log('Can Study')
    }
}

const canBeat = {
    Beat: () => {
        console.log('Can Beat')
    }
}



function Student() { }

function Teacher() { }


mixing(Student.prototype, canStudy);

mixing(Teacher.prototype, canBeat, canStudy, canteach)


function mixing(source, ...val) {
    Object.assign(source, ...val)
}

const s1 = new Student();

const t = new Teacher();

s1.study()

t.teach()



// nullish op : - first not (null or undefined) always takes

console.log(true ?? "a" ?? "a")


// Promise methods 


let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('a')

    }, 1000);
});

let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('b')
    }, 2000);
});

let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        rej('c')
    }, 0);
});



Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})



let str = 'Nag is NagGggggg the lwda Nagxggg';

console.log(str.match(/nag+/ig))


let s = 'missisipsssis';

// output : ['ss','s','sss','s']

console.log(s.match(/s+/ig))


let num = 12345678901;

let pattren = /^[0-9]{5,10}$/;

console.log(pattren.test(num))



let pass = 'aA1!1@#22'

let re = /[A-Z]+[a-z]+[0-9]+[!@#$%^&*]+/i;

console.log(re.test(pass))
