
// inheritance : - 

// 1. >  Factory function : 


// adding methods to prototype of employee

employee.prototype.printdata = function () {

    console.log(`My name is : ${this.name} and i am ${this.age} yr old.`)

}




function employee(name, age) {

    let obj = {};

    obj.name = name;

    obj.age = age;



    // we need to create a chain beetween the object and function prototype


    Object.setPrototypeOf(obj, employee.prototype)

    return obj;

}

const emp = employee("nitesh", 25)

emp.printdata()




// Here create a chain beetween two function Prototypes : 
// 1.> 

Object.setPrototypeOf(engineer.prototype, employee.prototype)

// 2.> 

engineer.prototype = Object.assign(employee.prototype)


// 3.> 


engineer.prototype = Object.create(employee.prototype);


engineer.prototype.getinfo = function () {
    console.log(`My name is ${this.name} and I am ${this.age} yr old and I earn ${this.sal} Rs.`)
}


function engineer(name, age, sal) {

    let obj = employee(name, age)

    obj.sal = sal;


    // now create a chain

    Object.setPrototypeOf(obj, engineer.prototype);

    return obj


}


const eng = engineer("Nitesh", 24, 1000);

eng.printdata()

eng.getinfo()










// 2. > Constructor function : - 



Student.prototype.printdata = function () {

    console.log(`My name is : ${this.name} and i am ${this.age} yr old.`)

}




function Student(name, age) {



    this.name = name;

    this.age = age;



}

const student = new Student("nitesh", 25)

student.printdata()




// Here create a chain beetween two function Prototypes 

Object.setPrototypeOf(Department.prototype, Student.prototype)



Department.prototype.getinfo = function () {
    console.log(`My name is ${this.name} and I am ${this.age} yr old and I study in ${this.dept} dept.`)
}


function Department(name, age, dept) {

    Student.call(this, name, age)

    this.dept = dept;

}


const st = new Department("Nitesh", 24, 'CSE');

st.printdata()

st.getinfo()








// 3. > ES-6 Classes :-






class Employee {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    printdata() {

        console.log(`My name is : ${this.name} and i am ${this.age} yr old.`)

    }

}

const e = new Employee("nitesh", 25)

e.printdata()






class Engineer extends Employee {


    constructor(name, age, sal) {
        super(name, age);
        this.sal = sal;
    }

    getinfo() {
        console.log(`My name is ${this.name} and I am ${this.age} yr old and I earn ${this.sal} Rs.`)
    }


}


const en = engineer("Nitesh kumar", 24, 100000);

en.printdata()

en.getinfo()









// Static methods and getter, setter : - 





class Student1 {

    #sal = 0;

    static count = 0;

    constructor(name) {
        this.name = name;
        Student1.count++;
    }


    static getCount() {
        console.log(`The number os instance created is : ${Student1.count}`);
    }


    get getSalaryinfo() {

        console.log(`Salary is : ${this.#sal}`)

    }


    set NewSalary(amt) {

        this.#sal += amt;

    }

}


const s1 = new Student1("Nitesh")
const s2 = new Student1("kishan")

s1.getSalaryinfo;

s1.NewSalary = 100;

s1.getSalaryinfo;

s2.NewSalary = 100;

s2.getSalaryinfo;

Student1.getCount()








// currying : - 



const calculateSum = (a) => (b) => (c) => a + b + c;

console.log(calculateSum(1)(2)(3))


// Infinite currying


const Sum = (a) => (b) => {
    if (b) {
        return Sum(a + b);
    }
    return a;
}

console.log(Sum(1)(2)(3)(4)(5)())

