var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = require("../server.js");
var app = express();


function htmlRouting(app){
	app.use("/", express.static(function(req, res)){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.use("/survey", express.static(function(req, res)){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};

module.exports = htmlRouting();


