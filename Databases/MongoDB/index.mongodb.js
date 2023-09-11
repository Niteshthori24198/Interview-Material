
// Select the database to use.

use('PlaygroundDB');


db.getCollection('PlaygroundDB').insertOne({name:"Alice"});

db.getCollection('PlaygroundDB').insert([{name:'Bob'}, {name:'dhoni'}])

db.getCollection('PlaygroundDB').insert([{name:"virat"},{name:'babar'}], {ordered:false})

db.getCollection('PlaygroundDB').find()

db.getCollection('PlaygroundDB').findOne({_id:new ObjectId('64fe0b4da52ed4588f4dc6f2')})

db.getCollection('PlaygroundDB').distinct('name')

db.getCollection('PlaygroundDB').count({name:'Alice'})

// or use below one

db.getCollection('PlaygroundDB').countDocuments({name:'Alice'})


db.getCollection('PlaygroundDB').updateOne({name:'Kyle'}, { $set: { name: 'Alice' } });


db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe0b4da52ed4588f4dc6f2')}, {$set: {age:21}})


// to remove feild

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe0b4da52ed4588f4dc6f2')}, { $unset: {age:1} });


db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe0b30dff5784467c6e5d4')}, {$rename: {name:"Name"}})


db.getCollection('PlaygroundDB').find({name:"Kyle"}).explain('executionStats')

db.getCollection('PlaygroundDB').find({$and:[ {age:{$gte:22}}, {age:{$lte:25}} ]})

db.getCollection('PlaygroundDB').find({age:{$in:[22,24,25]}})

db.getCollection('PlaygroundDB').find({age:{$nin:[22,24,25]}})


db.getCollection('PlaygroundDB').find({$nor:[{name:"Alice"}, {name:"Kyle"}]})


db.getCollection('PlaygroundDB').find({price:{$exists:true}})

db.getCollection('PlaygroundDB').find({name:/.*i$/})


db.getCollection('PlaygroundDB').find({score:{$all:[20,30]}})


db.getCollection('PlaygroundDB').find({score:{$elemMatch:{$in:[15]}}})



db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1fb')}, {$push:{score:10}})


db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1f9')}, {$push:{score:{$each:[10,15,25]}}})

// delete last element

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1fb')}, {$pop:{score:1}})

delete first

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1fb')}, {$pop:{score:-1}})


// it matches the documents as per condition given and then remove the value from it and update it. [it remove only one instance if the doc contins multple too.]

db.getCollection('PlaygroundDB').updateOne({_id:new ObjectId('64fe1a41f752dcf501a0e1f9')}, {$pull:{score:10}})


db.getCollection('PlaygroundDB').updateOne({ _id: new ObjectId('64fe1a41f752dcf501a0e1fa') }, { $pullAll: { score:[15, 70]}})


db.getCollection('PlaygroundDB').find({score:{$size:6}})


// projection


db.getCollection('PlaygroundDB').find({}, {name:1, _id:0})


// sort and paginate


db.getCollection('PlaygroundDB').find({}).sort({age:1, name:-1})

db.getCollection('PlaygroundDB').find({}).skip(3).limit(1)


db.getCollection('PlaygroundDB').remove({name:"Alice"})

db.getCollection('PlaygroundDB').remove({name:"Alice"}, {justOne:true})




// indexing : - 



db.getCollection('PlaygroundDB').getIndexes()

db.getCollection('PlaygroundDB').dropIndex({score:1})

db.getCollection('PlaygroundDB').createIndex({age:1})

db.getCollection('PlaygroundDB').getIndexKeys()

db.getCollection('PlaygroundDB').createIndex({ name: 1 }, { expireAfterSeconds: 60 })


db.getCollection('PlaygroundDB').runCommand({
    "collMod": 'PlaygroundDB',
    "index": {
        "keyPattern": {name:1},
        "expireAfterSeconds": 60
    }
})

db.getCollection('PlaygroundDB').find({name:"Kyle"}).explain('executionStats')


db.getCollection('PlaygroundDB').createIndex({score:1})

db.getCollection('PlaygroundDB').find({score:15}).explain('executionStats')
