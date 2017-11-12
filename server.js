var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var htmlRoutes = require("./routing/htmlRoutes.js")
var app = express();
var PORT = process.env.PORT || 3000;

//htmlRoutes.setupHtmlRouting(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, './app/public')));


require("./routing/apiRoutes.js")(app); 
require("./routing/htmlRoutes.js")(app)



app.listen(PORT, function(){
	console.log("listening on PORT: " + PORT);

})