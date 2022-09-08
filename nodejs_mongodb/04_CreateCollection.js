var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    var dbObject = db.db("orenatuts");
    dbObject.createCollection("transactions", function(err, res) {
        if(err) throw err;
        console.log("collection created successfully!");
        db.close(); 
    });
});