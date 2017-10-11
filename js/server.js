var express = require("express");
var path = require("path");

var app = express();

//all routes start with /app will be redirected to app folder as public
app.use("/", express.static(path.join(__dirname, '../')));

app.get("/", function (req,res) {
    res.send("server : i am working")
});

var server = app.listen(8008, function() {
    console.log(new Date().toISOString() + ": server started on port 8008"); 
});