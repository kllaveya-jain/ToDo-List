const express = require("express");
const bodyParser = require("body-parser");
let today = require(__dirname + "/date.js");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


let itemList = new Array;
let workItems = new Array;
app.get("/", function(req, res) {
   console.log(today);
   let day = today.getDate();
   res.render("lists", {listTitle: day, items: itemList});
});

app.post("/", function (req, res) {
   let taskToBeAdded = req.body.task;
   let listType = req.body.list;
   if (listType === "Work") {
      workItems.push(req.body.task);
      res.redirect("/work");
   }
   else {
      itemList.push(taskToBeAdded);
      res.redirect("/");
   }
   console.log(taskToBeAdded);
   console.log(req.body);
});

app.get("/work", function (req, res) {
   day = "Work";
   res.render("lists", {listTitle: day, items: workItems});
});

app.listen(3000, function () {
   console.log("Server is listening on port 3000.");
});