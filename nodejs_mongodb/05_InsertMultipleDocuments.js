var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    var dbObject = db.db("orenatuts");
    var dbCollection = "transactions";

    var insertData = [
        { "cr_dr": "D", "amount": 100, "fee": 2 }, 
        { "cr_dr": "C", "amount": 100, "fee": 2 }, 
        { "cr_dr": "C", "amount": 10, "fee": 4 }, 
        { "cr_dr": "D", "amount": 100, "fee": 2 }, 
        { "cr_dr": "D", "amount": 100, "fee": 4 }, 
        { "cr_dr": "C", "amount": 10, "fee": 2 }, 
        { "cr_dr": "D", "amount": 10, "fee": 2 } 
    ];

    dbObject.collection(dbCollection).insertMany(insertData, function(err, res) {
        if(err) throw err;
        console.log(" the no of documents: " + res.insertedCount + " are inserted!");
        db.close();
    });
});