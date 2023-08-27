
/*
A generator in JavaScript is a special type of function that allows you to pause and resume its execution. It's defined using a function with an asterisk '*' following the function keyword. Inside a generator function, you can use the yield keyword to yield a value. When a generator function is called, it doesn't execute immediately but returns a generator object. You can then control the execution of the generator using the next() method on this object, which allows you to pause the execution at a yield statement and resume it later. */


function* simpleGenerator() {
    console.log("Hello");
    yield 10;
    console.log("World");
    yield 20;
    console.log("Namste");
    yield 30;
    console.log("Generator");
}

const generator = simpleGenerator();

console.log(generator);

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }



// example : iterate array async


function* asyncArrayIterator(arr) {

    for (let i = 0; i < arr.length; i++) {

        yield new Promise(resolve => setTimeout(() => resolve(arr[i]), 1000));

    }
}

const asyncArr = [1, 2, 3, 4, 5];

const iterator = asyncArrayIterator(asyncArr);


(async () => {

    for (const value of iterator) {

        console.log(await value);

    }

})();



// generator with passing values to yeilds : 



function* myGenerator(){

    let i=0;

    while(true){
       const val = yield i;
       if(val!==undefined){
        i+=val;
       }else{

           i++;
       }
    }

} 


const gen = myGenerator()

console.log(gen.next());
console.log(gen.next("hyy"));
console.log(gen.next(2));
console.log(gen.next());
console.log(gen.return(5));
console.log(gen.next());
console.log(gen.throw(new Error('error')));