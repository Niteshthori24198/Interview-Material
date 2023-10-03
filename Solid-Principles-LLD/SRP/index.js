
// Single Responsiblity Principle : - Every class should have only one reason to change. Every class should have a single responsiblity on it.


// Bad - Example : -

class Student {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    register() {

        // save student info to db.

        // generate email on registration.

        this.notify()

    }

    notify() {
        // send emails to students.
    }

}


const student1 = new Student("Nitesh", "n@1");

student1.register();





// Good - Example : - follows SRP


class SendmailNotification {

    notify(student) {
        // write email sending code.
        console.log(`Dear ${student.name},your Registration has been Successfull.`)
    }

}


class Student {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    register() {

        // save student info to db.

        // generate email on registration.

        const studentnotifier = new SendmailNotification();

        studentnotifier.notify(this);

    }

}


const student = new Student("Nitesh", "n@1");

student.register();
