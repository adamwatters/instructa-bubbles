var express = require("express");
var https = require("https");
var getCategoriesObject = require("./categoriesObject");
var mkChannelArray = require("./mkChannelArray");
var mkCategoryArray = require("./mkCategoryArray");

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));

var categories = getCategoriesObject.getCategoriesObject()

var options = {
	host: "devru-instructables.p.mashape.com",
	path: "/list?limit=100&offset=0&sort=recent&type=id",
	method: "GET",
	headers: {
        "X-Mashape-Key" : process.env.MASHKEY
	}
}

console.log("setting finished back to undefined")
var finished;

app.get("/instructables", function(request,response){

    if(!(finished === undefined)){
        console.log("avoiding API");
        response.end(finished);
        return;
    }

    console.log("making request to Instructables");
	var req = https.request(options, function(res){
	var dataChunks = [];
	var i = 0;
	res.on("data", function(chunk){
		dataChunks.push(chunk);
	}).on("end", function(){
		var body = Buffer.concat(dataChunks);
		var stringBody = body.toString("utf-8");
		var parsedData = JSON.parse(stringBody);
		finished = JSON.stringify(
			mkCategoryArray.mkCategoryArray(
				categories, mkChannelArray.mkChannelArray(
					categories, parsedData.items
					)
				)
			);
        response.end(finished);
		})
	});

	req.end();

	req.on("error", function(error){
		console.log("error:" + error.message);
	})

});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})