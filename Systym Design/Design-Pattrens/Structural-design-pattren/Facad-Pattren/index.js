
// The Facade Pattern is a structural design pattern that provides a simple and unified interface to a complex subsystem. It acts as a facade or front-facing interface, hiding the complexities of the underlying components, and allows clients to interact with the system more easily.


// Complex Subsystem Components

class OrderProcessing {

    processOrder(orderId) {

        console.log(`Order ${orderId} processed.`);
    }
}

class PaymentProcessor {

    processPayment(orderId, amount) {

        console.log(`Payment of $${amount} for order ${orderId} processed.`);

    }
}


class Shipping {

    shipOrder(orderId, address) {

        console.log(`Order ${orderId} shipped to ${address}.`);

    }
}



// Facade - Unified Interface

class OrderFacade {

    constructor() {

        this.orderProcessing = new OrderProcessing();

        this.paymentProcessor = new PaymentProcessor();

        this.shipping = new Shipping();

    }

    // Simplified method to process an order

    processOrder(orderId, amount, shippingAddress) {

        this.orderProcessing.processOrder(orderId);

        this.paymentProcessor.processPayment(orderId, amount);

        this.shipping.shipOrder(orderId, shippingAddress);

        console.log('Order processing completed successfully.');
    }
}


// Client Code

const orderFacade = new OrderFacade();

orderFacade.processOrder('12345', 100, '123 Main St');



// In this example, we have complex subsystem components: OrderProcessing, PaymentProcessor, and Shipping. The OrderFacade acts as a facade, providing a simplified interface to process an order. The client interacts with the OrderFacade, which internally handles the order processing, payment processing, and shipping operations.