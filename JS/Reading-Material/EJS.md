
#### what is lazy loading..explain with simple small example ?

-   Lazy loading is a technique used in software development to improve the performance and efficiency of a program by delaying the loading of certain resources or data until they are actually needed. This helps reduce initial load times and saves system resources when dealing with large or complex applications.

-   Example : - 

    <img src="placeholder.jpg" data-src="image1.jpg" class="lazy-image">
    <img src="placeholder.jpg" data-src="image2.jpg" class="lazy-image">
    <img src="placeholder.jpg" data-src="image3.jpg" class="lazy-image">

    document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy-image");

    lazyImages.forEach((lazyImage) => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            lazyImage.src = lazyImage.dataset.src;
            observer.unobserve(lazyImage);
            }
        });
        });

        observer.observe(lazyImage);
    });
    });


-   The IntersectionObserver is a JavaScript API that is commonly used in the context of lazy loading to efficiently observe and react to changes in the visibility of elements within the viewport of a web page. It allows you to detect when elements enter or exit the user's viewport (the visible area of the web page in their browser), which is extremely useful for implementing lazy loading of images or other content.

-   Set Up the IntersectionObserver: You create an instance of the IntersectionObserver and provide it with a callback function that will be executed whenever an observed element enters or exits the viewport. This callback function is called with an array of IntersectionObserverEntry objects, each describing an observed element and its visibility status.

-   Specify the Elements to Observe: You then specify the elements that you want to observe by passing them to the observe method of the IntersectionObserver. Typically, you target elements with a specific class or other selection criteria.

-   Load Content When Visible: Inside the callback function, you check if the entry.isIntersecting property is true for an element. If it is, it means the element is currently within the viewport, and you can trigger the loading of the content associated with that element (e.g., set the src attribute of an image to its actual source URL).





#### What is Code Spliting ?

-   Code splitting helps keep the initial bundle size small and improves the application's load performance, especially in scenarios where there are multiple features or pages that are not needed all at once. It's a valuable technique for optimizing web applications and reducing the time it takes for users to access the core functionality they need.



#### What is difference beetween promise and Observer.?

-   Promises and Observers are both patterns used in JavaScript for handling asynchronous operations and managing asynchronous data flow.


-   Handling a Single Value vs. Multiple Values:

    - Promise: A Promise represents a single future value or the eventual result of an asynchronous operation. It is primarily used for handling a single value or a single action that will be completed in the future.
    - Observer: An Observer is designed to handle multiple values over time. It can be used to observe and react to a stream of data, such as events or data coming from multiple asynchronous sources.

-   Eager vs. Lazy:

    - Promise: Promises are typically eager, meaning that they start executing as soon as they are created. This can lead to immediate execution of asynchronous code even if you don't need the result right away.
    - Observer: Observers are often lazy. They do not start executing until you explicitly subscribe to them. This allows you to control when and how you consume data from observable sources.

-   Error Handling:

        - Promise: Promises have built-in error handling through the .catch() method or the catch block in async/await. Errors in a Promise will propagate down the Promise chain, and you can handle them at various points.
        - Observer: Error handling in Observers typically involves implementing an error callback within the Observer itself. Errors in Observers do not propagate automatically, and you need to handle them explicitly within the Observer's logic.


-   Cancellation:

    - Promise: Promises in JavaScript do not have built-in support for cancellation. Once a Promise is created, it will continue to execute until it either resolves or rejects, and there's no standard way to cancel it.
    - Observer: Some libraries that implement Observables, such as RxJS, provide built-in support for cancellation. You can unsubscribe from an Observer to stop receiving further data or events.


-   Built-in vs. Third-party:

    - Promise: Promises are part of the JavaScript language and are widely supported in modern browsers and environments.
    - Observer: Observables are not part of the native JavaScript language and often require a third-party library like RxJS to use.



#### Explain the concept of "event-driven programming" in JavaScript.?

-   Event-driven programming in JavaScript centers around events like user clicks or data arrivals, triggering event handlers to execute specific actions. It enables asynchronous and interactive code execution, crucial for creating responsive and dynamic web applications and systems. Event listeners listen for these events and execute the associated code when they occur.



#### What is the difference between "call stack" and "heap" in JavaScript memory management?

-   In summary, the call stack is responsible for managing the execution context and the flow of control in your JavaScript program, whereas the heap is used for dynamic memory allocation and storage of objects and data that persist beyond the scope of individual function calls. Understanding the roles of the call stack and heap is important for efficient memory management in JavaScript and for avoiding issues like memory leaks.



#### What is the concept of "garbage collection" in JavaScript, and how does it work?

-   Garbage collection is an essential concept in JavaScript (and many other programming languages) that helps manage memory by automatically identifying and reclaiming memory that is no longer in use or referenced by the program. It prevents memory leaks and ensures that the memory allocated to objects that are no longer needed can be freed up for reuse.


-   Apporach to handle it : 

    - Reference Counting.
    - Mark and Sweep Algorithm.

-   The process involves two main phases: marking and sweeping.

    - Mark Phase:

        - The engine starts from the global object and traverses all accessible objects and data structures in memory through a process called "marking."
        - It marks objects that are reachable (i.e., directly or indirectly accessible) from the root, typically starting with the global object and going through the call stack and any global variables.
        - Any object that is not marked during this process is considered unreachable and becomes a candidate for removal.

    - Sweep Phase:

        - In this phase, the engine sweeps through the entire heap, looking for objects that are not marked as reachable (i.e., garbage).
        - It frees up the memory associated with those unmarked objects.




