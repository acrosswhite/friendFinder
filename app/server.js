var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, './app/public')));


require(path.join(__dirname, "./routing/apiRoutes.js")); 
require(path.join(__dirname, "./routing/htmlRoutes.js"));

app.listen(PORT, function(){
	console.log("listening on PORT: " + PORT);
})