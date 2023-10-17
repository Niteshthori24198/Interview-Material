
// Liskov substitution  : - It says that objeect of parent class [super-class] should be replaceable by it's child class [sub class]. without affecting the overall flow of the code. a parent class should accept both objects : [parent as well as child];


// Bad - Example : - 

class Bird {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;

    }

    makesound() { }

    eat() { }

    fly() { }

}


class Duck extends Bird {

    constructor() {

        super();
    }

    eat() { }

    makesound() { }

    fly() { }

}


class Panguins extends Bird {
    constructor() {
        super()
    }

    makesound() { }

    eat() { }

    // but here comes a issue that a panguins can't fly. so it breaks the LISKOV substitution principles as we can not replace our parent class obj with child class obj.

    fly() { }
}


// Good - way : - Applying LISKOV


class Bird {

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;

    }

    makesound() { }

    eat() { }

}



class FlyyingBirds extends Bird {
    fly() { }
}


class Duck extends FlyyingBirds {

    constructor() {

        super();
    }

    eat() { }

    makesound() { }

    fly() { }

}


class Panguins extends Bird {
    constructor() {
        super()
    }

    makesound() { }

    eat() { }

}
