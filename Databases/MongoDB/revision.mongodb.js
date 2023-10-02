
use('PlaygroundDB')

db.getCollection('PlaygroundDB').find({})

db.getCollection('PlaygroundDB').insertOne({"name":"Nitesh","age":25})

db.getCollection('PlaygroundDB').distinct("age");

db.getCollection('PlaygroundDB').countDocuments({age:24})

db.getCollection('PlaygroundDB').updateOne({"name":"Nitesh"}, {$set:{"isAlive":true}})

db.getCollection('PlaygroundDB').updateOne({"name":"Nitesh"}, {$unset:{"isAlive":1}})

db.getCollection('PlaygroundDB').updateOne({"Name":"Nitesh"}, {$rename:{"Name":"name"}})


db.getCollection('PlaygroundDB').find({age:{$gt:21}})

db.getCollection('PlaygroundDB').find({$and:[{age:{$gt:21}}, {age:{$lte:25}}]})

db.getCollection('PlaygroundDB').find({age:{$in:[21,24]}})

db.getCollection('PlaygroundDB').find({age:{$exists:true}})

db.getCollection('PlaygroundDB').find({name:/^[a-d].*i$/i})

db.getCollection('PlaygroundDB').find({score:{$elemMatch:{$in:[60,10]}}})

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1fa')}, {$push:{score:10}})

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1fa')}, {$push:{score:{$each:[50,60,75]}}})

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1fb')}, {$pop:{score:1}})


db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1f9')}, {$pull:{score:15}})

db.getCollection('PlaygroundDB').find({score:{$size:6}})

db.getCollection('PlaygroundDB').find({}).sort({age:-1,name:1}).limit(3).skip(2)

db.getCollection('PlaygroundDB').dropIndex({score:1})

db.getCollection('PlaygroundDB').createIndex({score:1})

db.getCollection('PlaygroundDB').getIndexes()

db.getCollection('PlaygroundDB').find({score:10}).explain('executionStats')

db.getCollection('PlaygroundDB').aggregate([
    {
        $match: {
            "score": {
                $exists: true,  // Check if "score" field exists
                $type: "array"  // Check if "score" is an array
            },
            $expr: {
                $and: [
                    { $gte: [{ $size: "$score" }, 6] }, // Check if the array size is greater than or equal to 5
                    { $lte: [{ $size: "$score" }, 7] }  // Check if the array size is less than or equal to 7
                ]
            }
        }
    }
])



// Aggregation : -


use('Zipdatabase')

db.getCollection('people').aggregate([
    {
        $match: {
            pop: {
                $gt: 75000
            }
        }
    },
   {
    $out: 'NiteshSchema'
   }
])

db.getCollection('NiteshSchema').find()

db.getCollection('people').aggregate([
    {
        $match: {
            $expr: {

                $gte: ["$pop", 85000]

            }
        }
    }
])


db.getCollection('people').aggregate([
    {
        $group: {
            _id: {
                state: "$state",
                city: "$city"
            }

        }
    }
])


db.getCollection('people').aggregate([
    {
        $group: {
            _id: "$state",
            totalpop: {
                $sum: "$pop"
            },
            citiesCount: {
                $sum: 1
            },
            avgpop: {
                $avg: "$pop"
            },
            maxpop: {
                $max: "$pop"
            },
            minpop: {
                $min: "$pop"
            }
        }
    },
    {
        $project: {
            state: "$_id",
            totalpop: 1,
            citiesCount: 1,
            avgpop: 1,
            maxpop: 1,
            minpop: 1,
            _id: 0
        }
    }
])


db.getCollection('people').aggregate([
    {
        $sort: {
            pop: -1
        }
    },
    {
        $group: {
            _id: "$state",
            city: {
                $last: "$city"
            },
            pop: {
                $last: "$pop"
            }
        }
    }
])



// look - up

// usercitystate : {
//   "_id": 1,
//   "zipcode": "12345",
//   "city": "New York",
//   "state": "NY"
// }

// userdetail : 
// {
//     "_id": 2,
//     "address": "456 Main St",
//     "zipcode": "54321"
//   }

// users :
// {
//     "_id": 1,
//     "name": "John",
//     "age": 25,
//     "address": "123 Main St"
//   }

// userstatecountry : 
// {
//     "_id": 2,
//     "state": "IL",
//     "country": "USA"
//   }

use('aggregatecollection')

db.getCollection('users').aggregate([

    {
        $lookup: {
            from: "userdetail",
            localField: "address",
            foreignField: "address",
            as: "data"
        }
    },

    {
        $project:{
            name:1,
            age:1,
            address:1,
            zipcode:"$data.zipcode"
        }
    },

    {
        $lookup: {
            from: "usercitystate",
            localField: "zipcode",
            foreignField: "zipcode",
            as: "data"
        }
    },
    {
        $project:{
            name:1,
            age:1,
            address:1,
            zipcode:1,
            city:"$data.city",
            state:"$data.state"
        }
    },
    {
        $lookup: {
            from: "userstatecountry",
            localField: "state",
            foreignField: "state",
            as: "data"
        }
    },
    {
        $project:{
            name:1,
            age:1,
            address:1,
            zipcode:1,
            city:1,
            state:1,
            country:"$data.country"
        }
    },

])


use('SpecialSchema')

db.getCollection('schema').find({
    $expr: {
        $gt: ["$spent", "$budget"]
    }
},
    {
        category: 1,
        _id:0

    })

db.getCollection('schema').find()


db.getCollection('schema').aggregate([
    {
        $set: {
            status: {
                $cond: {
                    if: { $gt: ["$spent", "$budget"] },
                    then: true,
                    else: false
                }
            }
        }
    },
    {
        $addFields: {
            budget: {
                $cond: {
                    if: "$status",
                    then: { $multiply: ["$budget", 5] },
                    else: { $subtract: ["$budget", "$spent"] }
                }

            }
        }
    }
])