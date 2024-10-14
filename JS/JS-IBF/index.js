
let a = [1, 2, 3, 4, 5, 6, 7]


// Map(cb)


let a1 = a.map((ele, i) => {
    a.push(ele);
    if (i % 2) {
        return ele ** 2;
    } else {
        return ele
    }
})


console.log("Original and new array ", a, a1) //  [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7] , [1,4,3,16,5,36,7]


// Filter(cb)

let b = a.filter((ele) => {
    if (ele % 2) {
        return ele * 2;
    } else {
        return ele * 0;
    }
});

console.log(b) // [1,3,5,7]



// Flat(level)


let arr = [1, 2, [3, [4, [5, [6], 7], 8], 9], 10];
const resarr = arr.flat(10);
console.group(resarr, arr)




// Reduce((acc,cur,ind)=>{}, initialValue)


let ar = [1, 2, 3, 4, 5, 6, 7];

let sum = ar.reduce((acc, cur, i) => {
    console.log(acc, cur, i)
    if (i % 2) {
        acc = acc + cur;
        return acc;
    } else {
        return acc
    }
})

console.log(sum) // 13


let ar1 = [1, 2, 3, 4, 5, 6, 7];

let sum1 = ar1.reduce((acc, cur, i) => {
    console.log(acc, cur, i)
    if (i % 2) {
        acc = acc + cur;
        return acc;
    } else {
        return acc
    }
}, 0)

console.log(sum1) // 12




// Shift()

// The shift() method removes the first item of an array.

// The shift() method changes the original array.

// The shift() method returns the shifted element.



let inparr = [1, 2, 3, 4, 5];

console.log(inparr.shift(), inparr); // 1, [2,3,4,5]




// UnShift()

// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.

// It returns The new length of the array.



let array = [1, 2, 3, 4, 5]

console.log(array.unshift(6, 7), array)




// Slice(start,end) 

// end is always exclusive. The slice() method does not change the original array.



let basearr = [10, 20, 30, 40, 50]

const outarr = basearr.slice(1, 4); // [20,30,40]

const outarr1 = basearr.slice(-2, 4); // [40]

const outarr2 = basearr.slice(-5, -2) // [10,20,30]

const outarr3 = basearr.slice(1, -7) // []


console.log(basearr, outarr, outarr1, outarr2, outarr3)



// Splice(index,numberOfEleToDelete, ele1,ele2,ele3) 

// It can delete elements from a specific index as well as insert new elements in array. The splice() method overwrites the original array.  It returns An array containing the removed items (if any).


let myarr = [1, 2, 3, 4, 5];

let res = myarr.splice()

console.log(res) // []

console.log(myarr.splice(2, 2), myarr) // [3,4] , [1,2,5]

console.log(myarr.splice(2, 0, 3, 4), myarr) // [] , [1,2,3,4,5]