
use('SpecialSchema')

db.getCollection('schema').aggregate([
    {
        $set:{
            check:{
                $cond:{
                    if:{$lte:["$budget","$spent"]},
                    then:true,
                    else:false
                }
            }
        }
    },
    {
        $project: {
          budget:{
            $cond:{
                if:"$check",
                then:{$multiply:["$budget",10]},
                else:{$subtract:["$budget","$spent"]}
            }
          }
        }
    }
])





// expr + condition


db.getCollection("data").aggregate([{
    $match: {
        $expr: {
            $gt: ["$qty", 200]
        }
    }
}, {
    $project: {
        qty: 1,
        warning: {
            $cond: {
                if: { $lte: ["$qty", 250] },
                then: false,
                else: true
            }
        }
    }
}])


