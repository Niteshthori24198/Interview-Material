use('PlaygroundDB')




db.getCollection("Graphlookup").aggregate([
    {
        $graphLookup: {
            from: "Graphlookup",
            startWith: "$reportsTo",
            connectFromField: "reportsTo",
            connectToField: "name",
            as: "response",
            maxDepth: 2
        }
    }
])






db.getCollection("Graphlookup1").aggregate([

    {
        $graphLookup: {
            from: 'Graphlookup1',
            startWith: "$friends",
            connectFromField: 'friends',
            connectToField: '_id',
            as: 'friendCircle',
            maxDepth: 1
        }
    },
    {
        $project: {
            friendCircle: [
                "$friendCircle.name"
            ]
        }
    }

])






db.getCollection("travelers").aggregate([
    {
        $graphLookup: {
            from: 'airports',
            startWith: "$nearestAirport",
            connectFromField: 'connects',
            connectToField: 'airport',
            as: 'Res',
            maxDepth: 0
        }
    },
    {
        $project: {
            AirportNames: [
                "$Res.airport"
            ]
        }
    }
])






db.getCollection("Graphlookup3").aggregate([

    {
        $graphLookup: {
            from: 'Graphlookup3',
            startWith: "$friends",
            connectFromField: 'friends',
            connectToField: 'name',
            as: 'response',
            restrictSearchWithMatch: {
                hobbies: {
                    $in: ["golf", "travel"]
                }
            }
        }
    },
    {
        $project: {
            name: 1,
            FriendsName: [
                "$response.name"
            ]
        }
    }
])
