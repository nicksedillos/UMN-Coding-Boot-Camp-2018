// Dependencies
var friendsData = require("../data/friends")

// Routing
module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});
	app.post("/api/friends", function(req, res){
		friendsData.push(req.body);
	});
}