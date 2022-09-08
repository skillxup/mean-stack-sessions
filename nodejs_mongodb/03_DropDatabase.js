var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    var dbObject = db.db("orenatuts");
    dbObject.dropDatabase();
    console.log("database dropped successfully!");
    db.close();
});