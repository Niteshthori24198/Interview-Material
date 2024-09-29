// The Adapter Design Pattern is a structural design pattern that allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of one class into an interface that the client expects. This pattern is particularly useful when you want to integrate new functionalities into existing systems without modifying their code.




// Simplicity vs. Complexity: While creating adapters might seem like adding complexity, it ultimately leads to a simpler, more maintainable, and extensible system. The client code remains clean, while each payment method’s specifics are hidden away in their respective adapters.

// Real-World Applications: Many real-world systems need to integrate with various external services (like payment processors, databases, APIs), and the Adapter Pattern provides a robust solution for these integrations.






interface PaymentProcessor {
    pay(amount: number): void;
}



class CreditCardPayment {
    makePayment(amount: number): void {
        console.log(`Payment of ${amount} is done via CC !!`)
    }
}


class PaypalPayment {
    makePayment(amount: number): void {
        console.log(`Payment of ${amount} is done via Paypal !!`)
    }
}



class CreditCardAdaptor implements PaymentProcessor {

    private creditCardPayment: CreditCardPayment;

    constructor(creditCardPayment: CreditCardPayment) {
        this.creditCardPayment = creditCardPayment;
    }

    pay(amount: number): void {
        this.creditCardPayment.makePayment(amount)
    }

}


class PaypalAdaptor implements PaymentProcessor {

    private paypalPayment: PaypalPayment;

    constructor(paypalPayment: PaypalPayment) {
        this.paypalPayment = paypalPayment;
    }

    pay(amount: number): void {
        this.paypalPayment.makePayment(amount)
    }

}


const ccp = new CreditCardPayment();
const ccadp = new CreditCardAdaptor(ccp);
ccadp.pay(100);