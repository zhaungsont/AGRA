const express = require("express");
const app = express();
app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/about", function(req, res){
  res.sendFile(__dirname + "/src/about.html");
});

app.get("/merch", function(req, res){
  res.sendFile(__dirname + "/src/merch.html");
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/src/contact.html");
});

app.get("/faq", function(req, res){
  res.sendFile(__dirname + "/src/faq.html");
});

app.get("/:customListName",function(req,res){
  const customListName = req.params.customListName;
  res.sendFile(__dirname + "/src/404.html");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
