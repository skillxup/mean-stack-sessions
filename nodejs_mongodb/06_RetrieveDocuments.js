var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    var dbObject = db.db("orenatuts");
    var dbCollection = "restaurants";

    var dbQuery = {"borough": /^B/};

    dbObject.collection(dbCollection).find(dbQuery).limit(3).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});