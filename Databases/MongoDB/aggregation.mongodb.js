

use('Zipdatabase')

db.getCollection('people').find().pretty()

db.getCollection('people').aggregate([{
    $match:
        { $expr: { $gt: ["$pop", 70000] } }

}, {$count: 'total'}])


db.getCollection('people').aggregate([{
    $match:
        { $expr: { $gt: ["$pop", 75000] } }

}, {$out: 'SpecialPopulationSchema'} ])

db.getCollection('SpecialPopulationSchema').find()



// total population of each state

db.getCollection('people').aggregate([
    {
        $group: {
            _id: "$state",

            totalpop: {
                $sum: "$pop"
            }

        }
    },
    {
        $project: {

            state: "$_id",
            totalpop: 1,
            _id: 0

        }
    }

])



// number of city per state

db.getCollection('people').aggregate([
    {
        $group: {
            _id: "$state",

            totalcity: {
                $sum:1 
            }

        }
    }

])



// max and min pop city of each state


db.getCollection('people').aggregate([
    {
        $group: {
            _id: "$state",

            countofcities: {
                $sum: 1
            },
            totalpopofCities: {
                $sum: "$pop"
            }
            ,
            maxpopcity: {
                $max: "$pop"
            }
            ,
            minpopcity: {
                $min: "$pop"
            },
            averagepop: {
                $avg: "$pop"
            }
        }
    }
])



// multiple group by field : -

db.getCollection('people').aggregate([

    {
        $group: {
            _id:{
                state:"$state",
                city:"$city"
            }
        }
    }
])



// largest population city in each state : 

db.getCollection('people').aggregate([
    {
        $sort: {
            pop: -1
        }
    },

    {
        $group: {
            _id: "$state",
            largestPopcity: {
                $first: "$city"
            },
            population: {
                $first: "$pop"
            }
        }
    },
    {
        $project: {
          state:"$_id",
          largestPopcity:1,
          population:1,
          _id:0
        }
    }
])



// second largest population city in each state : - 

db.getCollection('people').aggregate([
    {
        $sort: {
            state: 1,
            pop: -1
        }
    },
    {
        $group: {
            _id: "$state",
            cities: {
                $push: {
                    city: "$city",
                    population: "$pop"
                }
            }
        }
    },
    {
        $project: {
            state: "$_id",
            largestPopcity: {
                $first: "$cities"
            },
            secondLargestPopcity: {
                $cond: [
                    { $gt: [{ $size: "$cities" }, 1] }, // Check if there are at least 2 cities in the array
                    {
                        $arrayElemAt: [
                            {
                                $filter: {
                                    input: "$cities",
                                    cond: { $ne: ["$$this", { $first: "$cities" }] } // Exclude the largest city
                                }
                            },
                            0 // Get the first city from the filtered array, which is the second largest
                        ]
                    },
                    null // Return null if there's no second element
                ]
            },
            _id: 0
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
            from: "userdetail", // joined cool
            localField: 'address',
            foreignField: 'address',
            as: 'userInfo'
        }
    },
    {
        $project: {
            name: 1,
            age: 1,
            address: 1,
            zipcode: "$userInfo.zipcode"
        }
    },

    {
        $lookup: {
            from: 'usercitystate',
            localField: 'zipcode',
            foreignField: 'zipcode',
            as: 'UserData'
        }
    },
    {
        $project: {
            name: 1,
            age: 1,
            address: 1,
            zipcode: 1,
            city: "$UserData.city",
            state: "$UserData.state"
        }
    },
    {
        $lookup: {
            from: 'userstatecountry',
            localField: 'state',
            foreignField: 'state',
            as: "UserProfile"
        }
    },
    {
        $project: {
            name: 1,
            age: 1,
            address: 1,
            zipcode: 1,
            city: 1,
            state: 1,
            country:"$UserProfile.country"
        }
    }
])


