var express = require("express");
var path = require("path");

var app = express();

//all routes start with /app will be redirected to app folder as public
app.use("/", express.static(path.join(__dirname, '../')));

app.get("/", function (req,res) {
    res.send("server : i am working")
});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});