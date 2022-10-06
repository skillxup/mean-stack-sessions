const express = require("express");
const app = express();

app.use(express.json());

const data = [
    { userName: "john", userEmail: "john@gmail.com", userAge: 23, userUniqueId: 1 }, 
    { userName: "paul", userEmail: "paul@gmail.com", userAge: 31, userUniqueId: 2 }, 
    { userName: "amit", userEmail: "amit@gmail.com", userAge: 18, userUniqueId: 3 }
];

app.get("/", function(req, res) {
    res.json(data);
});

app.listen(3000, function() {
    console.log("server running at port 3000!");
});