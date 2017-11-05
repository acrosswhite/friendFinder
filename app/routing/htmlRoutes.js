var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = require("server.js");


function htmlRouting(){
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};

module.exports = htmlRouting();
