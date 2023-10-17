
// Open-Close Principles : - Open for extension but closed for modification. child class can extends behaviour of parent class but can not modify the exiting code in parent class.


// real time example : - Mixture Grinder : - we can not change the engine of mixture but we can change the  extension of mixture..

// Bad - Example : -


// here if we want to add a new placement mechanisum then we have to modify the original class, which is actually breaking the OCP principle.


class Masai {

    getplacementInProductBaseCompany() {

        console.log('Got place in Microsoft.')

    }

    // let we want one more placement methods

    getplacementInServiceBaseCompany() {

        console.log('Got placed in TCS')

    }
}


// Good - way : - 

// Now we seperate the method in one class and whenever we creates a new class we can simply extends it from parent and override it accordinglt without modifiying original code


class Masai {

    getplacement() {

        console.log('Got Placed in Bucket.')

    }
}



class Nitesh extends Masai {

    constructor() {
        super();
    }

    // @ override method of parent class

    getplacement() {

        console.log('I got placed in Microsoft !');

    }
}



class Kishan extends Masai {

    constructor() {
        super();
    }

    // @ override method of parent class

    getplacement() {

        console.log('I got placed in Agoda !');

    }
}