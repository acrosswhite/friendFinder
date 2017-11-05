var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = require("../server.js");
var friends = require("../data/friends.js");

app.get("/api/friends/: friends?", function(req, res){
	
		res.json(friends);
});


