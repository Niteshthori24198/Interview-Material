
// DIV : - It says that a high level module should not be dependent on a low level module. Both should be dependednt on abstraction.

// Let's we have a website: FE [ UI - part ] { HLM } and BE [ DB ]{ LLM }

// Example : let's we want to learn how to drive a car so we don't need to know about the internal details about it like how it's make, how the engine is configured likewise.

// our main aim to implement DIV is making our code/application loosly coupled not tightly. so we can add more flexiblity in it.

// the main reason to make our code decoupled rather than tightly coupled is even if we change our low level module then we don't need to change our high level module. it makes our code more resuable and maintable.


// real life example : power socket in our house. : as we just see it from outside and plug in it. the low level implementation of it's working is hidden and we don't need to worry about that.[ like which wire we are using in backend.] so our high level module is totally decoupled with our low level module.



// Bad - Examlple : - 


class Employee {
    name: string;
    email: string;
    salary: number;

    constructor(name: string, email: string, salary: number) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

    saveInfo(manager: SystemFileManager): void {
        manager.save()
    }
}

class SystemFileManager {
    save(): void {
        console.log('data saved in file');
    }
}

class SystemDBManager {
    save(): void {
        console.log('data saved in db');
    }
}





// Good Example



interface DataManager{

    save(emp:Employees):void;
}



class Employees {
    name: string;
    email: string;
    salary: number;

    constructor(name: string, email: string, salary: number) {
        this.name = name;
        this.email = email;
        this.salary = salary;
    }

    saveInfo(manager:DataManager): void {
        manager.save(this)
    }
}

// we add interface as a middle man btw Employees Class and depended modules


class Filestorage implements DataManager{
    save(emp:Employees):void{
        console.log('Stored');
    }
}