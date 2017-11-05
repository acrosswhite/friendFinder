var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = require("../server.js");
//var app = express();



module.exports = function setupHtmlRouting(app){
	console.log("html routing on")
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};



//module.exports = {setupHtmlRouting};
