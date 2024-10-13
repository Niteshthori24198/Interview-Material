## What is CAP Theorem?

    - CAP Theorem, also known as Brewer's Theorem, states that in a distributed computer system, it is impossible to simultaneously guarantee all three of the following properties:

    - Consistency: All nodes in the system see the same data at the same time.
    - Availability: Every request receives a response, without guaranteeing that it contains the most recent version of the data.
    - Partition tolerance: The system continues to operate despite network partitions that prevent nodes from communicating with each other.
    According to the theorem, a distributed system can only achieve two out of the three properties, leading to different trade-offs in system design.


## What is PACELC Theorem?

    - PACELC Theorem is an extension of CAP Theorem, and it incorporates the concept of eventual consistency. It states that in the presence of network partitions (P), a distributed system must choose between the following three guarantees:

    - Consistency (C): Ensuring all nodes see the same data at the same time.
    - Availability (A): Ensuring every request receives a response, even if it's not the most recent data.
    - Partition tolerance (P): The ability to continue the system's operation despite network partitions.
    - In addition to CAP Theorem, PACELC emphasizes that even in the absence of partitions, a system must make trade-offs between Latency (L) and Consistency (C) when updating data. This means that during normal operation, a system must decide whether to prioritize low latency or strong consistency.


## consistancy pattrens : 

    - Weak consistent : After a data write, the read request may or may not be able to get the new data. This type of consistency works well in real-time use cases like VoIP, video chat, real-time multiplayer games etc. For example, when we are on a phone call, if we lose network for a few seconds, then we lose information about what was spoken during that time.

    - Eventual consistent : Eventual consistency is a consistency model used in distributed systems. It states that if no new updates are made to a given piece of data, all replicas of that data will eventually converge and be consistent with each other. However, there might be a short period during which different replicas may have slightly different versions of the data.

    - Strong consistent : Strong consistency is a different consistency model in distributed systems. It guarantees that all reads and writes to a piece of data will return the most recent write and that all replicas will be immediately consistent with each other.


## What are message queues?

Message queues are a type of communication system used in distributed systems. They enable asynchronous communication between different components or services by passing messages through a queue. These messages can contain information or tasks that need to be processed by the receiving components.


## Forward Proxy:

    - Role: A forward proxy acts on behalf of clients to access resources from the internet. It sits between the client (e.g., user's device) and the internet. When a client makes a request to access a web resource, the forward proxy intercepts the request and forwards it to the internet on behalf of the client.

    - Client Perspective: The client is aware of the presence of the forward proxy, and its requests are explicitly sent to the proxy.

    - Internet Access: Forward proxies are often used to bypass internet restrictions or enhance security by anonymizing the client's IP address. They can cache and filter content, which can improve performance and security for the client.

## Reverse Proxy:

    - Role: A reverse proxy acts on behalf of servers to handle requests from clients. It sits between the client (e.g., web browser) and one or more backend servers (e.g., application servers). When a client sends a request to access a web resource, the reverse proxy intercepts the request and forwards it to the appropriate backend server that can fulfill the request.

    - Client Perspective: Clients are generally unaware of the existence of reverse proxies. They believe they are directly communicating with the server.

    - Load Balancing and Security: Reverse proxies are often used for load balancing across multiple backend servers to distribute incoming client requests efficiently. Additionally, they can provide an extra layer of security by hiding the internal infrastructure details and mitigating some types of attacks.


## SSR rendering v/s Client side rendering : 

    - SSR renders the page on the server and sends a complete HTML page to the client, while CSR sends a minimal HTML page and uses JavaScript to render content on the client-side.

    - SSR usually provides faster initial page loads because the fully rendered HTML is sent by the server, whereas CSR may require additional API requests and JavaScript execution before displaying content.

    - CSR can offer a more interactive user experience as only specific parts of the page can be updated without full page reloads, leading to smoother interactions once the initial page is loaded. SSR requires a new page request to the server for any updates.

    Example : 

    Server-Side Rendering (SSR) Example:

        - Server generates the complete HTML page with product details.
        - Fully rendered HTML page sent to the user's browser.
        - Product details displayed immediately on page load.

    Client-Side Rendering (CSR) Example:

        - Server sends a minimal HTML page with JavaScript bundles.
        - JavaScript fetches product details from API on the client-side.
        - Product details dynamically rendered in the browser after API response.


## What are webhooks?

    Webhooks are a way for web applications to provide real-time notifications to other applications. They work as HTTP callbacks, where a web application sends an HTTP request to a predefined URL (usually provided by the receiving application) whenever a particular event occurs. This allows the receiving application to be notified immediately and take appropriate actions based on the event.

    -  Webhooks are a way for one application to send automatic notifications or data to another application in real-time through HTTP callbacks.

    Example : Real-Time Example:

        Scenario: Let's consider a weather forecasting application that uses webhooks.

        - Event: The weather forecasting app detects a significant change in weather conditions (e.g., a sudden drop in temperature).

        - Webhook Setup: The weather app has set up a webhook to be triggered when such temperature changes occur.

        - HTTP POST Request: Once the weather condition changes, the app sends an HTTP POST request to a predefined URL in another application, such as a notification service.

        - Receiving Application: The receiving application (notification service) has an endpoint to handle incoming webhook requests.

        - User Notification: The notification service processes the webhook request and immediately sends an alert to all users in the affected region, warning them about the temperature drop.

        - Real-Time Alert: Users receive the temperature alert instantly on their devices, helping them stay prepared for the changing weather conditions.


## How is Node.js non-blocking?

    Node.js is non-blocking thanks to its event-driven, single-threaded architecture. Instead of creating a new thread for each client request, it uses a single thread to handle multiple concurrent connections. When an asynchronous operation, such as reading a file or making a network request, is initiated, Node.js continues executing the next operation without waiting for the first one to complete. Once the asynchronous operation is finished, a callback function is called to handle the result. This approach prevents the server from getting blocked while waiting for time-consuming tasks, making it highly efficient in handling large numbers of concurrent connections.

    Node.js is known for its single-threaded, event-driven architecture. However, it does support the concept of concurrency through the use of asynchronous programming and the event loop. While Node.js itself does not directly provide support for multiple threads in the traditional sense, you can achieve parallelism by using techniques such as clustering, worker threads, or by offloading CPU-intensive tasks to separate processes.


## How can you end up blocking your main thread in Node.js?

    The main thread in Node.js runs the event loop, which is responsible for handling all asynchronous operations. If a CPU intensive task is executed directly on the main thread without delegating it to a separate worker thread or using other asynchronous mechanisms, it can block the entire event loop, causing the server to become unresponsive to other requests until the CPU intensive task is completed.

## What is the event loop and What are the different phases in the event loop??

    The event loop is the core of Node.js' asynchronous, non-blocking architecture. It is responsible for handling and dispatching events, including IO operations, timers, and callbacks. The event loop continually checks the event queue for pending events, and when an event is found, it triggers the associated callback, allowing the asynchronous operations to complete.

    The event loop in Node.js consists of several phases, each responsible for handling different types of events. The order of these phases is as follows:

    - Timers: Executes callbacks scheduled by setTimeout() and setInterval() functions.

    - Pending IO Callbacks: Executes I/O related callbacks that were deferred during a previous loop iteration.

    - Poll: Retrieves new I/O events and executes their callbacks. It also calculates how long the event loop should block waiting for IO before checking the timers phase again.

    - Check: Executes setImmediate() callbacks. These callbacks are executed after the poll phase and before the close callbacks.

    - Close Callbacks: Executes close event callbacks, such as those for socket.on('close', ...)


##  What is process.nextTick?

    process.nextTick is a special Node.js function that allows you to schedule a callback to be executed in the next iteration of the event loop, right after the current operation completes. It has a higher priority than setTimeout() and setImmediate().

    - Note : If you have many recursive or long-running process.nextTick callbacks, they can starve the event loop, preventing other IO-related callbacks from being executed. This can lead to reduced IO throughput and increased latency in handling IO operations.

## How can you create your own events?

    In Node.js, you can create custom events using the built-in EventEmitter class. Here's an example:

    const EventEmitter = require('events');

    // Create a new custom event emitter
    const myEmitter = new EventEmitter();

    // Define the event and its listener
    myEmitter.on('customEvent', (message) => {
    console.log('Custom event triggered with message:', message);
    });

    // Emit the custom event with data
    myEmitter.emit('customEvent', 'Hello, world!');

##  What is JWT Token? Why do we need to use JWT? What are some pros and cons?

    JWT (JSON Web Token) is a compact and self-contained way of transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in web applications. A JWT consists of three parts: a header, a payload, and a signature.

    Why use JWT:

        Stateless: JWTs are self-contained, so servers don't need to store session data, making them stateless and scalable.

        Security: JWTs can be digitally signed, ensuring data integrity and authenticity.

        Cross-domain: JWTs can be used across different domains due to their nature as self-contained tokens.

        Performance: Since JWTs are lightweight, they reduce the overhead of transmitting data between the client and server.

    Pros:

        Easy to implement and use.
        
        Can be used for single sign-on (SSO) across multiple services.

        Decentralized and stateless nature makes it scalable.

    Cons:

        Once issued, JWTs cannot be invalidated until they expire (unless using a revocation list, which adds complexity).
        
        As the token carries information, security and privacy concerns must be carefully considered.


## What is the difference between JS on the browser and Node.js?

    Browser JavaScript: JavaScript running in a web browser has access to the Document Object Model (DOM), allowing it to interact with the HTML and CSS of the web page. It can manipulate the page content, handle events, and update the user interface.

    Node.js: Node.js is a server-side runtime environment for JavaScript. Unlike browser JavaScript, Node.js doesn't have direct access to the DOM. Instead, it provides access to file system operations, networking, and other server-related functionalities. Node.js allows JavaScript to be used for backend development, handling server-side tasks, and building applications.

## What is V8?

    V8 is an open-source JavaScript engine developed by Google. It is written in C++ and is used in both the Chrome browser and Node.js runtime. V8 is responsible for interpreting JavaScript code and executing it efficiently. It compiles JavaScript into machine code (instead of interpreting it line by line), which significantly improves its performance. V8 plays a crucial role in making JavaScript a fast and powerful language, both on the client-side and server-side.


## What are clusters ? 

    In Node.js, clusters are a way to utilize multiple processor cores on a machine to enhance the performance and scalability of a server application. By creating a cluster, you can run multiple instances (workers) of your Node.js application, and each instance runs in a separate process, allowing them to handle incoming requests concurrently. This is particularly beneficial for applications with high traffic and CPU-intensive tasks.

    By creating a cluster and utilizing all available CPU cores, your Node.js application can efficiently handle multiple concurrent connections and provide better performance and scalability.

## What is difference beetween mongoose and native mongodb driver in nodejs?

    1. Abstraction Level:

    Mongoose: Mongoose is an Object Data Modeling (ODM) library that provides a higher-level abstraction over the native MongoDB driver. It allows you to work with MongoDB using JavaScript objects (schemas and models) instead of directly dealing with low-level MongoDB operations.

    Native MongoDB Driver: The native MongoDB driver is a lower-level library that provides a direct interface to the MongoDB database, offering more control and flexibility but requiring you to write more code to handle data mapping and validation.

    2. Schema and Data Validation:

    Mongoose: It allows you to define schemas that enforce a specific structure for your data and provide built-in validation capabilities. This ensures that your data follows a consistent structure and meets certain validation rules.

    Native MongoDB Driver: The native driver doesn't provide built-in schema or validation support. Data validation and structure enforcement must be implemented manually in your code.

    3. Middleware and Hooks:

    Mongoose: It offers middleware and hooks that allow you to define functions that run before or after certain operations (e.g., saving a document, updating, or removing). This enables you to add custom behaviors and business logic around database interactions.

    Native MongoDB Driver: The native driver doesn't come with middleware or hooks by default. You have to manually implement similar functionality if needed.

    4. Populating References:

    Mongoose: Mongoose supports reference population, which means you can create relationships between different collections in MongoDB and easily populate referenced documents when querying.

    Native MongoDB Driver: Reference population must be handled manually by writing additional queries and performing joins in your application code.

    5. Ease of Use and Productivity:

    Mongoose: It is often considered more beginner-friendly and productive due to its higher-level abstraction, ease of defining schemas, and built-in validation.

    Native MongoDB Driver: While it offers more control and flexibility, it can be more complex and verbose when dealing with data mapping, validation, and other common database tasks.

## What are different http headers that we encounter while making a request ?

    When making an HTTP request, you may encounter various HTTP headers that provide additional information about the request, the client, or the desired response. These headers are used to communicate various metadata and preferences between the client (usually a web browser or a client application) and the server. Here are some common HTTP headers you may encounter while making a request:

    Host: Specifies the domain name of the server to which the request is being sent.

    User-Agent: Identifies the client making the request, typically the web browser or client application.

    Accept: Indicates the media types (MIME types) that the client can understand. It helps the server in determining the most suitable response format.

    Accept-Language: Specifies the preferred language(s) for the response content.

    Accept-Encoding: Lists the encodings that the client can understand, such as gzip, deflate, or identity.

    Authorization: Used to include credentials (e.g., username and password) for authentication purposes, usually for protected resources.

    Cookie: Contains cookies previously set by the server, which the client returns to the server with each subsequent request.

    Content-Type: Indicates the media type of the content in the request body (for POST and PUT requests).

    Content-Length: Specifies the size of the request body in bytes.

    Cache-Control: Defines the caching directives to be applied to the response or indicates the caching preferences for the request.


## What are models ?

    In Node.js, models are commonly used in web applications and APIs to interact with databases, perform data validation, and encapsulate the logic related to data manipulation. They help separate concerns and keep the application's code organized and maintainable.
Models are used to simplify the interaction between data and application logic. They provide an abstraction layer that allows developers to work with data in a structured and organized way without dealing with complex database queries directly. Models enforce consistency by defining the structure and rules for data, ensuring its integrity. They also promote code reusability, as once a model is defined, it can be reused for various operations like creating, reading, or updating data.


## What are pre and post hooks?

    Pre and post hooks provide a powerful way to add custom logic and behavior to your Mongoose models at specific points in the data lifecycle, allowing you to keep your data interactions organized and maintainable.

    Pre Hooks: Pre hooks are functions that are executed before a specific operation, such as save, update, remove, or findOneAndUpdate, is performed on a document. They allow you to modify the data or perform additional actions before the actual database operation takes place.

    Here's an example of a pre hook that automatically updates a timestamp before saving a document.When you call save() on a User document, the function will be executed before the document is saved to the database, and it will set the createdAt field to the current date.


    Post Hooks: Post hooks are functions that are executed after a specific operation is performed on a document. They allow you to perform additional actions or cleanup after the database operation has completed.

    Here's an example of a post hook that logs a message after a document is removed from the collection.When you call remove() on a Post document, the function will be executed after the document is removed from the database, and it will log a message indicating which document was removed.

## REST API:

    REST (Representational State Transfer) API is an architectural style for web services. It uses HTTP methods like GET, POST, PUT, DELETE to access and manipulate resources (data) via URLs.

## Ways to Cache on the Backend:

    Backend caching involves storing frequently accessed data in a cache to improve response times and reduce server load. Some ways to implement backend caching are:

    - In-memory caching: Storing data in memory for quick retrieval (e.g., using dictionaries or hash maps).

    - Distributed caching: Using an external cache server (e.g., Redis or Memcached) to share cached data across multiple instances of the application.

    - Page caching: Caching entire HTML pages to serve them directly, bypassing application processing.

## Building a Reliable System:

    To build a reliable system, consider the following principles:
    Redundancy: Have backup systems, servers, or components to ensure continuous operation in case of failures.

    Monitoring and Alerting: Implement robust monitoring to detect issues promptly and set up alerting systems to notify administrators of potential problems.

    Failover and Load Balancing: Use load balancers to distribute traffic across multiple servers, and configure failover mechanisms to switch to backups if the primary system fails.

    Fault Tolerance and Error Handling: Design the system to gracefully handle errors, exceptions, and unexpected situations to prevent catastrophic failures.

    Backup and Disaster Recovery: Regularly back up critical data and have a disaster recovery plan in place to restore services quickly in case of data loss or major failures.

    Testing and Quality Assurance: Thoroughly test the system at different levels (unit, integration, system) to identify and fix potential issues before deployment.

    Scalability: Design the system to scale horizontally and vertically to accommodate increasing loads and demand.

## Designing an API:

    When designing an API, consider the following steps:
    Define the Use Cases: Understand the requirements and use cases for the API, including what data or operations it will expose.

    Choose API Paradigm: Decide whether the API should follow RESTful principles, be GraphQL-based, or use other paradigms based on the specific needs of the application.

    URL Structure: Design a clear and logical URL structure that represents the resources and actions the API supports.

    HTTP Methods: Choose appropriate HTTP methods (GET, POST, PUT, DELETE, etc.) for each action, following RESTful guidelines.

    Response Format: Decide on the response format (JSON, XML, etc.) that the API will use to return data to clients.

    Versioning: Consider versioning the API to allow for backward compatibility when making changes.

    Authentication and Authorization: Implement secure authentication and authorization mechanisms to control access to sensitive data and actions.

    Error Handling: Define consistent error handling and status codes for various situations.

    Documentation: Provide clear and comprehensive API documentation for developers to understand how to use the API.

    Testing: Thoroughly test the API with various scenarios to ensure it behaves as expected.

    Scalability and Performance: Design the API to handle a large number of requests efficiently and consider caching mechanisms where appropriate.

    Security: Implement security measures to protect against common web vulnerabilities, such as SQL injection, XSS, and CSRF attacks.


## CommonJs v/s ES6 modules

    CommonJS is a module specification used in Node.js for organizing and reusing code. It defines a way to export and import modules in JavaScript files. In CommonJS, modules are loaded synchronously, and the require() function is used to import modules, while module.exports is used to export values from a module.

    ES Modules is the standardized module system in JavaScript, introduced in ECMAScript 6 (ES6). It works both in the browser and Node.js environments. Unlike CommonJS, ES Modules use import and export statements to handle module dependencies. Additionally, ESM is asynchronous and supports static analysis, which allows for better tree-shaking (removal of unused code during build) and optimizations.

## Testing:

    Testing is a crucial part of the software development process. It involves writing code to verify that individual components (unit testing) or the entire system (functional testing) work as expected.

    Unit Testing:

        Unit testing is a type of testing where individual units (functions, methods, or modules) of a software application are tested in isolation to ensure that they work as intended. Unit tests help identify bugs and ensure that each unit performs its specific task correctly.

    Functional Testing:

        Functional testing is a type of testing that evaluates the application's functionality from the end-user perspective. It tests the entire system's functionality by simulating real interactions between components and ensures that the application functions as expected.

## SQL vs. NoSQL Databases:

    SQL (Structured Query Language) and NoSQL (Not Only SQL) are two main categories of databases:

    SQL Databases:

        Use a structured schema to define the data model.
        
        Data is stored in tables with predefined columns and data types.

        Follow ACID (Atomicity, Consistency, Isolation, Durability) properties to ensure data integrity.

        Good for complex queries and data with fixed schema requirements.

        Examples: MySQL, PostgreSQL, Oracle, SQL Server.

    NoSQL Databases:

        Do not use a fixed schema, allowing for flexible data structures.

        Data is stored in various formats, such as key-value pairs, documents, column-family, or graphs.

        May not fully support ACID properties, favoring eventual consistency.

        Designed for distributed and horizontally scalable architectures.

        Suitable for handling large volumes of unstructured or semi-structured data.

        Examples: MongoDB, Couchbase, Cassandra, Redis.
        
        The choice between SQL and NoSQL databases depends on the specific requirements of the application, scalability needs, and data model complexity.

## Entity-Relationship Model (ER Model):

    The Entity-Relationship (ER) Model is a conceptual data model used to represent the logical structure of a database. It is a visual representation of the database's entities (objects), their attributes (properties), and the relationships between entities.

    In an ER Model, entities are represented as rectangles, attributes are represented as ovals connected to their respective entities, and relationships are represented as diamond shapes connected to the related entities. The ER Model helps in understanding the data requirements and relationships between entities in a clear and intuitive way, making it an essential step in the database design process. It serves as a foundation for creating a physical database schema in a specific database management system.

## Normalization / Denormalization:

    Normalization and denormalization are database design techniques used to organize and structure data within relational databases.

    Normalization: Normalization is the process of breaking down a large table into smaller, well-structured tables to eliminate redundancy and prevent data anomalies. This helps maintain data integrity and reduces the likelihood of data inconsistencies. Normalization is achieved through a set of rules (normal forms), such as First Normal Form (1NF), Second Normal Form (2NF), and so on.

    Denormalization: Denormalization is the opposite of normalization. It involves combining related tables to form a larger table to improve query performance. Denormalization can be useful in scenarios where read performance is crucial, and data redundancy is acceptable. By pre-joining tables, complex queries can be simplified and executed faster.

    The decision to normalize or denormalize a database depends on the specific requirements of the application, such as the type of queries executed, the volume of data, and the need for data consistency.



## OOPs Fundamentals : 

    Abstraction:

        Definition: Abstraction is the process of simplifying complex real-world entities by focusing on essential characteristics while hiding unnecessary details. In OOP, abstraction is achieved through classes and interfaces, allowing developers to define the structure and behavior of objects without providing a complete implementation.

        Real-time Example: A smartphone's user interface serves as an abstraction for its underlying hardware and software components. Users interact with the smartphone through icons, menus, and touch gestures, without needing to understand the intricate technical workings of the device's operating system, processor, or other internal components.

    Encapsulation:

        Definition: Encapsulation is the bundling of data (properties) and methods (functions) that operate on that data within a single unit, typically a class. It allows for data hiding, as the internal state of an object is not directly accessible from outside the class. Instead, access is provided through public methods, ensuring controlled modification and manipulation of the object's state.

        Real-time Example: A bank account object encapsulates its balance, account number, and transaction methods. The account's balance cannot be directly manipulated from outside the object; instead, deposit and withdrawal methods are provided to update the balance securely and ensure the integrity of the account data.

    Polymorphism:

        Definition: Polymorphism allows objects of different classes to be treated as objects of a common parent class. It enables code to be written in a more generic way, capable of handling multiple types of objects through a common interface. Polymorphism is achieved through method overriding, where a subclass provides a specific implementation for a method defined in its parent class.

        Real-time Example: In a drawing application, various shapes like circles, rectangles, and triangles can all be represented as instances of a common Shape class. Each shape overrides a "draw" method to provide its own specific drawing implementation. The application can treat all shapes uniformly, calling the "draw" method on any shape object, and the appropriate drawing behavior is automatically invoked based on the actual object's type.

    Inheritance:

        Definition: Inheritance is the process by which a class (child class) inherits properties and behaviors from another class (parent class). It allows for code reuse, as the child class automatically gains access to the methods and properties defined in its parent class, without the need to re-implement them.

        Real-time Example: Consider a vehicle hierarchy. At the top level, there's a generic Vehicle class, and then there are various derived classes like Car, Truck, and Motorcycle. Each derived class inherits properties and methods from the Vehicle class, such as "start," "stop," and "accelerate." By using inheritance, the code for common vehicle functionalities can be written in the Vehicle class and automatically utilized by all the derived classes, reducing redundant code and promoting code reuse.
