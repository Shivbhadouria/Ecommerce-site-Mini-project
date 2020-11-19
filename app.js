//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use("/static", express.static(__dirname+ "/static"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/",function(req,res){
  res.render("admin/dashboard");
});

//Cloth Section

app.get("/views/pages/cloth", function(req, res){
  res.render("pages/Cloth/Cloth");
});
app.get("/views/pages/Cloth/Men", function(req, res){
  res.render("pages/Cloth/Men");
});
app.get("/views/pages/Cloth/Women", function(req, res){
  res.render("pages/Cloth/Women");
});

//Adventure Section
app.get("/views/pages/Adventure", function(req, res){
  res.render("pages/Adventure/Adventure");
});
app.get("/views/pages/Adventure/Mask", function(req, res){
  res.render("pages/Adventure/Mask");
});
app.get("/views/pages/Adventure/Helemt", function(req, res){
  res.render("pages/Adventure/Helemt");
});


//Shoes Section
app.get("/views/pages/Shoes", function(req, res){
  res.render("pages/Shoes/Shoes");
});
app.get("/views/pages/Shoes/menShoes", function(req, res){
  res.render("pages/Shoes/menShoes");
});
app.get("/views/pages/Shoes/womenShoes", function(req, res){
  res.render("pages/Shoes/womenShoes");
});


//GADAGETS Section
app.get("/views/pages/Gadgets", function(req, res){
  res.render("pages/Gadgets/Gadget");
});
app.get("/views/pages/Gadgets/Laptop", function(req, res){
  res.render("pages/Gadgets/Laptop");
});
app.get("/views/pages/Gadgets/Mobile", function(req, res){
  res.render("pages/Gadgets/Mobile");
});


//Stationary Section
app.get("/views/pages/Staionary", function(req, res){
  res.render("pages/Staionary/sunglass");
});
app.get("/views/pages/Staionary/MenSunglass", function(req, res){
  res.render("pages/Staionary/MenSunglass");
});
app.get("/views/pages/Staionary/WomenSunglass", function(req, res){
  res.render("pages/Staionary/WomenSunglass");
});








app.listen(5000, function(){
  console.log("server started in port 5000.");
});
