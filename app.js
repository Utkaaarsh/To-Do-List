const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items=["eat-something"];
app.get("/", function(req, res){
   var options = {
      weekday : "long",
      day : "numeric",
      month: "long"
   };  

   var today = new Date();
   var day = today.toLocaleDateString("en-US", options);
   
   res.render("text", {naam : day , newListitem : items});
   
})

app.post("/", function(req, res){
  var itm = req.body.newitem;
   items.push(itm);
   res.redirect("/");
})     

app.listen(3000, function(){
   console.log("your live");
})