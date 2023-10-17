
let obj = {

    name: "loki",

    age: 25,

    address: {

        state: {
            city: 'SGNR'
        }
    },
    data: [
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


let keys = []

ObjectKeyConversion(obj)

console.log(keys)

function ObjectKeyConversion(obj) {

    for (let k in obj) {

        keys.push(k.toUpperCase())

        if (Array.isArray(obj[k])) {

            handleNestedData(obj[k])
        }
        else if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
            ObjectKeyConversion(obj[k])
        }
    }

}



function handleNestedData(data) {

    for (let i = 0; i < data.length; i++) {

        if (typeof data[i] === 'object' && !Array.isArray(data[i])) {

            ObjectKeyConversion(data[i])

        }
        else if (typeof data[i] === 'object' && Array.isArray(data[i])) {
            handleNestedData(data[i])
        }

    }
}










let obj1 = {
    loki: { singh: "dsds" }
}

Object.deepFreez = function (obj) {
    
    for (let k in obj) {

        Object.freeze(obj);

        if (Array.isArray(obj[k])) {

            for (let i = 0; i < obj[k].length; i++) {

                Object.deepFreez(obj[k][i]);
            }

        } else if (typeof obj[k] === 'object') {
            Object.deepFreez(obj[k])
        }
    }
}



Object.deepFreez(obj);

obj.loki.singh = "chande";

console.log(obj);








let obj = {}

let obj2 = {}

function fun(key, value) {

    this[key] = value

}

fun.call(obj, "name", "Nitesh");

fun.call(obj2, "age", 25);

console.log(obj,obj1)