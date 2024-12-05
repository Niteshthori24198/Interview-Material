
let a = [1, 2, [3, 4], 5, [6, [7, 8]]];

let b = {
    name: 'nitesh',
    address: {
        state: {
            city: {
                village: "XYZ"
            }
        }
    },
    detail: [
        {
            pincode: 123456
        },
        [1, 2, {
            info: {
                full: 'aaa'
            }
        }]
    ]
}

let c = deepclone(b);

let d = deepclone(a);

a[4][1][0] = 50;

delete b.detail;

console.log(a, b, c, d)

function deepclone(obj) {

    if (Array.isArray(obj)) {
        return handlearray(obj);
    } else if (typeof obj === 'object') {
        return handleobj(obj);
    } else {
        return obj;
    }

}

function handlearray(arr) {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(handlearray(arr[i]));
        } else if (typeof arr[i] === 'object') {
            res.push(handleobj(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }

    return res;
}

function handleobj(obj) {
    
    let res = {};
    
    for (let k in obj) {
        if (Array.isArray(obj[k])) {
            res[k] = handlearray(obj[k]);
        } else if (typeof obj[k] === 'object') {
            res[k] = handleobj(obj[k]);
        } else {
            res[k] = obj[k];
        }
    }
    return res;
}










/* Alternate way to do the same */




let obj = {

    name: "loki",

    age: 25,

    address: {

        state: {
            city: 'SGNR'
        }
    },
    data: [
        [1, 2],
        {
            phone: 123
        },
        {
            email: 'abc@1'
        },
        {
            job: {
                developer: {
                    chutiya: 'yes'
                }
            }
        }
    ]

}

let arr = [1, 2, [3, 4, [5, [6]]], { name: "Nitesh", phone: [100, 101, 102] }];

const obj1 = clone(obj);

const arr1 = clone(arr);



function clone(ds) {

    if (Array.isArray(ds)) {
        return arrclone(ds);
    } else if (typeof ds === 'object') {
        return objclone(ds);
    }

}


function arrclone(ds) {
    let b = [];

    for (let i = 0; i < ds.length; i++) {
        if (typeof ds[i] == 'object') {
            b.push(clone(ds[i]));
        } else {
            b.push(ds[i])
        }
    }

    return b;
}


function objclone(ds) {
    let b = {};

    for (let k in ds) {
        if (typeof ds[k] == 'object') {
            b[k] = clone(ds[k]);
        } else {
            b[k] = ds[k];
        }
    }

    return b;
}





