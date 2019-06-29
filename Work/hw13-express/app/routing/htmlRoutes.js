// Dependencies
var path = require("path");

// Routing
module.exports = function(app){
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	// Trying to get external survey submission JS file to work
	// app.get("/survey/surveySubmission.js", function(req, res) {
	// 	res.sendFile(path.join(__dirname, "../public/surveySubmission.js"));
	// });
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
}