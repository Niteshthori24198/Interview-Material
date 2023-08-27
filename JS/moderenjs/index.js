
// 1. > shallow copy v/s deep copy

/* Shallow copy :-

A shallow copy creates a new object or array, but it only copies references to the original objects or arrays. If the original object contains nested objects or arrays, the references to those nested objects are still shared between the original and the copied object. In other words, changes to the nested objects will affect both the original and the copied object.


Deep Copy : -

A deep copy, on the other hand, creates a completely independent copy of the original object or array, including all nested objects or arrays. Any changes made to the deep copy will not affect the original object, and vice versa.



*/


let myobj = {
    name: "nitesh",
    address: {
        state: "Raj"
    }
}

// shallow copy : 

let shallowobj = { ...myobj }

let shallowobj1 = Object.assign({}, myobj)

shallowobj.address.state = "kishan"

console.log(myobj, shallowobj, shallowobj1);


// deep copy : 

let deepobj = JSON.parse(JSON.stringify(myobj))


deepobj.address.state = "USA"

console.log(myobj, deepobj);







//2. >  destructuring of nested object.


let user = {
    firstName: 'Vivek',
    lastName: 'Agarwal',
    age: 38,
    posts: [
        { title: 'Post 1', comments: 10 },
        { title: 'Post 2', comments: 11 },
        { title: 'Post 3', comments: 12 }
    ],
    Address: {
        state: {
            city: "XYZ"
        }
    }
}


const { firstName: fn, lastName: ln, age: a } = user;


const { posts: [{ title: t1, comments: c1 }, { title: t2, comments: c2 }, { title: t3, comments: c3 }] } = user;

const { Address: { state: { city: cty } } } = user;

console.log(fn, ln, a, t1, t2, t3, c1, c2, c3, cty)






// Polyfilling : -


let array = [10, 20, 30, 40, 50];

Array.prototype.printsquare = function () {
    let res=this.map((ele)=>ele**2)
    console.log(res.join(' '))
}


array.printsquare()