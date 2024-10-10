
/* 

In JavaScript, an iterator is an object that provides a way to access the elements of a collection or sequence one at a time. It allows you to loop through the items in a collection or sequence, such as arrays, strings, maps, and sets, in a controlled and sequential manner. To use an iterator, you typically follow these steps:

Obtain an iterator object from the collection you want to iterate over.
Use a loop or other iteration mechanism to repeatedly call the iterator's next() method.
The next() method returns an object with two properties: value (the current item) and done (a boolean indicating whether there are more items to iterate over).
Continue looping until done becomes true, indicating that there are no more items in the collection.

*/




const colors = ['red', 'green', 'blue'];

// Step 1: Obtain an iterator

const iterator = colors[Symbol.iterator]();

console.log(iterator)

// Step 2 and 3: Use the iterator to loop through the array

let next = iterator.next();

console.log(next)

while (!next.done) {

    console.log(next.value);

    next = iterator.next();
}




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






// Iterator by class : Legend Bakshi Sir



let a = [1, 2, 3, 4, 5];

let b = {
    name: 'LOL',
    age: 12
}


class Iterator {

    i;
    keys;
    constructor(ds) {
        this.ds = ds;
        if (typeof this.ds === 'object') {
            this.keys = Object.keys(this.ds);
        }
        this.i = 0;
    }

    next() {

        if (Array.isArray(this.ds)) {

            if (this.i < this.ds.length) {
                return { value: this.ds[this.i++], done: false }
            }
            return { value: undefined, done: true }
        }
        else if (typeof this.ds === 'object') {
            if (this.i < this.keys.length) {
                return { value: this.ds[this.keys[this.i++]], done: false }
            }
            return { value: undefined, done: true }

        }
    }
}

const obj = new Iterator(b);

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());






let map = new Map();

map.set("name", "Nitesh");
map.set("age", 10)


let it = map.entries();

let res = it.next();

while (!res.done) {
    const [key, value] = res.value;
    console.log(key, value);
    res = it.next()
}




