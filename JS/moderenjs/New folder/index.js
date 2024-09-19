
let a = [1, 2, 3, 4, 5];

// filter

Array.prototype.filter = function (cb) {

    if (typeof cb !== "function") {
        return;
    }

    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            result.push(this[i]);
        }
    }
    console.log(result)

}

a.filter(f);

function f(x) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}



// map

Array.prototype.iterate = function (cb) {

    if (typeof cb !== "function") {
        return;
    }

    let res = [];

    for (let i = 0; i < this.length; i++) {
        let val = cb(this[i], i);
        if (val) {

            res.push(val);
        } else {
            res.push(this[i])
        }
    }

    console.log(res)

}

a.iterate((ele, i) => {

    if (i % 2) {
        return ele ** 2;
    }

    return;

});




function loki(a) {

    console.log(a('Loki'))

}

let Loki = 5;

loki(sayhello)

function sayhello(name){
    console.log('Hello from '+name)
}



function lwda(){
    console.log('Hello JS')
}

let lwda=5;

console.log(lwda);



// Guess output


let a = [1, 2, 3, 4, 5, 6];

let r = a.filter((v, i) => {
    if (i % 2 == 0) {
        return v**v;
    } return v;
})

console.log(r)
