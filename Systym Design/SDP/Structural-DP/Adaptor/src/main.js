"use strict";
// The Adapter Design Pattern is a structural design pattern that allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of one class into an interface that the client expects. This pattern is particularly useful when you want to integrate new functionalities into existing systems without modifying their code.
class CreditCardPayment {
    makePayment(amount) {
        console.log(`Payment of ${amount} is done via CC !!`);
    }
}
class PaypalPayment {
    makePayment(amount) {
        console.log(`Payment of ${amount} is done via Paypal !!`);
    }
}
class CreditCardAdaptor {
    constructor(creditCardPayment) {
        this.creditCardPayment = creditCardPayment;
    }
    pay(amount) {
        this.creditCardPayment.makePayment(amount);
    }
}
class PaypalAdaptor {
    constructor(paypalPayment) {
        this.paypalPayment = paypalPayment;
    }
    pay(amount) {
        this.paypalPayment.makePayment(amount);
    }
}
const ccp = new CreditCardPayment();
const ccadp = new CreditCardAdaptor(ccp);
ccadp.pay(100);
