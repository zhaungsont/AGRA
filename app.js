const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/src/index.html");
})

app.get("/about", function(req, res){
  res.sendFile(__dirname + "/src/about.html");
})







app.listen(3000, function() {
  console.log("Server started on port 3000");
});
