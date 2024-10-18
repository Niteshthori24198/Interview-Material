
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









Object.prototype.deepFreeze = function () {

    Object.freeze(this);

    if (Array.isArray(this)) {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] == 'object') {
                this[i].deepFreeze()
            }
        }
    }
    else {
        for (let k in this) {
            if (Array.isArray(this[k])) {
                for (let i = 0; i < this[k].length; i++) {
                    this[k].deepFreeze()
                }
            } else if (typeof this[k] == 'object') {
                this[k].deepFreeze()
            }
        }
    }
}



let a = {
    name: "loki",
    phone: [
        456,
        [789, [6969]],
        {
            tel: 123,
            pin: 111
        }
    ],
    add: {
        state: "raj"
    }
}


a.deepFreeze()

a.age = 25;
delete a.name
a.phone = 456

a.phone[0] = 1010
a.phone[1] = {}
a.phone[2].tel = 777
a.phone[1][1][0] = 0

a.add = "xxx"

a.add.state = {
    city: "aaa"
}

a.add.lwda = "lasan"

delete a.add.state

console.log(a, a.phone)











let obj = {}

let obj2 = {}

function fun(key, value) {

    this[key] = value

}

fun.call(obj, "name", "Nitesh");

fun.call(obj2, "age", 25);

console.log(obj,obj1)
