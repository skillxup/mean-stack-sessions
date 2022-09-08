var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/orenatuts";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    console.log("database created successfully!");
    db.close();
});