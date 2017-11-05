var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = require("server.js");

app.get("/", function(req, res){
	res.sendFile(path.join(_dirname, "home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(_dirname, "survey.html"));
});

