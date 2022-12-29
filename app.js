var express = require("express");
var app = express();

app.get("/",function(req,resp){
    resp.send("Server is going to ONN mode");
})
app.listen(7000);
console.log("Server chalu zhala...");
