var mongoose = require("mongoose");

mongoose.connect("mongodb://git.heroku.com/fen1x-scraper.git", function(err) {
	if(err) throw err;
	console.log('database connected');
});