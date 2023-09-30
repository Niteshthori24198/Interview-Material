
let str = 'Nag is NagGggggg the lwda Nagxggg';

console.log(str.match(/nag+/ig))


let s = 'missisipsssis';

// output : ['ss','s','sss','s']

console.log(s.match(/s+/ig))


let num = 12345678901;

let pattren = /^[0-9]{5,10}$/;

console.log(pattren.test(num))




function f(a,a){
    console.log(a+a)
}

f(2,4) // 8




// eval(string) in JS


let x=5;
let y=7;
let z=10;

let res = 'z/x*y';

console.log(eval(res))