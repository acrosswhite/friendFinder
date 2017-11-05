var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = require("server.js");

app.get("/api/friends/: friends?", function(req, res){
	var allfriends = req.params.friends;

	if (allfriends){
		console.log(allfriends);

		for (var i = 0; i < friends.length; i++) {
			if (allfriends === friends[i].routeName){
				return res.json(friends[i]);
			}
			return res.json(false);
		}
	return res.json(friends);
	}
});


