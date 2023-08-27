
/* 

In JavaScript, an iterator is an object that provides a way to access the elements of a collection or sequence one at a time. It allows you to loop through the items in a collection or sequence, such as arrays, strings, maps, and sets, in a controlled and sequential manner. To use an iterator, you typically follow these steps:

Obtain an iterator object from the collection you want to iterate over.
Use a loop or other iteration mechanism to repeatedly call the iterator's next() method.
The next() method returns an object with two properties: value (the current item) and done (a boolean indicating whether there are more items to iterate over).
Continue looping until done becomes true, indicating that there are no more items in the collection.

*/




const colors = ['red', 'green', 'blue'];

// Step 1: Obtain an iterator

// const iterator = colors[Symbol.iterator]();

// console.log(iterator)

// // Step 2 and 3: Use the iterator to loop through the array

// let next = iterator.next();

// console.log(next)

// while (!next.done) {

//     console.log(next.value);

//     next = iterator.next();
// }




// custom iterator : - 



let obj = {

    arr: [10, 20, 30, 40, 50],

    [Symbol.iterator]() {

        let i = 0;

        return {
            next: () => {

                if (i < this.arr.length) {

                    return { value: this.arr[i++], done: false }

                } else {

                    return { done: true }

                }
            }
        }

    }

}


let gen = obj[Symbol.iterator]();


let nextdata = gen.next()


while (!nextdata.done) {

    console.log(nextdata.value);

    nextdata = gen.next()

}


