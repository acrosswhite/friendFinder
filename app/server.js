var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require('./app/routing/apiRoutes.js')(app); 
var htmlRoutes = require('./app/routing/htmlRoutes.js')(app);
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, function(){
	console.log("listening on PORT: " + PORT);
})