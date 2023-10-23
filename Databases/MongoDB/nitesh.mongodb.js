
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