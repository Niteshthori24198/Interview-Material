
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